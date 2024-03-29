# MapboxTileLayer

The `VMapMapboxTileLayer` component is used to load and display [Mapbox](https://www.mapbox.com) tiles on the map.

## Basic usage

<ClientOnly>
  <Demo url="/tile/basic-mapbox-tile-layer" >
  
<<< @/../playground/pages/tile/basic-mapbox-tile-layer.vue
  
  </Demo>
</ClientOnly>

## API

### Attributes

Use tile layer options from leaflet [documentation](https://leafletjs.com/reference.html#tilelayer).

| Name           | Description                                                                                                              | Type      | Default  |
| -------------- | ------------------------------------------------------------------------------------------------------------------------ | --------- | -------- |
| \* id          | Id of style layers in a Mapbox. See more [Mapbox Docs](https://docs.mapbox.com/help/glossary/layer). **Required**        | `string`  | —        |
| \* accessToken | Access token for loading tiles. See more [Mapbox Docs](https://docs.mapbox.com/help/glossary/access-token). **Required** | `string`  | —        |
| title          | Name of layer, when used as a child component [layers control](/components/control/layers-control).                      | `string`  | 'Mapbox' |
| overlay        | Overlay layer, when used as a child component [layers control](/components/control/layers-control).                      | `boolean` | false    |

### Events

Use tile layer events from leaflet [documentation](https://leafletjs.com/reference.html#tilelayer-event).

### Slots

| Name    | Description                                      |
| ------- | ------------------------------------------------ |
| default | The default slot can be used to extend behavior. |

### Exposes

| Name      | Description                  | Type                                                       |
| --------- | ---------------------------- | ---------------------------------------------------------- |
| tileLayer | Leaflet tile layer instance. | Ref<[TileLayer](/components/types.html#tilelayer) \| null> |
