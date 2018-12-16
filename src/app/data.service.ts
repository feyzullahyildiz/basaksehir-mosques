import { Injectable } from '@angular/core';
import GeoJSON from 'ol/format/GeoJSON.js';
import { Icon, Style } from 'ol/style.js';
import Mosques from './mosques.js';
@Injectable()
export class DataService {
  defaultStyle: Style;
  selectedStyle: Style;
  hoveredStyle: Style;
  selectedHoverdStyle: Style;
  geojson: GeoJSON
  mosques: Array<any>
  constructor() {
    // console.log('DataService CTOR')
    this.geojson = new GeoJSON();
    this.mosques = Mosques.slice()
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
}

