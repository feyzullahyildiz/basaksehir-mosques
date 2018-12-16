import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import Map from 'ol/Map';
import View from 'ol/View';
import { OSM, Vector as VectorSource } from 'ol/source.js';
import { Tile as TileLayer, Vector as VectorLayer } from 'ol/layer.js';


import GeoJSON from 'ol/format/GeoJSON.js';
import { Icon, Style } from 'ol/style.js';
import { DataService } from '../data.service';
import { FeatureDirective } from '../feature.directive';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  // Mosques = Mosques;
  title = 'basaksehir-camiler';
  @ViewChild('map') mapRef: ElementRef;
  name;
  address;
  lastColoredFeature;
  map: Map;
  source: VectorSource;
  layer: VectorLayer;
  defaultStyle: Style;
  selectedStyle: Style;
  hoveredStyle: Style;
  selectedHoverdStyle: Style;
  geojson = new GeoJSON();
  constructor(public dataService: DataService) {
    // console.log('Mosques', Mosques);
    // console.log('APP', this)
    this.defaultStyle = new Style({
      image: new Icon({
        anchor: [0.5, 46],
        anchorXUnits: 'fraction',
        anchorYUnits: 'pixels',
        src: 'assets/mosque.png',
        scale: .5,
      })
    });
    this.selectedStyle = new Style({
      image: new Icon({
        anchor: [0.5, 46],
        anchorXUnits: 'fraction',
        anchorYUnits: 'pixels',
        src: 'assets/mosque.png',
        scale: .5,
        color: '#00ff00'
      })
    });
    this.hoveredStyle = new Style({
      image: new Icon({
        anchor: [0.5, 46],
        anchorXUnits: 'fraction',
        anchorYUnits: 'pixels',
        src: 'assets/mosque.png',
        scale: .5,
        color: '#bbb'
      })
    });
    this.selectedHoverdStyle = new Style({
      image: new Icon({
        anchor: [0.5, 46],
        anchorXUnits: 'fraction',
        anchorYUnits: 'pixels',
        src: 'assets/mosque.png',
        scale: .5,
        color: '#77f976'
      })
    });
  }
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
    });
    // console.log('source', source);
    const layer = new VectorLayer({
      source: source,
      style: this.defaultStyle
    });
    map.addLayer(layer);
    this.layer = layer;
    this.source = source;
    map.on('pointermove', (e) => this.hoverFeature(e, 3));
    map.on('singleclick', (e) => this.selectFeature(e, 10));
  }
  selectFeature(browserEvent, hitTolerance) {
    const pixel = browserEvent.pixel;
    this.map.forEachFeatureAtPixel(pixel, (feature, layer) => {
      // if (this.lastColoredFeature) {
      //   this.lastColoredFeature.getComponent().disableHover();
      // }
      // this.lastColoredFeature = feature;

      feature.getComponent().changeSelection();
    }, { hitTolerance });
  }

  hoverFeature(browserEvent, hitTolerance) {
    const pixel = browserEvent.pixel;
    let isFeatureFound = false;
    this.map.forEachFeatureAtPixel(pixel, (feature, layer) => {
      isFeatureFound = true;
      document.body.style.cursor = 'pointer';
      if (this.lastColoredFeature && feature !== this.lastColoredFeature) {
        this.lastColoredFeature.getComponent().disableHover();
      }
      this.lastColoredFeature = feature;

      feature.getComponent().enableHover();
    }, { hitTolerance });
    if (!isFeatureFound) {
      if (this.lastColoredFeature) {
        this.lastColoredFeature.getComponent().disableHover();
      }
      document.body.style.cursor = 'auto';
    }
  }
  mosqueHoverChange(mosque, isHovered) {
    let index = this.dataService.mosques.indexOf(mosque)
    if (index === -1) return
  }
  mosqueSelectChange(mosque, isSelected) {
    let index = this.dataService.mosques.indexOf(mosque)
    if (index === -1) return

    this.dataService.mosques[index] = Object.assign(mosque, { selected: isSelected })
  }
}
