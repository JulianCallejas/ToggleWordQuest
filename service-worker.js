if(!self.define){let e,o={};const i=(i,s)=>(i=new URL(i+".js",s).href,o[i]||new Promise((o=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=o,document.head.appendChild(e)}else e=i,importScripts(i),o()})).then((()=>{let e=o[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(s,r)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(o[a])return;let n={};const c=e=>i(e,a),f={module:{uri:a},exports:n,require:c};o[a]=Promise.all(s.map((e=>f[e]||c(e)))).then((e=>(r(...e),n)))}}define(["./workbox-1c3383c2"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-8d850170.js",revision:"4e5c46f550989ef6a7f0ed14cf559274"},{url:"assets/index-f8bfe67a.css",revision:"f186f7f65a21e7833447387038994d45"},{url:"assets/ios-install-demo-9643ac43.js",revision:"f5b6964c31c010f09bfd98b5b58c8f06"},{url:"assets/tutor-step2-eng-fdda4875.js",revision:"4d5ff6784ea19c0c357535942563193a"},{url:"assets/tutor-step2-spa-463a34b9.js",revision:"cb4abe24787b65e555eae717b923db8e"},{url:"assets/twq-help-dark-eng-90ffa286.js",revision:"d8715654f4171a381f4288907b2e057d"},{url:"assets/twq-help-dark-spa-a0d012e2.js",revision:"819d9c234def934a1b0aea9d586a37e5"},{url:"assets/twq-help-light-eng-32eaf7a0.js",revision:"e5cb0d52137a5d32a2c3c12e25c2ac15"},{url:"assets/twq-help-light-spa-a4368bda.js",revision:"84441b0e536295258e9ee0d2b9fe2947"},{url:"index.html",revision:"80bc53e2288121928f91e4fcf2316bd6"},{url:"manifest.json",revision:"d18ccbc49f5e2823fc899f3de71aad41"},{url:"twq-logo-100.png",revision:"998bff30d2a4b8bcb62570196336b19e"},{url:"twq-logo-1024.png",revision:"c8010bb9f4343184494e6b9a21083bf0"},{url:"twq-logo-114.png",revision:"2d634dc0c81b27021ee858cfc3330efb"},{url:"twq-logo-120.png",revision:"bb42f152a03c4527509c69831106f4d9"},{url:"twq-logo-128.png",revision:"7a42574f7d8be02307d8d70a22e1bba4"},{url:"twq-logo-144.png",revision:"9a8ced454845c32d08c6649210e20c80"},{url:"twq-logo-152.png",revision:"9ecb273cdf20750c504a2fd3e7026bd4"},{url:"twq-logo-16.png",revision:"e5f970fbf5f02944ad39989f38256552"},{url:"twq-logo-167.png",revision:"6b9da563b2f6294ae5be425b779d7463"},{url:"twq-logo-180.png",revision:"fb2b2a86c307865e3f6a504e1ee4c8dc"},{url:"twq-logo-192.png",revision:"a2257909aee0f2304463f3d09fafed9b"},{url:"twq-logo-20.png",revision:"3fea238276019d0b474e065780f459eb"},{url:"twq-logo-256.png",revision:"b565a77d5b1492ce74f461410e52f171"},{url:"twq-logo-29.png",revision:"447df8b1b20802eb0a698510747cca1b"},{url:"twq-logo-32.png",revision:"001c76aac2c9a45caec219a46b74bf2b"},{url:"twq-logo-40.png",revision:"a0c3a6ac879eedbc5945c922a7c105a1"},{url:"twq-logo-48.png",revision:"7bfe750102c6e6f7bce77adc2a241816"},{url:"twq-logo-50.png",revision:"a24bd218ba355a5d47127a05c9685a42"},{url:"twq-logo-512.png",revision:"904b39a60c5d69c4b8fe3b4255909d91"},{url:"twq-logo-57.png",revision:"80da7574f3bde7d582a13f0447fb4237"},{url:"twq-logo-58.png",revision:"a807365aeb40a508170a10a01cc0017e"},{url:"twq-logo-60.png",revision:"8d2f034edb6140a11d6b948cdcf6872c"},{url:"twq-logo-64.png",revision:"dd913b6efecffea3c2d2c6475705214a"},{url:"twq-logo-72.png",revision:"5c0b79e71d3797b8082a0aeb85762ed3"},{url:"twq-logo-76.png",revision:"9c6a8b2b08704cf6834e55147f46ead1"},{url:"twq-logo-80.png",revision:"ac3605cbc54f745f2d14b28254264237"},{url:"twq-logo-87.png",revision:"8fb7eb2a62bb30c4824348788433780d"},{url:"twq-logo-96.png",revision:"00c0b4480a946c1fdb5be600cffcd905"}],{})}));
//# sourceMappingURL=service-worker.js.map
