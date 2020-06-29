import os
import pathlib

from platypush.plugins import Plugin, action


class FilePlugin(Plugin):
    """
    A plugin for general-purpose file methods
    """

    @classmethod
    def _get_path(cls, filename):
        return os.path.abspath(os.path.expanduser(filename))

    @action
    def read(self, file: str):
        """
        Read and return the content of a (text) file.

        :param file: Path of the file.
        """

        with open(self._get_path(file), 'r') as f:
            return f.read()

    @action
    def write(self, file: str, content: str):
        """
        Writes content to a specified (text) file. Previous content will be truncated.

        :param file: Path of the file.
        :param content: Content to write.
        """

        with open(self._get_path(file), 'w') as f:
            f.write(content)

    @action
    def append(self, file: str, content):
        """
        Append content to a specified (text) file.

        :param file: Path of the file.
        :param content: Content to write.
        """

        with open(self._get_path(file), 'a') as f:
            f.write(content)

    @action
    def getsize(self, file):
        """
        Get the size of the specified file in bytes.

        :param file: File path.
        """
        return os.path.getsize(self._get_path(file))

    @action
    def mkdir(self, directory: str, exist_ok=True, parents=True, mode=0o755):
        """
        Create a directory.

        :param directory: Directory name/path.
        :param exist_ok: If set and the directory already exist the method will
            not return an error (default: True).
        :param parents: If set and any of the parent directories in the path don't
            exist they will be created (analogous to mkdir -p) (default: True).
        :param mode: Access mode (default: 0755).
        """
        pathlib.Path(self._get_path(directory)).mkdir(parents=parents, exist_ok=exist_ok, mode=mode)

    @action
    def rmdir(self, directory: str):
        """
        Remove a directory. The directory must be empty.

        :param directory: Directory name/path.
        """
        pathlib.Path(self._get_path(directory)).rmdir()

    @action
    def touch(self, file: str, mode=0o644):
        """
        Create/touch a file.

        :param file: File name/path.
        :param mode: File permissions (default: 0644).
        """
        pathlib.Path(self._get_path(file)).touch(mode=mode)

    @action
    def chmod(self, file: str, mode):
        """
        Change the mode/permissions of a file.

        :param file: File name/path.
        :param mode: New file permissions.
        """
        pathlib.Path(self._get_path(file)).chmod(mode=mode)

    @action
    def home(self) -> str:
        """
        Returns the current user's home directory.
        """
        return str(pathlib.Path.home())

    @action
    def rename(self, file: str, name: str):
        """
        Rename/move a file.

        :param file: File to rename.
        :param name: New file name.
        """
        pathlib.Path(self._get_path(file)).rename(self._get_path(name))

    @action
    def link(self, file: str, target: str, symbolic=True):
        """
        Create a link to a file.

        :param file: File to symlink.
        :param target: Symlink path.
        :param symbolic: If True, then the target link will be a symbolic link. Otherwise,
            it will be a hard link (default: symbolic).
        """
        file = pathlib.Path(self._get_path(file))
        target = self._get_path(target)

        if symbolic:
            file.symlink_to(target)
        else:
            file.link_to(target)

    @action
    def unlink(self, file: str):
        """
        Remove a file or symbolic link.

        :param file: File/link to remove.
        """
        pathlib.Path(self._get_path(file)).unlink()


# vim:sw=4:ts=4:et:
