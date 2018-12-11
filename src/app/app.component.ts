import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import Map from 'ol/Map';
import View from 'ol/View';
// import TileLayer from 'ol/layer/Tile.js';
import { OSM, Vector as VectorSource } from 'ol/source.js';
import GeoJSON from 'ol/format/GeoJSON.js';
import { Tile as TileLayer, Vector as VectorLayer } from 'ol/layer.js';
import Camiler from './camiler.js';
import { Icon, Style } from 'ol/style.js';
// import { click, pointerMove, altKeyOnly } from 'ol/events/condition.js';
// import Select from 'ol/interaction/Select.js';
// import Overlay from 'ol/Overlay.js';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'basaksehir-camiler';
  @ViewChild('map') mapRef: ElementRef;
  name;
  address;
  lastColoredFeature;
  map: Map;
  style = new Style({
    image: new Icon({
      anchor: [0.5, 46],
      anchorXUnits: 'fraction',
      anchorYUnits: 'pixels',
      src: 'assets/mosque.png',
      scale: .5,
    })
  });
  selectedStyle = new Style({
    image: new Icon({
      anchor: [0.5, 46],
      anchorXUnits: 'fraction',
      anchorYUnits: 'pixels',
      src: 'assets/mosque.png',
      scale: .5,
      color: '#00ff00'
    })
  });
  ngOnInit() {
    const map = new Map({
      layers: [
        new TileLayer({
          source: new OSM()
        })
      ],
      target: this.mapRef.nativeElement,
      view: new View({
        projection: 'EPSG:3857',
        center: [3205929.25726942, 5027538.321153645],
        zoom: 14
      }),
      controls: []
    });
    this.map = map;
    const source = new VectorSource({
      loader: function (extent, resolution, projection) {
        source.addFeatures(
          new GeoJSON().readFeatures(Camiler, { featureProjection: projection }));
      }
    });
    const layer = new VectorLayer({
      source: source,
      style: this.style
    });
    map.addLayer(layer);

    map.on('pointermove', (e) => this.selectFeature(e, 3));
    map.on('singleclick', (e) => this.selectFeature(e, 10));
  }
  selectFeature(browserEvent, hitTolerance) {
    const pixel = browserEvent.pixel;
    this.map.forEachFeatureAtPixel(pixel, (feature, layer) => {
      if (this.lastColoredFeature) {
        this.lastColoredFeature.setStyle(this.style);
      }
      this.lastColoredFeature = feature;
      feature.setStyle(this.selectedStyle);
      this.address = feature.get('adres');
      this.name = feature.get('adi');
    }, { hitTolerance });

  }
}
