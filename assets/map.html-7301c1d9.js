import{_ as u,M as o,p as i,q as r,N as a,V as s,R as n,t,a1 as d}from"./framework-885bc257.js";const k={},h=n("h1",{id:"map",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#map","aria-hidden":"true"},"#"),t(" Map")],-1),m=n("p",null,[t("The "),n("code",null,"VMap"),t(" component is used to create a map. This base component contains and wraps all other components.")],-1),_=n("h2",{id:"basic-usage",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#basic-usage","aria-hidden":"true"},"#"),t(" Basic usage")],-1),g=n("div",{class:"language-vue","data-ext":"vue"},[n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"setup"),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(" type "),n("span",{class:"token punctuation"},"{"),t(" LatLng"),n("span",{class:"token punctuation"},","),t(" LatLngBounds"),n("span",{class:"token punctuation"},","),t(" LatLngTuple "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'leaflet'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(" type "),n("span",{class:"token punctuation"},"{"),t(" ViewChangedEvent "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue-use-leaflet'"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"const"),t(" center "),n("span",{class:"token operator"},"="),t(" ref"),n("span",{class:"token operator"},"<"),t("LatLngTuple "),n("span",{class:"token operator"},"|"),t(" LatLng"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"const"),t(" zoom "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"const"),t(" bounds "),n("span",{class:"token operator"},"="),t(" ref"),n("span",{class:"token operator"},"<"),t("LatLngBounds "),n("span",{class:"token operator"},"|"),t(),n("span",{class:"token keyword"},"null"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"onViewChanged"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token literal-property property"},"e"),n("span",{class:"token operator"},":"),t(" ViewChangedEvent")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
  center`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(" e"),n("span",{class:"token punctuation"},"."),t("center"),n("span",{class:"token punctuation"},";"),t(`
  zoom`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(" e"),n("span",{class:"token punctuation"},"."),t("zoom"),n("span",{class:"token punctuation"},";"),t(`
  bounds`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(" e"),n("span",{class:"token punctuation"},"."),t("bounds"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("flex flex-col w-full h-full"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("flex-grow basis-full"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("VMap")]),t(),n("span",{class:"token attr-name"},":center"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("center"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":zoom"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("zoom"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@view-changed"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("onViewChanged"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("VMapOsmTileLayer")]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("VMap")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("px-1 pt-2 flex-shrink-0 text-sm overflow-hidden"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      center: {{ center }}, zoom: {{ zoom }}, bounds: {{ bounds }}
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),f=n("h2",{id:"map-api",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#map-api","aria-hidden":"true"},"#"),t(" Map API")],-1),b=n("h3",{id:"map-attributes",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#map-attributes","aria-hidden":"true"},"#"),t(" Map Attributes")],-1),v={href:"https://leafletjs.com/reference.html#map",target:"_blank",rel:"noopener noreferrer"},y=n("thead",null,[n("tr",null,[n("th",null,"Name"),n("th",null,"Description"),n("th",null,"Type"),n("th",null,"Default")])],-1),x=n("td",null,"center",-1),w=n("td",null,"Initial geographic center of the map",-1),L=n("td",null,"[0, 0]",-1),M=n("tr",null,[n("td",null,"zoom"),n("td",null,"Initial map zoom level"),n("td",null,[n("code",null,"number")]),n("td",null,"0")],-1),V=n("td",null,"bounds",-1),T=n("td",null,"Initial geographic bounds of the map",-1),E=n("td",null,"—",-1),z=n("tr",null,[n("td",null,"useFly"),n("td",null,"Initial center, zoom and bounds use fly methods"),n("td",null,[n("code",null,"boolean")]),n("td",null,"false")],-1),C=n("tr",null,[n("td",null,"elementAttrs"),n("td",null,"List of attributes that will be inherited to the map element."),n("td",null,[n("code",null,"Array<string>")]),n("td",null,"['id', 'class', 'style']")],-1),N=n("h3",{id:"map-events",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#map-events","aria-hidden":"true"},"#"),t(" Map Events")],-1),q={href:"https://leafletjs.com/reference.html#map-event",target:"_blank",rel:"noopener noreferrer"},B=n("thead",null,[n("tr",null,[n("th",null,"Name"),n("th",null,"Description"),n("th",null,"Type")])],-1),D=n("td",null,"view-changed",-1),I=n("td",null,"Triggers when moved map view.",-1),R=d('<h3 id="map-slots" tabindex="-1"><a class="header-anchor" href="#map-slots" aria-hidden="true">#</a> Map Slots</h3><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>default</td><td>The default slot is used for all map component.</td></tr></tbody></table><h3 id="map-exposes" tabindex="-1"><a class="header-anchor" href="#map-exposes" aria-hidden="true">#</a> Map Exposes</h3>',3),A=n("thead",null,[n("tr",null,[n("th",null,"Name"),n("th",null,"Description"),n("th",null,"Type")])],-1),j=n("td",null,"map",-1),O=n("td",null,"Leaflet map instance.",-1),S=n("tr",null,[n("td",null,"container"),n("td",null,"Map container element."),n("td",null,[n("code",null,"Ref<HTMLElement>")])],-1);function U(F,H){const c=o("Demo"),p=o("ClientOnly"),l=o("ExternalLinkIcon"),e=o("RouterLink");return i(),r("div",null,[h,m,_,a(p,null,{default:s(()=>[a(c,{url:"/map/basic"},{default:s(()=>[g]),_:1})]),_:1}),f,b,n("p",null,[t("Use map options from leaflet "),n("a",v,[t("documentation"),a(l)]),t(". The table contains a list of watched attributes.")]),n("table",null,[y,n("tbody",null,[n("tr",null,[x,w,n("td",null,[a(e,{to:"/components/types.html#latlngexpression"},{default:s(()=>[t("LatLngExpression")]),_:1})]),L]),M,n("tr",null,[V,T,n("td",null,[a(e,{to:"/components/types.html#latlngboundsexpression"},{default:s(()=>[t("LatLngBoundsExpression")]),_:1})]),E]),z,C])]),N,n("p",null,[t("Use map events from leaflet "),n("a",q,[t("documentation"),a(l)]),t(".")]),n("table",null,[B,n("tbody",null,[n("tr",null,[D,I,n("td",null,[a(e,{to:"/components/types.html#viewchangedevent"},{default:s(()=>[t("ViewChangedEvent")]),_:1})])])])]),R,n("table",null,[A,n("tbody",null,[n("tr",null,[j,O,n("td",null,[t("Ref<"),a(e,{to:"/components/types.html#map"},{default:s(()=>[t("Map")]),_:1}),t(">")])]),S])])])}const G=u(k,[["render",U],["__file","map.html.vue"]]);export{G as default};