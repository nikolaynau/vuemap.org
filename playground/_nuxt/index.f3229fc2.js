import{g as L,r as V,o as _,c as a,a as m,F as v,j as d,h as y,_ as e,t as b,b as D,w as P,d as I}from"./entry.3413e90c.js";import{_ as T}from"./nuxt-link.4871804e.js";function A(p){return`${p}`.toLowerCase().replace(new RegExp(/[-_]+/,"g")," ").replace(new RegExp(/[^\w\s]/,"g"),"").replace(new RegExp(/\s+(.)(\w*)/,"g"),(l,c,r)=>` ${c.toUpperCase()+r}`).replace(new RegExp(/\w/),l=>l.toUpperCase())}const g={class:"p-4"},f=m("h1",{class:"font-semibold text-lg"},"Examples",-1),h={class:"p-2"},x={class:"font-semibold"},k={class:"p-2"},j=L({__name:"index",setup(p){const l=Object.freeze({map:1,layer:2,control:3,tile:4}),c=Object.assign({"./control/basic-attribution-control.vue":()=>e(()=>import("./basic-attribution-control.315afdae.js"),["./basic-attribution-control.315afdae.js","./index.es.984490d0.js","./entry.3413e90c.js","./entry.4bb43de4.css","./_plugin-vue_export-helper.c27b6911.js"],import.meta.url),"./control/basic-control-position.vue":()=>e(()=>import("./basic-control-position.55af6949.js"),["./basic-control-position.55af6949.js","./index.es.984490d0.js","./entry.3413e90c.js","./entry.4bb43de4.css","./basic-control-position.bb12839f.css"],import.meta.url),"./control/basic-layers-control.vue":()=>e(()=>import("./basic-layers-control.4546c26b.js"),["./basic-layers-control.4546c26b.js","./index.es.984490d0.js","./entry.3413e90c.js","./entry.4bb43de4.css"],import.meta.url),"./control/basic-scale-control.vue":()=>e(()=>import("./basic-scale-control.b5ed2631.js"),["./basic-scale-control.b5ed2631.js","./index.es.984490d0.js","./entry.3413e90c.js","./entry.4bb43de4.css","./_plugin-vue_export-helper.c27b6911.js"],import.meta.url),"./control/basic-zoom-control.vue":()=>e(()=>import("./basic-zoom-control.d09f7e97.js"),["./basic-zoom-control.d09f7e97.js","./index.es.984490d0.js","./entry.3413e90c.js","./entry.4bb43de4.css","./_plugin-vue_export-helper.c27b6911.js"],import.meta.url),"./layer/basic-default-icon.vue":()=>e(()=>import("./basic-default-icon.7f3fced6.js"),["./basic-default-icon.7f3fced6.js","./index.es.984490d0.js","./entry.3413e90c.js","./entry.4bb43de4.css"],import.meta.url),"./layer/basic-div-icon.vue":()=>e(()=>import("./basic-div-icon.85fd77db.js"),["./basic-div-icon.85fd77db.js","./index.es.984490d0.js","./entry.3413e90c.js","./entry.4bb43de4.css","./basic-div-icon.bf1c27ce.css"],import.meta.url),"./layer/basic-div-marker.vue":()=>e(()=>import("./basic-div-marker.11afe315.js"),["./basic-div-marker.11afe315.js","./index.es.984490d0.js","./entry.3413e90c.js","./entry.4bb43de4.css","./basic-div-marker.c8f3889b.css"],import.meta.url),"./layer/basic-icon-marker.vue":()=>e(()=>import("./basic-icon-marker.b84b6065.js"),["./basic-icon-marker.b84b6065.js","./index.es.984490d0.js","./entry.3413e90c.js","./entry.4bb43de4.css"],import.meta.url),"./layer/basic-icon.vue":()=>e(()=>import("./basic-icon.8e65e61f.js"),["./basic-icon.8e65e61f.js","./index.es.984490d0.js","./entry.3413e90c.js","./entry.4bb43de4.css"],import.meta.url),"./layer/basic-marker.vue":()=>e(()=>import("./basic-marker.e01b4373.js"),["./basic-marker.e01b4373.js","./index.es.984490d0.js","./entry.3413e90c.js","./entry.4bb43de4.css"],import.meta.url),"./layer/basic-pin-icon.vue":()=>e(()=>import("./basic-pin-icon.e1402765.js"),["./basic-pin-icon.e1402765.js","./index.es.984490d0.js","./entry.3413e90c.js","./entry.4bb43de4.css","./index.fab0f39b.js"],import.meta.url),"./layer/basic-pin-marker.vue":()=>e(()=>import("./basic-pin-marker.1a07839a.js"),["./basic-pin-marker.1a07839a.js","./index.es.984490d0.js","./entry.3413e90c.js","./entry.4bb43de4.css","./index.fab0f39b.js"],import.meta.url),"./layer/basic-tile-layer.vue":()=>e(()=>import("./basic-tile-layer.912ae895.js"),["./basic-tile-layer.912ae895.js","./index.es.984490d0.js","./entry.3413e90c.js","./entry.4bb43de4.css","./_plugin-vue_export-helper.c27b6911.js"],import.meta.url),"./map/basic-map-pane.vue":()=>e(()=>import("./basic-map-pane.3bc1f666.js"),["./basic-map-pane.3bc1f666.js","./index.es.984490d0.js","./entry.3413e90c.js","./entry.4bb43de4.css"],import.meta.url),"./map/basic-map.vue":()=>e(()=>import("./basic-map.f75482cf.js"),["./basic-map.f75482cf.js","./index.es.984490d0.js","./entry.3413e90c.js","./entry.4bb43de4.css"],import.meta.url),"./tile/basic-arc-gis-aero-tile-layer.vue":()=>e(()=>import("./basic-arc-gis-aero-tile-layer.9a4ad8dc.js"),["./basic-arc-gis-aero-tile-layer.9a4ad8dc.js","./index.es.984490d0.js","./entry.3413e90c.js","./entry.4bb43de4.css","./_plugin-vue_export-helper.c27b6911.js"],import.meta.url),"./tile/basic-arc-gis-tile-layer.vue":()=>e(()=>import("./basic-arc-gis-tile-layer.ae87ac58.js"),["./basic-arc-gis-tile-layer.ae87ac58.js","./index.es.984490d0.js","./entry.3413e90c.js","./entry.4bb43de4.css","./_plugin-vue_export-helper.c27b6911.js"],import.meta.url),"./tile/basic-google-tile-layer.vue":()=>e(()=>import("./basic-google-tile-layer.70712aa3.js"),["./basic-google-tile-layer.70712aa3.js","./index.es.984490d0.js","./entry.3413e90c.js","./entry.4bb43de4.css","./_plugin-vue_export-helper.c27b6911.js"],import.meta.url),"./tile/basic-mapbox-tile-layer.vue":()=>e(()=>import("./basic-mapbox-tile-layer.9e520139.js"),["./basic-mapbox-tile-layer.9e520139.js","./index.es.984490d0.js","./entry.3413e90c.js","./entry.4bb43de4.css"],import.meta.url),"./tile/basic-open-transport-tile-layer.vue":()=>e(()=>import("./basic-open-transport-tile-layer.41239f7f.js"),["./basic-open-transport-tile-layer.41239f7f.js","./index.es.984490d0.js","./entry.3413e90c.js","./entry.4bb43de4.css"],import.meta.url),"./tile/basic-osm-tile-layer.vue":()=>e(()=>import("./basic-osm-tile-layer.2bcc88cb.js"),["./basic-osm-tile-layer.2bcc88cb.js","./index.es.984490d0.js","./entry.3413e90c.js","./entry.4bb43de4.css","./_plugin-vue_export-helper.c27b6911.js"],import.meta.url),"./tile/hybrid-google-tile-layer.vue":()=>e(()=>import("./hybrid-google-tile-layer.5266d4be.js"),["./hybrid-google-tile-layer.5266d4be.js","./index.es.984490d0.js","./entry.3413e90c.js","./entry.4bb43de4.css","./_plugin-vue_export-helper.c27b6911.js"],import.meta.url)}),r={};for(const[i]of Object.entries(c)){const o=i.split("/"),t=o[o.length-2],s=o[o.length-1].slice(0,-4),u=`/${t}/${s}`;r[t]||(r[t]={title:t.slice(0,1).toUpperCase()+t.slice(1),order:l[t],children:[]}),r[t].children.push({title:A(s),url:u})}const n=V(Object.keys(r).map(i=>r[i]));return n.sort((i,o)=>i.order-o.order),(i,o)=>{const t=T;return _(),a("div",g,[f,m("ul",h,[(_(!0),a(v,null,d(y(n),({title:s,children:u},R)=>(_(),a("li",{key:R,class:"mb-1"},[m("h2",x,b(s),1),m("ul",k,[(_(!0),a(v,null,d(u,(E,O)=>(_(),a("li",{key:O,class:"mb-1"},[D(t,{class:"underline",to:E.url,"no-prefetch":""},{default:P(()=>[I(b(E.title),1)]),_:2},1032,["to"])]))),128))])]))),128))])])}}});export{j as default};
