(function(e){function t(t){for(var c,s,r=t[0],o=t[1],u=t[2],l=0,d=[];l<r.length;l++)s=r[l],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&d.push(i[s][0]),i[s]=0;for(c in o)Object.prototype.hasOwnProperty.call(o,c)&&(e[c]=o[c]);h&&h(t);while(d.length)d.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],c=!0,s=1;s<n.length;s++){var r=n[s];0!==i[r]&&(c=!1)}c&&(a.splice(t--,1),e=o(o.s=n[0]))}return e}var c={},s={app:0},i={app:0},a=[];function r(e){return o.p+"static/js/"+({}[e]||e)+"."+{"chunk-134ec1dc":"87638287","chunk-13b07ca5":"11833bcd","chunk-487896e7":"69cdcafb","chunk-4dae396b":"0ee6bb40","chunk-2f304dee":"649e4dc7","chunk-23726328":"7a638dfb","chunk-675c7703":"7c7378cd","chunk-2d2091df":"90a98553","chunk-5d5c4530":"f0675a96","chunk-0809b062":"456fccc0","chunk-1653b664":"4bba37ff","chunk-595ffc05":"8affd7fe","chunk-49211740":"e4dea096","chunk-283aacba":"52472391","chunk-3b435dde":"bd4904a1","chunk-53e279b3":"cf489a46","chunk-5a1e13e4":"287f68a0","chunk-7fae0422":"0d9be069","chunk-d28a86c4":"d0c1f74e","chunk-2d21da1a":"707bd994","chunk-ee62c128":"c11fb53e","chunk-2d0cc2be":"71e3fcd8","chunk-2d237d41":"b4b87abb","chunk-64076603":"2c344ed9","chunk-d22da0c0":"da01e99e","chunk-da9476ec":"f8c15985","chunk-2ca39dde":"bfb67629","chunk-5145872a":"f0bd0577"}[e]+".js"}function o(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.e=function(e){var t=[],n={"chunk-134ec1dc":1,"chunk-13b07ca5":1,"chunk-487896e7":1,"chunk-4dae396b":1,"chunk-2f304dee":1,"chunk-23726328":1,"chunk-675c7703":1,"chunk-5d5c4530":1,"chunk-0809b062":1,"chunk-1653b664":1,"chunk-595ffc05":1,"chunk-49211740":1,"chunk-283aacba":1,"chunk-3b435dde":1,"chunk-53e279b3":1,"chunk-5a1e13e4":1,"chunk-7fae0422":1,"chunk-d28a86c4":1,"chunk-ee62c128":1,"chunk-64076603":1,"chunk-d22da0c0":1,"chunk-da9476ec":1,"chunk-2ca39dde":1,"chunk-5145872a":1};s[e]?t.push(s[e]):0!==s[e]&&n[e]&&t.push(s[e]=new Promise((function(t,n){for(var c="static/css/"+({}[e]||e)+"."+{"chunk-134ec1dc":"849ccfd5","chunk-13b07ca5":"029dd736","chunk-487896e7":"b7730bd4","chunk-4dae396b":"92b3713e","chunk-2f304dee":"a8a2d99a","chunk-23726328":"7e460329","chunk-675c7703":"75b51be7","chunk-2d2091df":"31d6cfe0","chunk-5d5c4530":"75269c9b","chunk-0809b062":"5828e8bf","chunk-1653b664":"5b949e24","chunk-595ffc05":"678c9c97","chunk-49211740":"43a25f0f","chunk-283aacba":"f186cc51","chunk-3b435dde":"f186cc51","chunk-53e279b3":"f186cc51","chunk-5a1e13e4":"f186cc51","chunk-7fae0422":"c233115f","chunk-d28a86c4":"cdd32c08","chunk-2d21da1a":"31d6cfe0","chunk-ee62c128":"44bbe779","chunk-2d0cc2be":"31d6cfe0","chunk-2d237d41":"31d6cfe0","chunk-64076603":"e451beea","chunk-d22da0c0":"7c71cffb","chunk-da9476ec":"f1965e2d","chunk-2ca39dde":"efa1eae8","chunk-5145872a":"197de139"}[e]+".css",i=o.p+c,a=document.getElementsByTagName("link"),r=0;r<a.length;r++){var u=a[r],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===c||l===i))return t()}var d=document.getElementsByTagName("style");for(r=0;r<d.length;r++){u=d[r],l=u.getAttribute("data-href");if(l===c||l===i)return t()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=t,h.onerror=function(t){var c=t&&t.target&&t.target.src||i,a=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=c,delete s[e],h.parentNode.removeChild(h),n(a)},h.href=i;var b=document.getElementsByTagName("head")[0];b.appendChild(h)})).then((function(){s[e]=0})));var c=i[e];if(0!==c)if(c)t.push(c[2]);else{var a=new Promise((function(t,n){c=i[e]=[t,n]}));t.push(c[2]=a);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,o.nc&&l.setAttribute("nonce",o.nc),l.src=r(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(h);var n=i[e];if(0!==n){if(n){var c=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+c+": "+s+")",d.name="ChunkLoadError",d.type=c,d.request=s,n[1](d)}i[e]=void 0}};var h=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},o.m=e,o.c=c,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)o.d(n,c,function(t){return e[t]}.bind(null,c));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/",o.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var h=l;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0f0c":function(e,t,n){var c={"./Light/Index":["cf99","chunk-4dae396b","chunk-2f304dee","chunk-675c7703"],"./LightHue/Index":["a84f","chunk-4dae396b","chunk-2f304dee","chunk-675c7703","chunk-2d2091df"],"./Media/Index":["3951","chunk-4dae396b","chunk-5d5c4530","chunk-595ffc05","chunk-49211740","chunk-7fae0422"],"./MediaMplayer/Index":["47a8","chunk-4dae396b","chunk-5d5c4530","chunk-595ffc05","chunk-49211740","chunk-283aacba"],"./MediaMpv/Index":["23b7","chunk-4dae396b","chunk-5d5c4530","chunk-595ffc05","chunk-49211740","chunk-3b435dde"],"./MediaOmxplayer/Index":["eede","chunk-4dae396b","chunk-5d5c4530","chunk-595ffc05","chunk-49211740","chunk-53e279b3"],"./MediaVlc/Index":["bdae","chunk-4dae396b","chunk-5d5c4530","chunk-595ffc05","chunk-49211740","chunk-5a1e13e4"],"./Music/Index":["0d41","chunk-4dae396b","chunk-5d5c4530","chunk-595ffc05","chunk-d28a86c4"],"./MusicMpd/Index":["d1b9","chunk-4dae396b","chunk-5d5c4530","chunk-595ffc05","chunk-d28a86c4","chunk-2d21da1a"],"./MusicSnapcast/Index":["d5eb","chunk-4dae396b","chunk-2f304dee","chunk-23726328"],"./Rtorrent/Index":["4d91","chunk-5d5c4530","chunk-49211740","chunk-ee62c128","chunk-2d0cc2be"],"./Torrent/Index":["fd7d","chunk-5d5c4530","chunk-49211740","chunk-ee62c128","chunk-2d237d41"],"./ZigbeeMqtt/Index":["655e","chunk-4dae396b","chunk-5d5c4530","chunk-2f304dee","chunk-1653b664"],"./Zwave/Index":["234d","chunk-4dae396b","chunk-5d5c4530","chunk-2f304dee","chunk-0809b062"]};function s(e){if(!n.o(c,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=c[e],s=t[0];return Promise.all(t.slice(1).map(n.e)).then((function(){return n(s)}))}s.keys=function(){return Object.keys(c)},s.id="0f0c",e.exports=s},1061:function(e,t,n){"use strict";n("b95a")},1277:function(e,t,n){},2518:function(e,t,n){"use strict";n("90e7")},"2aa2":function(e,t,n){},"2e56":function(e,t,n){"use strict";n("c10a")},"3a5e":function(e,t,n){"use strict";var c=n("7a23"),s=Object(c["K"])("data-v-4d9c871b");Object(c["u"])("data-v-4d9c871b");var i={class:"loading"},a={class:"icon"};Object(c["s"])();var r=s((function(e,t){return Object(c["r"])(),Object(c["e"])("div",i,[Object(c["h"])("div",a,[(Object(c["r"])(),Object(c["e"])(c["a"],null,Object(c["x"])(4,(function(e){return Object(c["h"])("div",{key:e})})),64))])])}));n("4f22");const o={};o.render=r,o.__scopeId="data-v-4d9c871b";t["a"]=o},"3c6d":function(e,t,n){},"3e54":function(e,t,n){"use strict";n("d3b7");var c=n("bc3a"),s=n.n(c),i={name:"Api",methods:{execute:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:6e4,c={};return"target"in e&&e["target"]||(e["target"]="localhost"),"type"in e&&e["type"]||(e["type"]="request"),n&&(c.timeout=n),new Promise((function(n,i){s.a.post("/execute",e,c).then((function(e){var c;if(e=e.data.response,null===(c=e.errors)||void 0===c?void 0:c.length){var s,a=(null===(s=e.errors)||void 0===s?void 0:s[0])||e;t.notify({text:a,error:!0}),i(a)}else n(e.output)})).catch((function(e){t.notify({text:e,error:!0}),i(e)}))}))},request:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:6e4;return this.execute({type:"request",action:e,args:t},n)}}},a=i,r=(n("99af"),{name:"DateTime",methods:{formatDate:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return"string"===typeof e&&(e=new Date(Date.parse(e))),e.toDateString().substring(0,t?15:10)},formatTime:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return"string"===typeof e&&(e=new Date(Date.parse(e))),e.toTimeString().substring(0,t?8:5)},formatDateTime:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return"string"===typeof e&&(e=new Date(Date.parse(e))),"".concat(this.formatDate(e,t),", ").concat(this.formatTime(e,n))}}}),o=r,u=(n("4160"),n("159b"),n("ddb0"),n("2909")),l=n("f5ef"),d={name:"Events",computed:{_eventsReady:function(){var e;return null===(e=this.$root.$refs.events)||void 0===e?void 0:e.initialized}},methods:{subscribe:function(e,t){for(var n=this,c=arguments.length,s=new Array(c>2?c-2:0),i=2;i<c;i++)s[i-2]=arguments[i];var a=function(){l["a"].emit("subscribe",{events:s,handler:e,handlerName:t||n.generateId()})};if(!this._eventsReady){var r=this,o=this.$watch((function(){return r._eventsReady}),(function(e){e&&(a(),o())}));return o}a()},unsubscribe:function(e){l["a"].emit("unsubscribe",e)},generateId:function(){return btoa(Object(u["a"])(Array(16).keys()).forEach((function(){return String.fromCharCode(Math.round(255*Math.random()))})))}}},h=d,b={name:"Notification",methods:{notify:function(e){l["a"].emit("notification-create",e)},warn:function(e){this.notify({text:e,warning:!0})},error:function(e){throw this.notify({text:e,error:!0}),e}}},f=b,p={name:"Screen",methods:{isMobile:function(){return window.matchMedia("only screen and (max-width: 760px)").matches},isTablet:function(){return!this.isMobile()&&window.matchMedia("only screen and (max-width: 960px)").matches},isDesktop:function(){return window.matchMedia("only screen and (min-width: 1152px)").matches}}},m=p,v=(n("b680"),{name:"Types",methods:{parseBoolean:function(e){return"string"===typeof e?(e=e.toLowerCase(),"true"===e||"false"!==e&&!!parseInt(e)):!!e},convertSize:function(e){"string"===typeof e&&(e=parseInt(e));var t=null,n=["B","KB","MB","GB","TB"];return n.forEach((function(c,s){e<=1024&&null==t?t=c:e>1024&&(s===n.length-1?t=c:e/=1024)})),"".concat(e.toFixed(2)," ").concat(t)}}}),g=v,O={name:"Utils",mixins:[a,f,h,o,m,g]};t["a"]=O},4212:function(e,t,n){"use strict";n("6a4b")},"4f22":function(e,t,n){"use strict";n("6364")},5056:function(e){e.exports=JSON.parse('{"a":{"light.hue":{"class":"fas fa-lightbulb"},"media.omxplayer":{"class":"fa fa-film"},"media.mplayer":{"class":"fa fa-film"},"media.mpv":{"class":"fa fa-film"},"media.vlc":{"class":"fa fa-film"},"music.mpd":{"class":"fas fa-music"},"music.snapcast":{"class":"fa fa-volume-up"},"torrent":{"class":"fa fa-magnet"},"rtorrent":{"class":"fa fa-magnet"},"zigbee.mqtt":{"imgUrl":"/icons/zigbee.svg"},"zwave":{"imgUrl":"/icons/z-wave.png"}}}')},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("7a23");function s(e,t,n,s,i,a){var r=Object(c["z"])("Events"),o=Object(c["z"])("Notifications"),u=Object(c["z"])("VoiceAssistant"),l=Object(c["z"])("Pushbullet"),d=Object(c["z"])("router-view");return Object(c["r"])(),Object(c["e"])(c["a"],null,[a.hasWebsocket?(Object(c["r"])(),Object(c["e"])(r,{key:0,ref:"events","ws-port":i.config["backend.http"].websocket_port},null,8,["ws-port"])):Object(c["f"])("",!0),Object(c["h"])(o,{ref:"notifications"},null,512),a.hasAssistant?(Object(c["r"])(),Object(c["e"])(u,{key:1,ref:"voice-assistant"},null,512)):Object(c["f"])("",!0),a.hasPushbullet?(Object(c["r"])(),Object(c["e"])(l,{key:2,ref:"pushbullet"},null,512)):Object(c["f"])("",!0),Object(c["h"])(d)],64)}n("96cf");var i=n("1da1"),a=(n("9911"),Object(c["K"])("data-v-6dc8bebc"));Object(c["u"])("data-v-6dc8bebc");var r={class:"notifications"};Object(c["s"])();var o=a((function(e,t,n,s,i,a){var o=Object(c["z"])("Notification");return Object(c["r"])(),Object(c["e"])("div",r,[(Object(c["r"])(!0),Object(c["e"])(c["a"],null,Object(c["x"])(e.notifications,(function(e,t,n){return Object(c["r"])(),Object(c["e"])(o,{key:n,id:t,text:e.text,html:e.html,title:e.title,link:e.link,image:e.image,warning:e.warning,error:e.error,onClicked:a.destroy},null,8,["id","text","html","title","link","image","warning","error","onClicked"])})),128))])})),u=(n("a9e3"),Object(c["K"])("data-v-7646705e"));Object(c["u"])("data-v-7646705e");var l={class:"body"},d={key:0,class:"image col-3"},h={class:"row"},b={key:3,class:"fa fa-exclamation"},f={key:4,class:"fa fa-times"};Object(c["s"])();var p=u((function(e,t,n,s,i,a){return Object(c["r"])(),Object(c["e"])("div",{class:["notification fade-in",{warning:n.warning,error:n.error}],onClick:t[1]||(t[1]=function(){return a.clicked.apply(a,arguments)})},[n.title?(Object(c["r"])(),Object(c["e"])("div",{key:0,class:"title",textContent:Object(c["C"])(n.title)},null,8,["textContent"])):Object(c["f"])("",!0),Object(c["h"])("div",l,[n.image||n.warning||n.error?(Object(c["r"])(),Object(c["e"])("div",d,[Object(c["h"])("div",h,[n.image&&n.image.src?(Object(c["r"])(),Object(c["e"])("img",{key:0,src:n.image.src,alt:""},null,8,["src"])):n.image&&n.image.icon?(Object(c["r"])(),Object(c["e"])("i",{key:1,class:["fa","fa-"+n.image.icon],style:n.image.color?"--color: "+n.image.color:""},null,6)):n.image&&n.image.iconClass?(Object(c["r"])(),Object(c["e"])("i",{key:2,class:n.image.iconClass,style:n.image.color?"--color: "+n.image.color:""},null,6)):n.warning?(Object(c["r"])(),Object(c["e"])("i",b)):n.error?(Object(c["r"])(),Object(c["e"])("i",f)):Object(c["f"])("",!0)])])):Object(c["f"])("",!0),n.text&&n.image?(Object(c["r"])(),Object(c["e"])("div",{key:1,class:"text col-9",textContent:Object(c["C"])(n.text)},null,8,["textContent"])):Object(c["f"])("",!0),n.html&&n.image?(Object(c["r"])(),Object(c["e"])("div",{key:2,class:"text col-9",innerHTML:n.html},null,8,["innerHTML"])):Object(c["f"])("",!0),n.text&&!n.image?(Object(c["r"])(),Object(c["e"])("div",{key:3,class:"text row horizontal-center",textContent:Object(c["C"])(n.text)},null,8,["textContent"])):Object(c["f"])("",!0),n.html&&!n.image?(Object(c["r"])(),Object(c["e"])("div",{key:4,class:"text row horizontal-center",innerHTML:n.html},null,8,["innerHTML"])):Object(c["f"])("",!0)])],2)})),m={name:"Notification",props:["id","text","html","title","image","link","error","warning"],methods:{clicked:function(){this.link&&window.open(this.link,"_blank"),this.$emit("clicked",this.id)}}};n("f34e");m.render=p,m.__scopeId="data-v-7646705e";var v=m,g={name:"Notifications",components:{Notification:v},props:{duration:{type:Number,default:1e4}},data:function(){return{index:0,notifications:{},timeouts:{}}},methods:{create:function(e){var t=this.index++;this.notifications[t]=e,null==e.duration&&(e.duration=this.duration);var n=e.duration?parseInt(e.duration):0;n&&(this.timeouts[t]=setTimeout(this.destroy.bind(null,t),n))},destroy:function(e){delete this.notifications[e],delete this.timeouts[e]}}};n("2e56");g.render=o,g.__scopeId="data-v-6dc8bebc";var O=g,j=n("3e54");function k(e,t,n,s,i,a){return Object(c["r"])(),Object(c["e"])("div")}n("99af"),n("b64b"),n("07ac");var y=n("b85c"),w=n("2909"),x=n("f5ef"),C={name:"Events",props:{wsPort:{type:Number,default:8009}},data:function(){return{ws:null,initialized:!1,pending:!1,opened:!1,timeout:null,reconnectMsecs:3e4,handlers:{},handlerNameToEventTypes:{}}},methods:{onWebsocketTimeout:function(){console.log("Websocket reconnection timed out, retrying"),this.pending=!1,this.ws&&this.ws.close(),this.onClose()},onMessage:function(e){var t=[];if(e=e.data,"string"===typeof e)try{e=JSON.parse(e)}catch(i){console.warn("Received invalid non-JSON event"),console.warn(e)}if(console.debug(e),"event"===e.type){null in this.handlers&&t.push(this.handlers[null]),e.args.type in this.handlers&&t.push.apply(t,Object(w["a"])(Object.values(this.handlers[e.args.type])));for(var n=0,c=t;n<c.length;n++){var s=c[n];s instanceof Array&&(s=s[0]),s(e.args)}}},onOpen:function(){this.opened&&(console.log("There's already an opened websocket connection, closing the newly opened one"),this.ws&&(this.ws.onclose=function(){},this.ws.close())),console.log("Websocket connection successful"),this.opened=!0,this.pending&&(this.pending=!1),this.timeout&&(clearTimeout(this.timeout),this.timeout=void 0)},onError:function(e){console.error("Websocket error"),console.error(e)},onClose:function(e){e&&console.log("Websocket closed - code: "+e.code+" - reason: "+e.reason),this.opened=!1,this.pending||(this.pending=!0,this.init())},init:function(){try{var e="https:"===location.protocol?"wss":"ws",t="".concat(e,"://").concat(location.hostname,":").concat(this.wsPort);this.ws=new WebSocket(t)}catch(n){return console.error("Websocket initialization error"),void console.error(n)}this.pending=!0,this.timeout=setTimeout(this.onWebsocketTimeout,this.reconnectMsecs),this.ws.onmessage=this.onMessage,this.ws.onopen=this.onOpen,this.ws.onerror=this.onError,this.ws.onclose=this.onClose,this.initialized=!0},subscribe:function(e){var t,n=this,c=e.handler,s=e.events.length?e.events:[null],i=e.handlerName,a=Object(y["a"])(s);try{for(a.s();!(t=a.n()).done;){var r=t.value;r in this.handlers||(this.handlers[r]={}),i in this.handlerNameToEventTypes||(this.handlerNameToEventTypes[i]=s),this.handlers[r][i]=c}}catch(o){a.e(o)}finally{a.f()}return function(){n.unsubscribe(i)}},unsubscribe:function(e){var t=this.handlerNameToEventTypes[e];if(t){var n,c=Object(y["a"])(t);try{for(c.s();!(n=c.n()).done;){var s,i=n.value;(null===(s=this.handlers[i])||void 0===s?void 0:s[e])&&(delete this.handlers[i][e],Object.keys(this.handlers[i]).length||delete this.handlers[i])}}catch(a){c.e(a)}finally{c.f()}delete this.handlerNameToEventTypes[e]}}},created:function(){x["a"].on("subscribe",this.subscribe),x["a"].on("unsubscribe",this.unsubscribe),this.init()}};C.render=k;var T=C,I={class:"assistant-modal"},_={class:"icon"},M={key:0,class:"fa fa-bell"},N={key:1,class:"fa fa-volume-up"},S={key:2,class:"fa fa-comment-dots"},P={key:3,class:"fa fa-microphone"},z={class:"text"},E={key:0,class:"listening"},R=Object(c["h"])("span",null,"Assistant listening",-1),A={key:1,class:"speech-recognized"},$={key:2,class:"responding"};function D(e,t,n,s,i,a){var r=Object(c["z"])("Modal");return Object(c["r"])(),Object(c["e"])("div",I,[Object(c["h"])(r,{ref:"assistantModal"},{default:Object(c["H"])((function(){return[Object(c["h"])("div",_,[i.state.alerting?(Object(c["r"])(),Object(c["e"])("i",M)):i.state.responding?(Object(c["r"])(),Object(c["e"])("i",N)):i.state.speechRecognized?(Object(c["r"])(),Object(c["e"])("i",S)):(Object(c["r"])(),Object(c["e"])("i",P))]),Object(c["h"])("div",z,[i.state.listening?(Object(c["r"])(),Object(c["e"])("div",E,[R])):i.state.speechRecognized?(Object(c["r"])(),Object(c["e"])("div",A,[Object(c["h"])("span",{textContent:Object(c["C"])(i.phrase)},null,8,["textContent"])])):i.state.responding?(Object(c["r"])(),Object(c["e"])("div",$,[Object(c["h"])("span",{textContent:Object(c["C"])(i.responseText)},null,8,["textContent"])])):Object(c["f"])("",!0)])]})),_:1},512)])}var V=n("714b"),L={name:"VoiceAssistant",components:{Modal:V["a"]},mixins:[j["a"]],data:function(){return{responseText:"",phrase:"",hideTimeout:void 0,state:{listening:!1,speechRecognized:!1,responding:!1,alerting:!1}}},methods:{reset:function(){this.state.listening=!1,this.state.speechRecognized=!1,this.state.responding=!1,this.state.alerting=!1,this.phrase="",this.responseText=""},conversationStart:function(){this.reset(),this.state.listening=!0,this.$refs.assistantModal.show(),this.hideTimeout&&(clearTimeout(this.hideTimeout),this.hideTimeout=void 0)},conversationEnd:function(){var e=this,t=this;this.hideTimeout=setTimeout((function(){e.reset(),t.$refs.assistantModal.close(),t.hideTimeout=void 0}),4e3)},speechRecognized:function(e){this.reset(),this.state.speechRecognized=!0,this.phrase=e.phrase,this.$refs.assistantModal.show()},response:function(e){this.reset(),this.state.responding=!0,this.responseText=e.response_text,this.$refs.assistantModal.show()},alertOn:function(){this.reset(),this.state.alerting=!0,this.$refs.assistantModal.show()},alertOff:function(){this.reset(),this.state.alerting=!1,this.$refs.assistantModal.close()},registerHandlers:function(){this.subscribe(this.conversationStart,null,"platypush.message.event.assistant.ConversationStartEvent"),this.subscribe(this.alertOn,null,"platypush.message.event.assistant.AlertStartedEvent"),this.subscribe(this.alertOff,null,"platypush.message.event.assistant.AlertEndEvent"),this.subscribe(this.speechRecognized,null,"platypush.message.event.assistant.SpeechRecognizedEvent"),this.subscribe(this.response,null,"platypush.message.event.assistant.ResponseEvent"),this.subscribe(this.conversationEnd,null,"platypush.message.event.assistant.ConversationEndEvent","platypush.message.event.assistant.NoResponseEvent","platypush.message.event.assistant.ConversationTimeoutEvent")}},mounted:function(){this.registerHandlers()}};n("d73f");L.render=D;var q=L;function W(e,t,n,s,i,a){return Object(c["r"])(),Object(c["e"])("div")}var B={name:"Pushbullet",mixins:[j["a"]],methods:{onMessage:function(e){"mirror"===e.push_type&&this.notify({title:e.title,text:e.body,image:{src:e.icon?"data:image/png;base64, "+e.icon:void 0,icon:e.icon?void 0:"bell"}})}},mounted:function(){this.subscribe(this.onMessage,null,"platypush.message.event.pushbullet.PushbulletEvent")}};B.render=W;var K=B,U={name:"App",mixins:[j["a"]],components:{Pushbullet:K,Notifications:O,Events:T,VoiceAssistant:q},data:function(){return{config:{},userAuthenticated:!1}},computed:{hasWebsocket:function(){return this.userAuthenticated&&"backend.http"in this.config},hasAssistant:function(){return this.hasWebsocket},hasPushbullet:function(){return this.hasWebsocket&&("pushbullet"in this.config||"backend.pushbullet"in this.config)}},methods:{onNotification:function(e){this.$refs.notifications.create(e)},initConfig:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.request("config.get");case 2:e.config=t.sent,e.userAuthenticated=!0;case 4:case"end":return t.stop()}}),t)})))()}},created:function(){this.initConfig()},mounted:function(){x["a"].on("notification-create",this.onNotification)}};n("d08b");U.render=s;var H=U,F=n("6c02"),J=Object(c["K"])("data-v-22184c2e");Object(c["u"])("data-v-22184c2e");var Z=Object(c["h"])("link",{rel:"preconnect",href:"https://fonts.gstatic.com"},null,-1),G=Object(c["h"])("link",{href:"https://fonts.googleapis.com/css2?family=Roboto&display=swap",rel:"stylesheet"},null,-1);Object(c["s"])();var Q=J((function(e,t,n,s,i,a){var r=Object(c["z"])("Loading"),o=Object(c["z"])("Widget"),u=Object(c["z"])("Row");return Object(c["r"])(),Object(c["e"])(c["a"],null,[i.loading?(Object(c["r"])(),Object(c["e"])(r,{key:0})):Object(c["f"])("",!0),Z,G,Object(c["h"])("div",{id:"dashboard",class:["columns is-mobile",a.classes],style:i.style},[(Object(c["r"])(!0),Object(c["e"])(c["a"],null,Object(c["x"])(i.rows,(function(e,t){return Object(c["r"])(),Object(c["e"])(u,{key:t,class:e.class,style:e.style},{default:J((function(){return[(Object(c["r"])(!0),Object(c["e"])(c["a"],null,Object(c["x"])(e.widgets,(function(e,t){return Object(c["r"])(),Object(c["e"])(c["b"],{key:t},[Object(c["h"])(o,{style:e.style,class:e.class},{default:J((function(){return[(Object(c["r"])(),Object(c["e"])(Object(c["A"])(e.component),e.props,null,16))]})),_:2},1032,["style","class"])],1024)})),128))]})),_:2},1032,["class","style"])})),128))],6)],64)})),X=(n("d81d"),n("13d5"),n("b0c0"),n("b680"),n("d3b7"),n("3a5e")),Y=Object(c["K"])("data-v-1b4663f2"),ee=Y((function(e,t,n,s,i,a){return Object(c["r"])(),Object(c["e"])("div",{class:["row",a.classes],style:n.style},[Object(c["y"])(e.$slots,"default")],6)})),te={name:"Row",props:{class:{type:String,required:!1,default:""},style:{type:String,required:!1,default:""}},computed:{classes:function(){return this.class}}};n("6682");te.render=ee,te.__scopeId="data-v-1b4663f2";var ne=te,ce=Object(c["K"])("data-v-8c529832"),se=ce((function(e,t,n,s,i,a){return Object(c["r"])(),Object(c["e"])("div",{style:n.style,class:a.classes},[Object(c["y"])(e.$slots,"default")],6)})),ie=(n("ac1f"),n("1276"),{name:"Widget",props:{style:{type:String,required:!1,default:""},class:{type:String,required:!1,default:""}},computed:{classes:function(){return(this.class&&this.class.length?this.class.split(" "):["col-3"]).concat(["widget","column"])}}});n("1061");ie.render=se,ie.__scopeId="data-v-8c529832";var ae=ie,re={name:"Dashboard",mixins:[j["a"]],components:{Widget:ae,Loading:X["a"],Row:ne},props:{refreshSeconds:{type:Number,required:!1,default:0}},data:function(){return{rows:[],loading:!1,style:void 0,class:void 0}},computed:{classes:function(){return this.class}},methods:{parseTemplate:function(e,t){var s=(new DOMParser).parseFromString(t,"text/xml").childNodes[0],i=this;this.style=s.attributes.style?s.attributes.style.nodeValue:void 0,this.class=s.attributes.class?s.attributes.class.nodeValue:void 0,this.rows=Object(w["a"])(s.getElementsByTagName("Row")).map((function(e){return{style:e.attributes.style?e.attributes.style.nodeValue:void 0,class:e.attributes.class?e.attributes.class.nodeValue:void 0,widgets:Object(w["a"])(e.children).map((function(e){var t=Object(c["i"])((function(){return n("cdb9")("./".concat(e.nodeName,"/Index"))})),s=e.attributes.style?e.attributes.style.nodeValue:void 0,a=e.attributes.class?e.attributes.class.nodeValue:void 0,r=Object(w["a"])(e.attributes).reduce((function(e,t){return"style"!==t.nodeName&&(e[t.nodeName]=t.nodeValue),e}),{}),o={component:t,style:s,class:a,props:r||{}};return i.$options.components[e.nodeName]=t,o}))}})),this.loading=!1},refreshDashboard:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var n,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.loading=!0,e.widgets=[],n=e.$route.params.name,t.next=5,e.request("config.get_dashboard",{name:n});case 5:c=t.sent,c||e.error("Dashboard ".concat(n," not found")),e.parseTemplate(n,c);case 8:case"end":return t.stop()}}),t)})))()}},mounted:function(){if(this.refreshDashboard(),this.refreshSeconds){var e=this;setInterval((function(){e.refreshDashboard()}),parseInt((1e3*this.refreshSeconds).toFixed(0)))}}};n("7d17"),n("2518");re.render=Q,re.__scopeId="data-v-22184c2e";var oe=re;function ue(e,t,n,s,i,a){return Object(c["r"])(),Object(c["e"])("h1",null,"Object not found")}var le={name:"NotFound"};le.render=ue;var de=le,he={class:"login-container"},be={class:"login",method:"POST"},fe={class:"description"},pe=Object(c["h"])("div",{class:"row"},[Object(c["h"])("label",null,[Object(c["h"])("input",{type:"text",name:"username",placeholder:"Username"})])],-1),me=Object(c["h"])("div",{class:"row"},[Object(c["h"])("label",null,[Object(c["h"])("input",{type:"password",name:"password",placeholder:"Password"})])],-1),ve={key:0,class:"row"},ge=Object(c["h"])("label",null,[Object(c["h"])("input",{type:"password",name:"confirm_password",placeholder:"Confirm password"})],-1),Oe={class:"row pull-right"},je=Object(c["h"])("div",{class:"row pull-right"},[Object(c["h"])("label",{class:"checkbox"},[Object(c["h"])("input",{type:"checkbox",name:"remember"}),Object(c["g"])("  Keep me logged in on this device   ")])],-1);function ke(e,t,n,s,i,a){return Object(c["r"])(),Object(c["e"])("div",he,[Object(c["h"])("form",be,[Object(c["h"])("div",fe,Object(c["C"])(a._register?"Welcome":"Authenticate")+" to platypush ",1),pe,me,a._register?(Object(c["r"])(),Object(c["e"])("div",ve,[ge])):Object(c["f"])("",!0),Object(c["h"])("div",Oe,[Object(c["h"])("input",{type:"submit",class:"btn btn-primary",value:a._register?"Register":"Login"},null,8,["value"])]),je])])}var ye={name:"Login",mixins:[j["a"]],props:{register:{type:Boolean,required:!1,default:!1}},computed:{_register:function(){return this.parseBoolean(this.register)}}};n("8789");ye.render=ke;var we=ye;function xe(e,t,n,s,i,a){var r=Object(c["z"])("Login");return Object(c["r"])(),Object(c["e"])(r,{register:!0})}var Ce={name:"Register",mixins:[we],components:{Login:we},props:{register:{type:Boolean,required:!1,default:!0}}};Ce.render=xe;var Te=Ce,Ie=Object(c["K"])("data-v-6e3b2a94");Object(c["u"])("data-v-6e3b2a94");var _e={class:"canvas"};Object(c["s"])();var Me=Ie((function(e,t,n,s,i,a){var r=Object(c["z"])("Loading"),o=Object(c["z"])("Nav");return Object(c["r"])(),Object(c["e"])("main",null,[i.loading?(Object(c["r"])(),Object(c["e"])(r,{key:0})):(Object(c["r"])(),Object(c["e"])(o,{key:1,panels:i.components,"selected-panel":i.selectedPanel,hostname:i.hostname,onSelect:t[1]||(t[1]=function(e){return i.selectedPanel=e})},null,8,["panels","selected-panel","hostname"])),Object(c["h"])("div",_e,[(Object(c["r"])(!0),Object(c["e"])(c["a"],null,Object(c["x"])(i.components,(function(e,t){return Object(c["r"])(),Object(c["e"])("div",{class:["panel",{hidden:t!==i.selectedPanel}],key:t},[t===i.selectedPanel?(Object(c["r"])(),Object(c["e"])(Object(c["A"])(e.component),{key:0,config:e.config,"plugin-name":t},null,8,["config","plugin-name"])):Object(c["f"])("",!0)],2)})),128))])])})),Ne=(n("4160"),n("a15b"),n("fb6a"),n("4fad"),n("3ca3"),n("466d"),n("159b"),n("ddb0"),n("3835")),Se=Object(c["K"])("data-v-22e08197");Object(c["u"])("data-v-22e08197");var Pe=Object(c["h"])("i",{class:"fas fa-bars"},null,-1),ze={class:"icon"},Ee={key:2,class:"fas fa-puzzle-piece"};Object(c["s"])();var Re=Se((function(e,t,n,s,i,a){return Object(c["r"])(),Object(c["e"])("nav",{class:{collapsed:i.collapsed}},[Object(c["h"])("div",{class:"toggler",onClick:t[1]||(t[1]=function(e){return i.collapsed=!i.collapsed})},[Pe,n.hostname?(Object(c["r"])(),Object(c["e"])("span",{key:0,class:"hostname",textContent:Object(c["C"])(n.hostname)},null,8,["textContent"])):Object(c["f"])("",!0)]),Object(c["h"])("ul",null,[(Object(c["r"])(!0),Object(c["e"])(c["a"],null,Object(c["x"])(Object.keys(n.panels).sort(),(function(e){var t,s;return Object(c["r"])(),Object(c["e"])("li",{key:e,class:["entry",{selected:e===n.selectedPanel}],title:e,onClick:function(t){return a.onItemClick(e)}},[Object(c["h"])("a",{href:"/#".concat(e)},[Object(c["h"])("span",ze,[(null===(t=i.icons[e])||void 0===t?void 0:t.class)?(Object(c["r"])(),Object(c["e"])("i",{key:0,class:i.icons[e].class},null,2)):(null===(s=i.icons[e])||void 0===s?void 0:s.imgUrl)?(Object(c["r"])(),Object(c["e"])("img",{key:1,src:i.icons[e].imgUrl,alt:"name"},null,8,["src"])):(Object(c["r"])(),Object(c["e"])("i",Ee))]),i.collapsed?Object(c["f"])("",!0):(Object(c["r"])(),Object(c["e"])("span",{key:0,class:"name",textContent:Object(c["C"])(e)},null,8,["textContent"]))],8,["href"])],10,["title","onClick"])})),128))])],2)})),Ae=n("5056"),$e={name:"Nav",emits:["select"],mixins:[j["a"]],props:{panels:{type:Object,required:!0},selectedPanel:{type:String},hostname:{type:String}},methods:{onItemClick:function(e){this.$emit("select",e),this.collapsed=!0}},data:function(){return{collapsed:!0,icons:Ae["a"],host:null}},mounted:function(){this.isMobile()&&!this.$root.$route.hash.length&&(this.collapsed=!1)}};n("a12a");$e.render=Re,$e.__scopeId="data-v-22e08197";var De=$e,Ve={name:"Panel",mixins:[j["a"]],components:{Nav:De,Loading:X["a"]},data:function(){return{loading:!1,plugins:{},backends:{},procedures:{},components:{},hostname:void 0,selectedPanel:void 0}},methods:{initSelectedPanel:function(){var e=this.$route.hash.match("#?([a-zA-Z0-9.]+)[?]?(.*)");if(e){var t=e[1];(null===t||void 0===t?void 0:t.length)&&(this.selectedPanel=t)}},initPanels:function(){var e=this;this.components={},Object.entries(this.plugins).forEach(function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(s){var a,r,o,u,l,d;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=Object(Ne["a"])(s,2),r=a[0],o=a[1],u=r.split(".").map((function(e){return e[0].toUpperCase()+e.slice(1)})).join(""),l=null,t.prev=3,t.next=6,n("0f0c")("./".concat(u,"/Index"));case 6:l=t.sent,t.next=12;break;case 9:return t.prev=9,t.t0=t["catch"](3),t.abrupt("return");case 12:d=Object(c["i"])(Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",l);case 1:case"end":return e.stop()}}),e)})))),e.$options.components[r]=d,e.components[r]={component:d,pluginName:r,config:o};case 15:case"end":return t.stop()}}),t,null,[[3,9]])})));return function(e){return t.apply(this,arguments)}}())},parseConfig:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var n,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([e.request("config.get_plugins"),e.request("config.get_backends"),e.request("config.get_procedures"),e.request("config.get_device_id")]);case 2:n=t.sent,c=Object(Ne["a"])(n,4),e.plugins=c[0],e.backends=c[1],e.procedures=c[2],e.hostname=c[3];case 8:case"end":return t.stop()}}),t)})))()}},mounted:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.loading=!0,t.prev=1,t.next=4,e.parseConfig();case 4:e.initPanels(),e.initSelectedPanel();case 6:return t.prev=6,e.loading=!1,t.finish(6);case 9:case"end":return t.stop()}}),t,null,[[1,,6,9]])})))()}};n("4212"),n("a691d");Ve.render=Me,Ve.__scopeId="data-v-6e3b2a94";var Le=Ve,qe=[{path:"/",name:"Panel",component:Le},{path:"/dashboard/:name",name:"Dashboard",component:oe},{path:"/login",name:"Login",component:we},{path:"/register",name:"Register",component:Te},{path:"/:catchAll(.*)",component:de}],We=Object(F["a"])({history:Object(F["b"])(),routes:qe}),Be=We,Ke=Object(c["d"])(H);Ke.config.globalProperties._config=window.config,Ke.use(Be).mount("#app")},6364:function(e,t,n){},6682:function(e,t,n){"use strict";n("9751")},"6a4b":function(e,t,n){},"714b":function(e,t,n){"use strict";var c=n("7a23"),s=Object(c["K"])("data-v-422f1b1c");Object(c["u"])("data-v-422f1b1c");var i={class:"modal"},a={class:"body"};Object(c["s"])();var r=s((function(e,t,n,s,r,o){return Object(c["r"])(),Object(c["e"])("div",{class:["modal-container fade-in",{hidden:!r.isVisible}],id:n.id,style:{"--z-index":o.zIndex},onClick:t[3]||(t[3]=function(){return o.close.apply(o,arguments)})},[Object(c["h"])("div",i,[Object(c["h"])("div",{class:"content",style:{"--width":n.width,"--height":n.height},onClick:t[2]||(t[2]=function(e){return e.stopPropagation()})},[n.title?(Object(c["r"])(),Object(c["e"])("div",{key:0,class:"header",textContent:Object(c["C"])(n.title)},null,8,["textContent"])):Object(c["f"])("",!0),Object(c["h"])("div",a,[Object(c["y"])(e.$slots,"default",{onModalClose:t[1]||(t[1]=function(){return o.close.apply(o,arguments)})})])],4)])],14,["id"])})),o=(n("c975"),n("a9e3"),n("b85c")),u={name:"Modal",emits:["close","open"],props:{id:{type:String},title:{type:String},width:{type:[Number,String]},height:{type:[Number,String]},visible:{type:Boolean,default:!1},timeout:{type:[Number,String]},level:{type:Number,default:1}},data:function(){return{timeoutId:void 0,prevVisible:this.visible,isVisible:this.visible}},computed:{zIndex:function(){return 500+this.level}},methods:{close:function(){this.prevVisible=this.isVisible,this.isVisible=!1},show:function(){this.prevVisible=this.isVisible,this.isVisible=!0},toggle:function(){this.isVisible?this.close():this.show()}},mounted:function(){var e=this,t=this,n=function(e){e?t.$emit("open"):t.$emit("close"),t.isVisible=e};this.$watch((function(){return e.visible}),n),this.$watch((function(){return e.isVisible}),n)},updated:function(){if(this.prevVisible=this.isVisible,this.isVisible){var e,t=parseInt(getComputedStyle(this.$el).zIndex),n=[],c=Object(o["a"])(document.querySelectorAll(".modal-container:not(.hidden)"));try{for(c.s();!(e=c.n()).done;){var s=e.value,i=parseInt(getComputedStyle(s).zIndex);i>t?(t=i,n=[s]):i===t&&n.push(s)}}catch(r){c.e(r)}finally{c.f()}(n.indexOf(this.$el)<0||n.length>1)&&(this.$el.style.zIndex=t+1)}if(this.isVisible&&this.timeout&&!this.timeoutId){var a=function(e){return function(){e.close(),e.timeoutId=void 0}};this.timeoutId=setTimeout(a(this),0+this.timeout)}}};n("c2cf");u.render=r,u.__scopeId="data-v-422f1b1c";t["a"]=u},"7d17":function(e,t,n){"use strict";n("a3eb")},8789:function(e,t,n){"use strict";n("2aa2")},"8f10":function(e,t,n){},"90e7":function(e,t,n){},9751:function(e,t,n){},a12a:function(e,t,n){"use strict";n("3c6d")},a3eb:function(e,t,n){},a691d:function(e,t,n){"use strict";n("f00b")},b95a:function(e,t,n){},c10a:function(e,t,n){},c2cf:function(e,t,n){"use strict";n("8f10")},c632:function(e,t,n){},cdb9:function(e,t,n){var c={"./Calendar/Index":["3c97","chunk-13b07ca5"],"./DateTime/Index":["365a","chunk-64076603"],"./DateTimeWeather/Index":["3737","chunk-da9476ec","chunk-64076603","chunk-2ca39dde"],"./ImageCarousel/Index":["c845","chunk-da9476ec","chunk-64076603","chunk-5145872a"],"./Music/Index":["bcf7","chunk-487896e7"],"./Plugin/Index":["dabe","chunk-d22da0c0"],"./RssNews/Index":["c306","chunk-134ec1dc"],"./Weather/Index":["5b43","chunk-da9476ec"]};function s(e){if(!n.o(c,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=c[e],s=t[0];return Promise.all(t.slice(1).map(n.e)).then((function(){return n(s)}))}s.keys=function(){return Object.keys(c)},s.id="cdb9",e.exports=s},d08b:function(e,t,n){"use strict";n("f3b7")},d73f:function(e,t,n){"use strict";n("1277")},f00b:function(e,t,n){},f34e:function(e,t,n){"use strict";n("c632")},f3b7:function(e,t,n){},f5ef:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var c=n("14b7"),s=Object(c["a"])()}});
//# sourceMappingURL=app.bec3073c.js.map