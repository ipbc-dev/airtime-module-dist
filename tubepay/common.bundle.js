(window.at_webpackJsonp=window.at_webpackJsonp||[]).push([[0],{"60P4":function(e){e.exports={common:{pay:"PAY",product:"Product",purchased:"Purchased",title:"Title",type:"Type",price:"Price",unexpectedState:"UNEXPECTED STATE",inactive:"INACTIVE",invalid:"INVALID",updating:"Updating...",loading:"Loading...",refresh:"Refresh"},error:{thirdPartyCookiesRequired:"Third party cookies must be enabled for TubePay functionality.",invalidBrowserConfiguration:"TubePay blocked by browser"},buytubes:{termsAndConditions:"Terms and Conditions",youMustAcceptThe:"You must accept the",toContinue:"to continue.",iAcceptThe:"I accept the",registryCode:"Registry Code",exchangeLicence:"Exchance Licence",walletLicence:"Wallet Licence",euRegulated:"EU Regulated & Secure",wireTransfer:"Wire Transfer",crypto:"Crypto",creditCard:"Credit Card",maintOverride:"Maintenance mode overriden as admin",createOrder:"Create Order",instructions:{header:"Buy TUBEs in 2 steps:",l1:"Order the amount you want to buy.",l2:"Do a transfer with the data shown after ordering.",noteMail:"Payment details will be sent by mail.",noteTab:"Payment details will open in a new tab."},underMaintenance:"Under Maintenance",payWithCrypto:"Pay with crypto",kyc:{ToBuyTubes:"To Buy TUBEs via a credit card you need to upgrade your verification level to",Plus:"Plus",Under:"under",GetVerified:"Get verified",InExtension:"in extension",Account:"Account",Settings:"settings."},toBuyCreditCard:"To buy TUBEs via a credit card please select the amount to buy and type the data of your credit card.",ccForm:{firstName:"First name",lastName:"Last name",cardNumber:"Card number",expiryMonth:"Expiry month (mm)",expiryYear:"Expiry year (yy)",cvv:"CVV",address:"Address",city:"City",country:"Country",zipCode:"ZIP Code"},countryBlocked:"Following countries aren't permitted to purchase TUBE via CC",payWithCreditCard:"Pay with credit card",successCheckMail:"Success, check your mail for details.",successNewWindow:"Success, details will open in a new window."},header:{myWallet:"My Wallet",login:"Login",logout:"Logout",noUser:"No User"},login:{loginToSync:"Please log in to the extension to synchronize sidebar.",extensionFrom:"You'll need the latest extension version from",welcomeTo:"Welcome to",withYourEmailAddr:"Log in with your email address",email:"Email",password:"password",loginToBittube:"Log in to BitTube",loginWithSocial:"Log in or sign up with a social account"},"2fa":{enter2FACode:"Enter 2FA Code","2FACode":"2FA Code"},history:{purchaseHistory:"Purchase History",next:"Next",prev:"Prev"},balance:{yourBalance:"Your Balance",availableBalance:"Available Balance",updatingBalance:"Updating balance..."},confirmation:{continue:"Continue",submit:"Submit",confirm:"Confirm",cancel:"Cancel",amount:"Amount",address:"Address"},donate:{donate:"Donate",loginToDonate:"Please login to donate",loadingData:"Loading data...",donateTo:"Donate to",creatingDonation:"Creating donation..."},product:{requestingPurchase:"Requesting purchase...",updatePending:"Update pending...",willExpireIn:"Will expire in {{min}} minutes!",hasExpired:"Has expired.",validFor:"Purchase valid for {{min}} minutes",loginToPurchase:"Please login to purchase",waitingForPurchaseVerification:"Waiting for purchase verification...",clickToDownload:"Click to Download",warning:{noSource:"Warning: Product has no source, cannot be viewed upon purchase.",badType:"Warning: Product has no recognized type, cannot be viewed upon purchase.",inactive:"Warning: Product is inactive, cannot be viewed or purchased.",fetchError:"Warning: Failed to fetch product information, will retry in {{min}} minutes."}},popup:{p1:{l1:"rewards users and publishers.",l2:"This website is powered by AirTime monetization. You, the visitor, are currently monetizing this publisher by being on this page!",l3:"By installing the AirTime browser extension, AirTime will reward you and every publisher you visit when browsing the web.",l4:"The AirTime browser extension enables you to:"},p2:{l1a:"Thank you for using the",l1b:"extension!",l2:"Thank you for using the AirTime extension! AirTime rewards you and every publisher you visit when browsing the web.",l3:"In addition, this website is powered by the native AirTime module. You, alongside each guest visitor, are currently monetizing this publisher by being on this page.",l4:"By using the AirTime browser extension, you are now able to:"},list:{1:"Monetize your time",2:"Monetize your social accounts",3:"Send donations",4:"Block ads",5:"Use the built-in VPN service (free!)",6:"& more"},note:"Please note: AirTime is not a crypto miner. It does not consume system resources.",footer:{learnMore:"Learn more",install:"Install AirTime extension"}}}},MigZ:function(e,t,n){"use strict";const o=n("l9JQ"),i=n("mjZG"),r=n("cLOM"),a=(e,t,n)=>new Promise((o,i)=>{const a=new XMLHttpRequest;a.onload=function(){try{if(200===a.status)try{o(JSON.parse(a.response))}catch(e){o(a.response)}else r.warn("xhrReq BadStatus",a.status,a.response),i(new Error("Network request returned bad status: "+a.status+" "+a.response))}catch(e){i(e)}},a.onerror=e=>{0===e.target.status&&(r.warn("xhrReq onerror (status 0):",e),i(new Error("Unexpected failure in network request. Please check your network connection.")))},a.open(t?"POST":"GET",e,!0),n&&a.setRequestHeader("Authorization","Bearer "+n),t&&a.setRequestHeader("Content-Type","application/json"),t?a.send(t):a.send()}),s={},c=e=>(s[e]||(s[e]=new Promise((t,n)=>{a(e).then(n=>{delete s[e],t(n)}).catch(t=>{delete s[e],n(t)})})),s[e]);e.exports={xhrReq:a,xhrReqGetDebounced:c,getContentUUID:async(e,t,n)=>{const a="content_uuid_"+e+"_"+t;let s;try{s=await o.getObject(a)}catch(e){r.warn("getContentUUID getObject Error",e,a)}if(s&&s.data&&s.data.uuid)return s.data.uuid;{const s=await(async(e,t,n)=>{const o=i.api_get_content_uuid+"?platformUUID="+encodeURIComponent(e)+"&contentName="+encodeURIComponent(t)+"&contentDisplayName="+encodeURIComponent(n),r=await c(o);if(r.success)return r;throw new Error("getContentUUIDFromAPI: API Call was unsuccessful!")})(e,t,n);try{await o.putObject(a,{data:s,contentName:t})}catch(e){r.warn("getContentUUID putObject Error",e,a,s)}return s.uuid}}}},Ov3N:function(e,t,n){const o=n("XzT5").default,i=n("/oNK").default,r=n("xi6P").default,a=n("Vdmv").default,s=n("mjZG"),c=n("60P4");let d;const u=async()=>(d||(o.use(i),o.use(r),d=o.init({lng:"en",fallbackLng:"en",fallbackNS:"fallback",debug:!1,detection:{order:["localStorage","navigator"],lookupLocalStorage:"am_i18nextLng",caches:["localStorage"],excludeCacheFor:["cimode"]},load:"languageOnly",backend:{loadPath:s.localizationPath,crossDomain:!0}}),o.addResourceBundle("en","fallback",c,!0,!1)),d);let l;e.exports={translate:async e=>(await u())(e),geti18nVue:()=>(l||(u(),l=new a(o)),l)}},cLOM:function(e,t,n){"use strict";const o=n("mjZG"),{getGuestUUID:i,uuidv4:r}=n("kLkQ"),a=n("tijG"),s=r();"toJSON"in Error.prototype||Object.defineProperty(Error.prototype,"toJSON",{value:function(){var e={};return Object.getOwnPropertyNames(this).forEach((function(t){e[t]=this[t]}),this),e},configurable:!0,writable:!0});const c=(...e)=>{o.logging_enabled&&console.log(...e)};let d=[],u=void 0;const l=()=>(u||(u=new Promise(async(e,t)=>{try{if(0===d.length)return;if(!o.errorBeaconURL||""===o.errorBeaconURL)return;const t=a.amClient()?window.parent.location.hostname:location.hostname,n=a.amClient()?"client":"module",r={ts:Date.now(),hostname:t,loadUUID:s,data:d,userAgent:navigator.userAgent,scriptIdent:n};d=[],r.uuid=await i(),c("SendBeaconOnHidden Data:",r);const l=navigator.sendBeacon(o.errorBeaconURL,JSON.stringify(r));l||c("SendBeaconOnHidden Failed to queue",l),u=void 0,e(l)}catch(t){c("SendBeaconOnHidden Error:",t),u=void 0,e(!1)}})),u);let m=!1;const g=async(e,t)=>{try{if(!t)return;if(!("sendBeacon"in navigator))return;if(!o.errorBeaconURL||""===o.errorBeaconURL)return;m||(m=!0,document.addEventListener("visibilitychange",(function(){"hidden"===document.visibilityState&&l()}),!1),document.addEventListener("beforeunload",(function(){l()}),!1),document.addEventListener("unload",(function(){l()}),!1)),d.push({ts:Date.now(),type:e,information:t})}catch(e){c("setErrorBeacon Error:",e)}};e.exports={debug:c,log:(...e)=>{c(...e)},warn:(...e)=>{o.logging_enabled&&console.warn(...e),g("log-warn",e)},error:(...e)=>{o.logging_enabled&&console.error(...e),g("log-error",e)},addBeaconInformation:g}},k55v:function(e,t,n){"use strict";const o=n("cLOM"),i=n("mjZG"),r=n("tijG"),{IdGenerator:a,asyncDelay:s}=n("kLkQ"),c=a(),d={},u={},l={};u.hello=e=>"hello "+e,u.explode=()=>{throw new Error("BOOM")},u.delayedEcho=async e=>(await s(1e3),e);const m=(e,t,n,o,i)=>{n.postMessage({airtimeModuleRPC:!0,cmd:i?"callback-err":"callback",data:e,cbid:t},o)},g=(e,t,n)=>{d[t]&&(n?d[t].failure(e):d[t].callback(e))},h=async e=>{if(!(e instanceof Event))return;if(!e.isTrusted)return;if(!r.amClient()&&-1===i.clientFrameURL.indexOf(e.origin))return;const t=e.data;if(!0!==t.airtimeModuleRPC&&!0!==t.airtimeExtensionRPC||!t.hasOwnProperty("cmd")||!t.hasOwnProperty("data"))return;if(!0===t.airtimeExtensionRPC&&"callback"!==t.cmd&&"callback-err"!==t.cmd&&"firebaseAuthChanged"!==t.cmd&&"firebaseTokenChanged"!==t.cmd)return;let n;switch(t.cmd){case"callback":return g(t.data,t.cbid,!1);case"callback-err":return g(t.data,t.cbid,!0);case"noAnswer":return;default:n=u[t.cmd]}if(n&&"function"==typeof n)try{let o;e.ports&&1===e.ports.length&&(o=e.ports[0]);const i=await n(t.data,o);t.cbid&&m(i,t.cbid,e.source,e.origin,!1)}catch(n){t.cbid&&m(n?n.message||n.toString():void 0,t.cbid,e.source,e.origin,!0)}else t.cbid&&m("Bad Command",t.cbid,e.source,e.origin,!0)},p=()=>{if(!this.promise){const e=this;this.promise=new Promise(async(t,n)=>{if(l.sidebar){t(await l.sidebar.getClientIframe())}else e.promise=void 0,n()})}return this.promise},f=(e,t,n=18e4,o=!1,a=!1)=>new Promise(async(s,u)=>{const l=c.get()+"";let m;const g=()=>{m&&clearTimeout(m),d[l]&&delete d[l]},h=e=>{g(),u(e)},f=e=>{g(),s(e)};try{n&&(m=setTimeout(h.bind(this,"Callback Timeout"),n)),d[l]={callback:f,failure:h};const s={airtimeModuleRPC:!o,airtimeExtensionRPC:o,cmd:e,data:t,cbid:l};await(async(e,t=!1,n)=>{let o;if(n&&n instanceof MessagePort&&(o=[n]),t)window.postMessage(e,"*",o);else if(r.amClient()){if(window.parent===window)return void console.log("Ignoring attempt to send external message without being loaded in iframe.");window.parent.postMessage(e,"*",o)}else{(await p()).contentWindow.postMessage(e,i.clientFrameURL,o)}})(s,o,a)}catch(e){h(e)}});e.exports={sendMessage:f,messageHandlers:u,msgTests:async()=>{const e=r.amClient()?"child":"parent";let t=await f("hello",e);o.debug(e+" hello response:",t);try{t=await f("explode"),o.debug(e+" explode response:",t)}catch(t){o.debug(e+" explode failed as expected:",t)}try{t=await f("badCMD"),o.debug(e+" badCMD response:",t)}catch(t){o.debug(e+" badCMD failed as expected:",t)}try{t=await f("noAnswer",void 0,1e3),o.debug(e+" noAnswer response:",t)}catch(t){o.debug(e+" noAnswer failed as expected:",t)}t=await f("delayedEcho",{time:"lord",ident:e}),o.debug(e+" delayedEcho response:",t)},init:async()=>{window.addEventListener("message",h,!1)},bridge:l}},kLkQ:function(e,t,n){"use strict";(function(t){const o=n("cLOM"),i=()=>"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})),r=e=>!!(e=e.toLowerCase()).match(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/);let a=!1;let s=!1;const c=e=>!!e&&"function"==(typeof e).toLowerCase()&&(e===Function.prototype||/^\s*function\s*(\b[a-z$_][a-z0-9$_]*\b)*\s*\((|([a-z$_][a-z0-9$_]*)(\s*,[a-z$_][a-z0-9$_]*)*)\)\s*{\s*\[native code\]\s*}\s*$/i.test(String(e))),d=e=>{try{const t=document.createElement("iframe");t.height=t.width=0,document.documentElement.appendChild(t);const n=t.contentWindow[e];return document.documentElement.removeChild(t),n.bind(window)}catch(t){o.warn("getNativeFunction Err:",t,e)}},u=function(e){let t;return function(){const n=this,o=arguments;t&&window.cancelAnimationFrame(t),t=window.requestAnimationFrame((function(){t=void 0,e.apply(n,o)}))}};function*l(){for(var e=0;;)yield e++}l.prototype.get=function(){return this.next().value};let m;let g=null;e.exports={uuidv4:i,isValidUUID:r,detectExtension:()=>!!a||(document.documentElement.getAttribute("airtime-extension-installed")&&(a=!0),a),detectExtensionComms:()=>!!s||(document.documentElement.getAttribute("airtime-extension-clientcomms-installed")&&(s=!0),s),isFuncNative:c,getNativeFunction:d,getNativeFetchIfSupported:()=>{try{if(this.foundFetch)return this.foundFetch;if("undefined"!=typeof fetch&&c(fetch))return this.foundFetch=fetch,fetch;const e=d("fetch");if(void 0!==e&&c(e))return this.foundFetch=e,e}catch(e){o.warn("getNativeFetchIfSupported Err:",e)}},getHeadElem:()=>{try{return document.head||document.documentElement}catch(e){return document.documentElement}},getBodyElem:()=>{try{return document.body||document.documentElement}catch(e){return document.documentElement}},animFrameDebounce:u,draggableHelper:(e,t,n="bottom-right")=>{const o=()=>{const e=(()=>{const e=document.createElement("div");e.style="position: fixed; top: 0px; bottom: 0px; left: 0px; right: 0px",document.documentElement.appendChild(e);const t={width:e.clientWidth,height:e.clientHeight};return document.documentElement.removeChild(e),t})();return{bottom:window.innerHeight-e.height,right:window.innerWidth-e.width}},i=t=>{const n=window.innerHeight-e.clientHeight;return t<0?0:t>n?n:t},r=t=>{const n=window.innerWidth-e.clientWidth;return t<0?0:t>n?n:t},a=t=>{e.style.left=e.style.right=e.style.top=e.style.bottom="",void 0!==t.top&&(e.style.top=i(t.top)+"px"),void 0!==t.bottom&&(e.style.bottom=i(t.bottom)+"px"),void 0!==t.left&&(e.style.left=r(t.left)+"px"),void 0!==t.right&&(e.style.right=r(t.right)+"px");const n=window.innerWidth/2,o=t.left>=n||t.right<n?"RightSide":"LeftSide";e.className="am-PoweredByBitTube "+o},s=()=>{const t=o(),n=e.offsetTop,i=e.offsetLeft,r=((e,t)=>{const n=e>=window.innerWidth/2?"right":"left";return`${t>=window.innerHeight/2?"bottom":"top"}-${n}`})(i,n),[s,c]=r.split("-");let d={anchor:r};return d[s]="top"==s?n:window.innerHeight-n-27-t.bottom,d[c]="left"==c?i:window.innerWidth-i-183-t.right,a(d),d},c="airtimeDraggablePos-"+e.id;(()=>{try{let e=JSON.parse(localStorage.getItem(c));null===e&&(e=(()=>{let e=n;-1==["top-left","top-right","bottom-left","bottom-right"].indexOf(e)&&(e="bottom-right");const[t,o]=e.split("-");let i={};return i[t]=40,i[o]=40,i})()),a(e)}catch(e){}})();const d=u((function(t){if(e.moveCount++,!(e.moveCount<=3)&&e.isClicked){if(!e.isMoving){const n=t.clientX-e.dragStartClientX,o=t.clientY-e.dragStartClientY;if(n*n+o*o<9)return;e.isMoving=!0,e.classList.add("airtime-dragged")}const n={left:r(t.clientX-e.dragStartX),top:i(t.clientY-e.dragStartY)};a(n)}}));function l(){document.removeEventListener("mousemove",d,!1),document.removeEventListener("mouseup",l,!1),e.isClicked=!1,e.isMoving?(e.isMoving=!1,e.classList.remove("airtime-dragged"),(()=>{const e=s();localStorage.setItem(c,JSON.stringify(e))})()):t()}e.addEventListener("mousedown",(function(t){if(1!==t.which)return!1;e.dragStartX=t.offsetX,e.dragStartY=t.offsetY,e.dragStartClientX=t.clientX,e.dragStartClientY=t.clientY,e.isClicked=!0,e.moveCount=0,document.addEventListener("mousemove",d,!1),document.addEventListener("mouseup",l,!1)}),!1);window.addEventListener("resize",u(()=>{s()}),!1)},checkBrowser:function(){let e=navigator.userAgent.indexOf("Chrome")>-1,t=/Edge\/\d./i.test(navigator.userAgent),n=navigator.userAgent.indexOf("Firefox")>-1,o=navigator.userAgent.indexOf("Safari")>-1,i=navigator.userAgent.indexOf(" OPR/")>-1;return e&&o&&(o=!1),e&&t&&(e=!1),e&&i&&(e=!1),e?"chrome":n?"firefox":o?"safari":t?"edge":i?"opera":void 0},IdGenerator:l,asyncDelay:(e=1e3)=>new Promise(t=>{setTimeout(t,e)}),asyncImmediate:()=>new Promise(e=>{t(e)}),isElemVisible:e=>!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length),eventIsTrusted:e=>e instanceof Event&&!0===e.isTrusted,getGuestUUID:()=>{if(!m)try{m=localStorage.getItem("airtime-guuid"),r(m)||(m=void 0)}catch(e){}if(!m){m=i(),n="f",m=(t=14)>(e=m).length-1?e:e.substr(0,t)+n+e.substr(t+1);try{localStorage.setItem("airtime-guuid",m)}catch(e){}}var e,t,n;return m},roundToSignificant:(e,t=3)=>{const n=e.toString();if(-1!==n.indexOf("e"))return NaN;const[o,i]=n.split(".");if(!i)return+o;if(o>=1){const n=Math.pow(10,t);return Math.round(e*n)/n}const r=i.match(/^0+/),a=Math.max(t,(r&&r[0].length||0)+1),s=Math.pow(10,a);return Math.round(e*s)/s},check3PCsupport:()=>g||(g=new Promise((e,t)=>{const n=document.createElement("iframe");n.style.display="none",n.src="https://mindmup.github.io/3rdpartycookiecheck/start.html",document.documentElement.appendChild(n);const o=t=>{const i=t.data;if("MM:3PCsupported"===i||"MM:3PCunsupported"===i)return window.removeEventListener("message",o),document.documentElement.removeChild(n),e("MM:3PCsupported"===i),!0};window.addEventListener("message",o,!1),n.addEventListener("error",()=>{window.removeEventListener("message",o),document.documentElement.removeChild(n),t(new Error("Error loading third party cookie test"))})}),g)}}).call(this,n("URgk").setImmediate)},l9JQ:function(e,t,n){"use strict";let o;const i=async()=>(await new Promise((e,t)=>{try{if(o)e(o);else{const n=indexedDB.open("airtime-module",6);n.onupgradeneeded=function(){n.result.objectStoreNames.contains("objectStore")&&n.result.deleteObjectStore("objectStore"),n.result.createObjectStore("objectStore",{keyPath:"_key"})},n.onsuccess=t=>{o=n.result,e(o)},n.onerror=t}}catch(e){t(e)}})).transaction("objectStore","readwrite").objectStore("objectStore"),r=e=>new Promise(async(t,n)=>{try{const o=(await i()).get(e);o.onsuccess=e=>{const n=e.target.result;"object"==typeof n&&n.hasOwnProperty("_key")&&delete n._key,t(n)},o.onerror=n}catch(e){n(e)}});e.exports={getObject:r,putObject:(e,t)=>new Promise(async(n,o)=>{try{const a=await r(e)||{_key:e};Object.assign(a,t);const s=(await i()).put(a);s.onsuccess=e=>{n(e.target.result)},s.onerror=o}catch(e){o(e)}}),setObject:(e,t)=>new Promise(async(n,o)=>{try{const r={_key:e};Object.assign(r,t);const a=(await i()).put(r);a.onsuccess=e=>{n(e.target.result)},a.onerror=o}catch(e){o(e)}}),delObject:e=>new Promise(async(t,n)=>{try{const o=(await i()).delete(e);o.onsuccess=e=>{t(e.target.result)},o.onerror=n}catch(e){n(e)}})}},mjZG:function(e,t){e.exports={production:!0,logging_enabled:!1,firehose_debug:!1,events_debug:!1,api_airtime_ingress:"https://europe-west1-bittube-airtime.cloudfunctions.net/airtime-ingress/guest",api_airtime_ingress_user:"https://europe-west1-bittube-airtime.cloudfunctions.net/airtime-ingress/",api_get_content_uuid:"https://us-central1-bittube-airtime-extension.cloudfunctions.net/getPlatformContentID",extension_api:"https://us-central1-bittube-airtime-extension.cloudfunctions.net",errorBeaconURL:"https://europe-west1-bittube-airtime.cloudfunctions.net/beacon-ingress",clientFrameURL:"https://bittubeapp.com/tubepay/client.html",walletAPIURL:"https://mywallet.bittubeapp.com/tube4/",myWalletURL:"https://bittubeapp.com/wallet/",localizationPath:"https://bittubeapp.com/tubepay/locales/{{lng}}/module.json"}},tijG:function(e,t,n){"use strict";const o=n("mjZG");e.exports={amClient:()=>window.location.href===o.clientFrameURL}}}]);