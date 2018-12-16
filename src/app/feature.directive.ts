import { Directive, OnInit, OnDestroy, Input, OnChanges, EventEmitter, Output } from '@angular/core';
import { AppComponent } from './app.component';


import Feature from 'ol/Feature';
import { DataService } from './data.service';
import { MapComponent } from './map/map.component';
Feature.prototype._component = null;
Feature.prototype.getComponent = function (): FeatureDirective {
  return this._component;
};

@Directive({
  selector: 'app-feature'
})
export class FeatureDirective implements OnInit, OnDestroy, OnChanges {
  ngOnChanges() {
    this.manageStyle()
  }

  @Input() mosque;

  // @Input('selected') selected: boolean
  selected: boolean;
  @Input('selected')
  set selectedSetter(val: boolean) {
    this.selected = val;
    this.manageStyle();
  }
  // @Input('hover') hover: boolean
  hover: boolean;
  @Input('hover')
  set hoverSetter(val: boolean) {
    this.hover = val;
    this.manageStyle();
  }
  @Output() selectChange = new EventEmitter<boolean>()
  @Output() hoverChange = new EventEmitter<boolean>()
  private feature;
  constructor(private dataService: DataService, private mapComponent: MapComponent) { }

  ngOnInit(): void {
    this.feature = this.dataService.geojson.readFeature(this.mosque, { featureProjection: 'EPSG:3857' });
    this.feature._component = this;
    this.mapComponent.source.addFeature(this.feature);
  }
  ngOnDestroy(): void {
    this.mapComponent.source.removeFeature(this.feature);
  }

  enableHover() {
    if (this.hover === true) return
    this.hover = true;
    this.hoverChange.emit(this.hover)
    this.manageStyle();
  }
  disableHover() {
    if (this.hover === false) return
    this.hover = false;
    this.hoverChange.emit(this.hover)
    this.manageStyle();
  }
  changeSelection() {
    this.selected = !this.selected;
    this.manageStyle();
    this.selectChange.emit(this.selected)

  }
  private manageStyle(): void {
    if (!this.feature) { return; }
    if (this.selected) {
      if (this.hover) {
        this.feature.setStyle(this.dataService.selectedHoverdStyle);
      } else {
        this.feature.setStyle(this.dataService.selectedStyle);
      }
    } else {
      if (this.hover) {
        this.feature.setStyle(this.dataService.hoveredStyle);
      } else {
        this.feature.setStyle(this.dataService.defaultStyle);
      }
    }
  }
}
