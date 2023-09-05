import{_ as c,C as a,o as i,c as p,H as l,w as s,Q as o,k as e,a as t}from"./chunks/framework.0cc98949.js";const D=JSON.parse('{"title":"ArcGisTileLayer","description":"","frontmatter":{},"headers":[],"relativePath":"components/tile/arc-gis-aero-tile-layer.md","filePath":"components/tile/arc-gis-aero-tile-layer.md","lastUpdated":1693917137000}'),d={name:"components/tile/arc-gis-aero-tile-layer.md"},h=o('<h1 id="arcgistilelayer" tabindex="-1">ArcGisTileLayer <a class="header-anchor" href="#arcgistilelayer" aria-label="Permalink to &quot;ArcGisTileLayer&quot;">​</a></h1><p>The <code>VMapArcGisAeroTileLayer</code> component is used to load and display <a href="https://www.arcgis.com" target="_blank" rel="noreferrer">ArcGIS</a> tiles on the map.</p><h2 id="basic-usage" tabindex="-1">Basic usage <a class="header-anchor" href="#basic-usage" aria-label="Permalink to &quot;Basic usage&quot;">​</a></h2>',3),y=e("div",{class:"language-vue vp-adaptive-theme"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"vue"),e("pre",{class:"shiki github-dark vp-code-dark"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"<"),e("span",{style:{color:"#85E89D"}},"template"),e("span",{style:{color:"#E1E4E8"}},">")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"  <"),e("span",{style:{color:"#FDAEB7","font-style":"italic"}},"VMap"),e("span",{style:{color:"#E1E4E8"}},">")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"    <"),e("span",{style:{color:"#FDAEB7","font-style":"italic"}},"VMapArcGisAeroTileLayer"),e("span",{style:{color:"#E1E4E8"}}," />")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"    <"),e("span",{style:{color:"#FDAEB7","font-style":"italic"}},"VMapZoomControl"),e("span",{style:{color:"#E1E4E8"}}," />")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"    <"),e("span",{style:{color:"#FDAEB7","font-style":"italic"}},"VMapAttributionControl"),e("span",{style:{color:"#E1E4E8"}}," />")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"  </"),e("span",{style:{color:"#FDAEB7","font-style":"italic"}},"VMap"),e("span",{style:{color:"#E1E4E8"}},">")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"</"),e("span",{style:{color:"#85E89D"}},"template"),e("span",{style:{color:"#E1E4E8"}},">")])])]),e("pre",{class:"shiki github-light vp-code-light"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#24292E"}},"<"),e("span",{style:{color:"#22863A"}},"template"),e("span",{style:{color:"#24292E"}},">")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292E"}},"  <"),e("span",{style:{color:"#B31D28","font-style":"italic"}},"VMap"),e("span",{style:{color:"#24292E"}},">")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292E"}},"    <"),e("span",{style:{color:"#B31D28","font-style":"italic"}},"VMapArcGisAeroTileLayer"),e("span",{style:{color:"#24292E"}}," />")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292E"}},"    <"),e("span",{style:{color:"#B31D28","font-style":"italic"}},"VMapZoomControl"),e("span",{style:{color:"#24292E"}}," />")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292E"}},"    <"),e("span",{style:{color:"#B31D28","font-style":"italic"}},"VMapAttributionControl"),e("span",{style:{color:"#24292E"}}," />")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292E"}},"  </"),e("span",{style:{color:"#B31D28","font-style":"italic"}},"VMap"),e("span",{style:{color:"#24292E"}},">")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292E"}},"</"),e("span",{style:{color:"#22863A"}},"template"),e("span",{style:{color:"#24292E"}},">")])])])],-1),E=o('<h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="attributes" tabindex="-1">Attributes <a class="header-anchor" href="#attributes" aria-label="Permalink to &quot;Attributes&quot;">​</a></h3><p>Use tile layer options from leaflet <a href="https://leafletjs.com/reference.html#tilelayer" target="_blank" rel="noreferrer">documentation</a>.</p><table><thead><tr><th>Name</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>title</td><td>Name of layer, when used as a child component <a href="/components/control/layers-control.html">layers control</a>.</td><td><code>string</code></td><td>&#39;Arc Gis Aero&#39;</td></tr><tr><td>overlay</td><td>Overlay layer, when used as a child component <a href="/components/control/layers-control.html">layers control</a>.</td><td><code>boolean</code></td><td>false</td></tr></tbody></table><h3 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-label="Permalink to &quot;Events&quot;">​</a></h3><p>Use tile layer events from leaflet <a href="https://leafletjs.com/reference.html#tilelayer-event" target="_blank" rel="noreferrer">documentation</a>.</p><h3 id="slots" tabindex="-1">Slots <a class="header-anchor" href="#slots" aria-label="Permalink to &quot;Slots&quot;">​</a></h3><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>default</td><td>The default slot can be used to extend behavior.</td></tr></tbody></table><h3 id="exposes" tabindex="-1">Exposes <a class="header-anchor" href="#exposes" aria-label="Permalink to &quot;Exposes&quot;">​</a></h3><table><thead><tr><th>Name</th><th>Description</th><th>Type</th></tr></thead><tbody><tr><td>tileLayer</td><td>Leaflet tile layer instance.</td><td>Ref&lt;<a href="/components/types.html#tilelayer">TileLayer</a> | null&gt;</td></tr></tbody></table>',10);function m(f,u,_,b,A,T){const r=a("Demo"),n=a("ClientOnly");return i(),p("div",null,[h,l(n,null,{default:s(()=>[l(r,{url:"/tile/basic-arc-gis-aero-tile-layer"},{default:s(()=>[y]),_:1})]),_:1}),E])}const v=c(d,[["render",m]]);export{D as __pageData,v as default};