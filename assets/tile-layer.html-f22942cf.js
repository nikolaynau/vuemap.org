import{_ as d,M as n,p as h,q as p,N as a,V as s,R as t,t as e,a1 as o}from"./framework-885bc257.js";const u={},_=t("h1",{id:"tilelayer",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#tilelayer","aria-hidden":"true"},"#"),e(" TileLayer")],-1),f=t("p",null,[e("The "),t("code",null,"VMapTileLayer"),e(" component is used to load and display tile layers on the map.")],-1),k=t("h2",{id:"basic-usage",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#basic-usage","aria-hidden":"true"},"#"),e(" Basic usage")],-1),m=t("div",{class:"language-vue","data-ext":"vue"},[t("pre",{class:"language-vue"},[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),e("template")]),t("span",{class:"token punctuation"},">")]),e(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),e("VMap")]),t("span",{class:"token punctuation"},">")]),e(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),e("VMapTileLayer")]),e(),t("span",{class:"token attr-name"},"url"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),e("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"),t("span",{class:"token punctuation"},'"')]),e(),t("span",{class:"token punctuation"},"/>")]),e(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),e("VMap")]),t("span",{class:"token punctuation"},">")]),e(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),e("template")]),t("span",{class:"token punctuation"},">")]),e(`
`)])])],-1),y=t("h2",{id:"api",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#api","aria-hidden":"true"},"#"),e(" API")],-1),b=t("h3",{id:"attributes",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#attributes","aria-hidden":"true"},"#"),e(" Attributes")],-1),g={href:"https://leafletjs.com/reference.html#tilelayer",target:"_blank",rel:"noopener noreferrer"},x=o('<table><thead><tr><th>Name</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>url</td><td>Tile layer URL template.</td><td>string</td><td>—</td></tr></tbody></table><h3 id="events" tabindex="-1"><a class="header-anchor" href="#events" aria-hidden="true">#</a> Events</h3>',2),v={href:"https://leafletjs.com/reference.html#tilelayer-event",target:"_blank",rel:"noopener noreferrer"},L=o('<h3 id="slots" tabindex="-1"><a class="header-anchor" href="#slots" aria-hidden="true">#</a> Slots</h3><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>default</td><td>The default slot can be used to extend behavior.</td></tr></tbody></table><h3 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h3>',3),T=t("thead",null,[t("tr",null,[t("th",null,"Name"),t("th",null,"Description"),t("th",null,"Type")])],-1),V=t("td",null,"tileLayer",-1),N=t("td",null,"Leaflet tile layer instance.",-1);function D(E,M){const r=n("Demo"),c=n("ClientOnly"),l=n("ExternalLinkIcon"),i=n("RouterLink");return h(),p("div",null,[_,f,k,a(c,null,{default:s(()=>[a(r,{url:"/layer/basic-tile-layer"},{default:s(()=>[m]),_:1})]),_:1}),y,b,t("p",null,[e("Use tile layer options from leaflet "),t("a",g,[e("documentation"),a(l)]),e(".")]),x,t("p",null,[e("Use tile layer events from leaflet "),t("a",v,[e("documentation"),a(l)]),e(".")]),L,t("table",null,[T,t("tbody",null,[t("tr",null,[V,N,t("td",null,[e("Ref<"),a(i,{to:"/components/types.html#tilelayer"},{default:s(()=>[e("TileLayer")]),_:1}),e(">")])])])])])}const B=d(u,[["render",D],["__file","tile-layer.html.vue"]]);export{B as default};
