import datetime
import json
import os
import subprocess

from platypush.plugins import action
from platypush.plugins.http.request import Plugin


class HttpWebpagePlugin(Plugin):
    """
    Plugin to handle and parse/simplify web pages.
    It used to use the Mercury Reader web API, but now that the API is discontinued this plugin is basically a
    wrapper around the `mercury-parser <https://github.com/postlight/mercury-parser>`_ JavaScript library.

    Requires:

        * **requests** (``pip install requests``)
        * **weasyprint** (``pip install weasyprint``), optional, for HTML->PDF conversion
        * **node** and **npm** installed on your system (to use the mercury-parser interface)
        * The mercury-parser library installed (``npm install @postlight/mercury-parser``)
    """

    _mercury_script = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'mercury-parser.js')

    @action
    def simplify(self, url, type='html', html=None, outfile=None):
        """
        Parse the content of a web page removing any extra elements using Mercury

        :param url: URL to parse.
        :param type: Input type. Supported types: html, markdown, text (default: html).
        :param html: Set this parameter if you want to parse some HTML content already fetched. Note
            that URL is still required by Mercury to properly style the output, but it won't be used
            to actually fetch the content.

        :param outfile: If set then the output will be written to the specified file
            (supported formats: pdf, html, plain (default)). The plugin will guess
            the format from the extension
        :return: dict

        Example if outfile is not specified::

            {
                "url": <url>,
                "title": <page title>,
                "content": <page parsed content>

            }

        Example if outfile is specified::

            {
                "url": <url>,
                "title": <page title>,
                "outfile": <output file absolute path>

            }

        """

        self.logger.info('Parsing URL {}'.format(url))
        parser = subprocess.Popen(['node', self._mercury_script, url, type, html], stdout=subprocess.PIPE, stderr=subprocess.DEVNULL)
        response = parser.stdout.read().decode().strip()

        try:
            response = json.loads(response)
        except Exception as e:
            raise RuntimeError('Could not parse JSON: {}. Response: {}'.format(str(e), response))

        self.logger.info('Got response from Mercury API: {}'.format(response))
        title = response.get('title', '{} on {}'.format(
            'Published' if response.get('date_published') else 'Generated',
            response.get('date_published', datetime.datetime.now().isoformat())))

        content = response.get('content', '')

        if not outfile:
            return {
                'url': url,
                'title': title,
                'content': content,
            }

        outfile = os.path.abspath(os.path.expanduser(outfile))
        content = '''<h1>{title}</h1><div class="_parsed-content">{content}</div>'''.\
            format(title=title, content=content)

        style = '''
            body {
                font-size: 22px;
                font-family: 'Merriweather', Georgia, 'Times New Roman', Times, serif;
            }
            '''

        if outfile.lower().endswith('.pdf'):
            import weasyprint
            from weasyprint.fonts import FontConfiguration

            font_config = FontConfiguration()
            css = [weasyprint.CSS('https://fonts.googleapis.com/css?family=Merriweather'),
                   weasyprint.CSS(string=style, font_config=font_config)]

            weasyprint.HTML(string=content).write_pdf(outfile, stylesheets=css)
        else:
            content = '''
                <html>
                    <head>
                        <title>{title}</title>
                        <style>{style}</style>
                    </head>
                    <body>{{content}}</body>
                </html>
            '''.format(title=title, style=style, content=content)

            with open(outfile, 'w', encoding='utf-8') as f:
                f.write(content)

        return {
            'url': url,
            'title': title,
            'outfile': outfile,
        }


# vim:sw=4:ts=4:et:
