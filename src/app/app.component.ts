import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import Map from 'ol/Map';
import View from 'ol/View';
// import TileLayer from 'ol/layer/Tile.js';
import { OSM, Vector as VectorSource } from 'ol/source.js';
import GeoJSON from 'ol/format/GeoJSON.js';
import { Tile as TileLayer, Vector as VectorLayer } from 'ol/layer.js';
import Camiler from './camiler.js'
import { Icon, Style } from 'ol/style.js'
import { click, pointerMove, altKeyOnly } from 'ol/events/condition.js';
import Select from 'ol/interaction/Select.js';
import Overlay from 'ol/Overlay.js';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'basaksehir-camiler';
  @ViewChild('map') map: ElementRef
  @ViewChild('overlayer') overlayer: ElementRef
  name
  capacity
  ngOnInit() {
    var map = new Map({
      layers: [
        new TileLayer({
          source: new OSM()
        })
      ],
      target: this.map.nativeElement,
      view: new View({
        projection: 'EPSG:3857',
        center: [3205929.25726942, 5027538.321153645],
        zoom: 14
      }),
      controls: []
    })

    const style = new Style({
      image: new Icon(({
        anchor: [0.5, 46],
        anchorXUnits: 'fraction',
        anchorYUnits: 'pixels',
        src: 'assets/mosque.png',
        scale: .5
      }))
    });
    var source = new VectorSource({
      loader: function (extent, resolution, projection) {
        source.addFeatures(
          new GeoJSON().readFeatures(Camiler, { featureProjection: projection }));
      }
    });
    var layer = new VectorLayer({
      source: source,
      style
    })
    map.addLayer(layer)

    // window.map = map
    // var selectPointerMove = new Select({
    //   condition: pointerMove
    // });
    // map.addInteraction(selectPointerMove)
    // selectPointerMove.on('select', function(e,e2){
    //   console.log('e', e.target)
    // })

    // var overlay = new Overlay({
    //   element: this.overlayer.nativeElement,
    //   autoPan: true,
    //   autoPanAnimation: {
    //     duration: 250
    //   }
    // });
    // map.addOverlay(overlay)
    map.on('pointermove', (browserEvent) => {
      var coordinate = browserEvent.coordinate;
      var pixel = browserEvent.pixel;
      map.forEachFeatureAtPixel(pixel, (feature, layer) => {
        this.capacity = feature.get('capacity')
        this.name = feature.get('name')
      })
    })
  }
}
