import{g as O,r as L,o as a,c as _,a as c,F as E,j as v,h as V,_ as e,t as b,b as y,w as D,d as P}from"./entry.bd0514f7.js";import{_ as I}from"./nuxt-link.b0610a0d.js";function T(n){return`${n}`.toLowerCase().replace(new RegExp(/[-_]+/,"g")," ").replace(new RegExp(/[^\w\s]/,"g"),"").replace(new RegExp(/\s+(.)(\w*)/,"g"),(l,p,r)=>` ${p.toUpperCase()+r}`).replace(new RegExp(/\w/),l=>l.toUpperCase())}const h={class:"p-4"},A=c("h1",{class:"font-semibold text-lg"},"Examples",-1),f={class:"p-2"},x={class:"font-semibold"},w={class:"p-2"},j=O({__name:"index",setup(n){const l=Object.freeze({map:1,layer:2,control:3,tile:4}),p=Object.assign({"./control/basic-attribution-control.vue":()=>e(()=>import("./basic-attribution-control.c10521e4.js"),["./basic-attribution-control.c10521e4.js","./index.es.61f63f6b.js","./entry.bd0514f7.js","./entry.4b979814.css","./_plugin-vue_export-helper.c27b6911.js"],import.meta.url),"./control/basic-control-position.vue":()=>e(()=>import("./basic-control-position.f8813715.js"),["./basic-control-position.f8813715.js","./index.es.61f63f6b.js","./entry.bd0514f7.js","./entry.4b979814.css","./basic-control-position.bb12839f.css"],import.meta.url),"./control/basic-layers-control.vue":()=>e(()=>import("./basic-layers-control.9cde97ba.js"),["./basic-layers-control.9cde97ba.js","./index.es.61f63f6b.js","./entry.bd0514f7.js","./entry.4b979814.css"],import.meta.url),"./control/basic-scale-control.vue":()=>e(()=>import("./basic-scale-control.5fc2a274.js"),["./basic-scale-control.5fc2a274.js","./index.es.61f63f6b.js","./entry.bd0514f7.js","./entry.4b979814.css","./_plugin-vue_export-helper.c27b6911.js"],import.meta.url),"./control/basic-zoom-control.vue":()=>e(()=>import("./basic-zoom-control.5f93d699.js"),["./basic-zoom-control.5f93d699.js","./index.es.61f63f6b.js","./entry.bd0514f7.js","./entry.4b979814.css","./_plugin-vue_export-helper.c27b6911.js"],import.meta.url),"./layer/basic-icon.vue":()=>e(()=>import("./basic-icon.97eee3a7.js"),["./basic-icon.97eee3a7.js","./index.es.61f63f6b.js","./entry.bd0514f7.js","./entry.4b979814.css"],import.meta.url),"./layer/basic-marker.vue":()=>e(()=>import("./basic-marker.104f3147.js"),["./basic-marker.104f3147.js","./index.es.61f63f6b.js","./entry.bd0514f7.js","./entry.4b979814.css"],import.meta.url),"./layer/basic-tile-layer.vue":()=>e(()=>import("./basic-tile-layer.94a499d4.js"),["./basic-tile-layer.94a499d4.js","./index.es.61f63f6b.js","./entry.bd0514f7.js","./entry.4b979814.css","./_plugin-vue_export-helper.c27b6911.js"],import.meta.url),"./map/basic-map-pane.vue":()=>e(()=>import("./basic-map-pane.0cc7f994.js"),["./basic-map-pane.0cc7f994.js","./index.es.61f63f6b.js","./entry.bd0514f7.js","./entry.4b979814.css","./_plugin-vue_export-helper.c27b6911.js"],import.meta.url),"./map/basic-map.vue":()=>e(()=>import("./basic-map.ea07c295.js"),["./basic-map.ea07c295.js","./index.es.61f63f6b.js","./entry.bd0514f7.js","./entry.4b979814.css"],import.meta.url),"./tile/basic-arc-gis-aero-tile-layer.vue":()=>e(()=>import("./basic-arc-gis-aero-tile-layer.cbf05ad9.js"),["./basic-arc-gis-aero-tile-layer.cbf05ad9.js","./index.es.61f63f6b.js","./entry.bd0514f7.js","./entry.4b979814.css","./_plugin-vue_export-helper.c27b6911.js"],import.meta.url),"./tile/basic-arc-gis-tile-layer.vue":()=>e(()=>import("./basic-arc-gis-tile-layer.31024f66.js"),["./basic-arc-gis-tile-layer.31024f66.js","./index.es.61f63f6b.js","./entry.bd0514f7.js","./entry.4b979814.css","./_plugin-vue_export-helper.c27b6911.js"],import.meta.url),"./tile/basic-google-tile-layer.vue":()=>e(()=>import("./basic-google-tile-layer.960e445f.js"),["./basic-google-tile-layer.960e445f.js","./index.es.61f63f6b.js","./entry.bd0514f7.js","./entry.4b979814.css","./_plugin-vue_export-helper.c27b6911.js"],import.meta.url),"./tile/basic-mapbox-tile-layer.vue":()=>e(()=>import("./basic-mapbox-tile-layer.39a6578e.js"),["./basic-mapbox-tile-layer.39a6578e.js","./index.es.61f63f6b.js","./entry.bd0514f7.js","./entry.4b979814.css"],import.meta.url),"./tile/basic-open-transport-tile-layer.vue":()=>e(()=>import("./basic-open-transport-tile-layer.fc19f5e3.js"),["./basic-open-transport-tile-layer.fc19f5e3.js","./index.es.61f63f6b.js","./entry.bd0514f7.js","./entry.4b979814.css"],import.meta.url),"./tile/basic-osm-tile-layer.vue":()=>e(()=>import("./basic-osm-tile-layer.ca347290.js"),["./basic-osm-tile-layer.ca347290.js","./index.es.61f63f6b.js","./entry.bd0514f7.js","./entry.4b979814.css","./_plugin-vue_export-helper.c27b6911.js"],import.meta.url),"./tile/hybrid-google-tile-layer.vue":()=>e(()=>import("./hybrid-google-tile-layer.764d0bcf.js"),["./hybrid-google-tile-layer.764d0bcf.js","./index.es.61f63f6b.js","./entry.bd0514f7.js","./entry.4b979814.css","./_plugin-vue_export-helper.c27b6911.js"],import.meta.url)}),r={};for(const[i]of Object.entries(p)){const o=i.split("/"),t=o[o.length-2],s=o[o.length-1].slice(0,-4),m=`/${t}/${s}`;r[t]||(r[t]={title:t.slice(0,1).toUpperCase()+t.slice(1),order:l[t],children:[]}),r[t].children.push({title:T(s),url:m})}const u=L(Object.keys(r).map(i=>r[i]));return u.sort((i,o)=>i.order-o.order),(i,o)=>{const t=I;return a(),_("div",h,[A,c("ul",f,[(a(!0),_(E,null,v(V(u),({title:s,children:m},R)=>(a(),_("li",{key:R,class:"mb-1"},[c("h2",x,b(s),1),c("ul",w,[(a(!0),_(E,null,v(m,(d,g)=>(a(),_("li",{key:g,class:"mb-1"},[y(t,{class:"underline",to:d.url,"no-prefetch":""},{default:D(()=>[P(b(d.title),1)]),_:2},1032,["to"])]))),128))])]))),128))])])}}});export{j as default};
