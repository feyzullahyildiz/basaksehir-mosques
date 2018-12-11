(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div #map class=\"map\"></div>\r\n  <div class=\"overlay\">\r\n    <span>\r\n      Adı: {{name}}\r\n    </span>\r\n    <span>\r\n      Adresi: {{address}}\r\n    </span>\r\n  </div>\r\n  <div class=\"list\"></div>\r\n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  width: 100%;\n  height: 100%;\n  margin: 0; }\n  :host .map {\n    position: absolute;\n    bottom: 0;\n    right: 0;\n    left: 0;\n    top: 0; }\n  :host .overlay {\n    position: fixed;\n    background-color: white;\n    min-width: 200px;\n    min-height: 20px;\n    border-radius: 8px;\n    border: solid 1px black;\n    padding: 8px;\n    margin: 8px;\n    display: flex;\n    flex-direction: column; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ol_Map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ol/Map */ "./node_modules/ol/Map.js");
/* harmony import */ var ol_View__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ol/View */ "./node_modules/ol/View.js");
/* harmony import */ var ol_source_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ol/source.js */ "./node_modules/ol/source.js");
/* harmony import */ var ol_format_GeoJSON_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ol/format/GeoJSON.js */ "./node_modules/ol/format/GeoJSON.js");
/* harmony import */ var ol_layer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ol/layer.js */ "./node_modules/ol/layer.js");
/* harmony import */ var _camiler_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./camiler.js */ "./src/app/camiler.js");
/* harmony import */ var ol_style_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ol/style.js */ "./node_modules/ol/style.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import TileLayer from 'ol/layer/Tile.js';





// import { click, pointerMove, altKeyOnly } from 'ol/events/condition.js';
// import Select from 'ol/interaction/Select.js';
// import Overlay from 'ol/Overlay.js';
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'basaksehir-camiler';
        this.style = new ol_style_js__WEBPACK_IMPORTED_MODULE_7__["Style"]({
            image: new ol_style_js__WEBPACK_IMPORTED_MODULE_7__["Icon"]({
                anchor: [0.5, 46],
                anchorXUnits: 'fraction',
                anchorYUnits: 'pixels',
                src: 'assets/mosque.png',
                scale: .5,
            })
        });
        this.selectedStyle = new ol_style_js__WEBPACK_IMPORTED_MODULE_7__["Style"]({
            image: new ol_style_js__WEBPACK_IMPORTED_MODULE_7__["Icon"]({
                anchor: [0.5, 46],
                anchorXUnits: 'fraction',
                anchorYUnits: 'pixels',
                src: 'assets/mosque.png',
                scale: .5,
                color: '#00ff00'
            })
        });
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        var map = new ol_Map__WEBPACK_IMPORTED_MODULE_1__["default"]({
            layers: [
                new ol_layer_js__WEBPACK_IMPORTED_MODULE_5__["Tile"]({
                    source: new ol_source_js__WEBPACK_IMPORTED_MODULE_3__["OSM"]()
                })
            ],
            target: this.mapRef.nativeElement,
            view: new ol_View__WEBPACK_IMPORTED_MODULE_2__["default"]({
                projection: 'EPSG:3857',
                center: [3205929.25726942, 5027538.321153645],
                zoom: 14
            }),
            controls: []
        });
        this.map = map;
        // window.map = map
        var source = new ol_source_js__WEBPACK_IMPORTED_MODULE_3__["Vector"]({
            loader: function (extent, resolution, projection) {
                source.addFeatures(new ol_format_GeoJSON_js__WEBPACK_IMPORTED_MODULE_4__["default"]().readFeatures(_camiler_js__WEBPACK_IMPORTED_MODULE_6__["default"], { featureProjection: projection }));
            }
        });
        var layer = new ol_layer_js__WEBPACK_IMPORTED_MODULE_5__["Vector"]({
            source: source,
            style: this.style
        });
        map.addLayer(layer);
        map.on('pointermove', function (e) { return _this.selectFeature(e, 3); });
        map.on('singleclick', function (e) { return _this.selectFeature(e, 10); });
    };
    AppComponent.prototype.selectFeature = function (browserEvent, hitTolerance) {
        var _this = this;
        var pixel = browserEvent.pixel;
        this.map.forEachFeatureAtPixel(pixel, function (feature, layer) {
            if (_this.lastColoredFeature) {
                _this.lastColoredFeature.setStyle(_this.style);
            }
            _this.lastColoredFeature = feature;
            feature.setStyle(_this.selectedStyle);
            _this.address = feature.get('adres');
            _this.name = feature.get('adi');
        }, { hitTolerance: hitTolerance });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('map'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], AppComponent.prototype, "mapRef", void 0);
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./map/map.component */ "./src/app/map/map.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _map_map_component__WEBPACK_IMPORTED_MODULE_3__["MapComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/camiler.js":
/*!****************************!*\
  !*** ./src/app/camiler.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
    "type": "FeatureCollection",
    "name": "panogps_datas",
    "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
    "features": [
    { "type": "Feature", "properties": { "adi": "Masko Camii", "adres": "OSB Masko Sanayi Sitesi Yolu Sk. No:26 ZİYA GÖKALP\/BAŞAKŞEHİR" }, "geometry": { "type": "Point", "coordinates": [ 28.79402613600007, 41.06715898200008 ] } },
    { "type": "Feature", "properties": { "adi": "Boğazköy Camii", "adres": "Turgut Özal Bulvarı No:42 BAHÇEŞEHİR 2. KISIM\/BAŞAKŞEHİR" }, "geometry": { "type": "Point", "coordinates": [ 28.666206166000052, 41.078273581000076 ] } },
    { "type": "Feature", "properties": { "adi": "Tunahan Camii", "adres": "Yunus Emre Cad. No:13 BAŞAK\/BAŞAKŞEHİR" }, "geometry": { "type": "Point", "coordinates": [ 28.809618626000031, 41.109200765000026 ] } },
    { "type": "Feature", "properties": { "adi": "Bayramtepe Sultan Beyazıt Camii", "adres": "Yaman Sk. No:15 GÜVERCİNTEPE\/BAŞAKŞEHİR" }, "geometry": { "type": "Point", "coordinates": [ 28.747714580000036, 41.080234988000029 ] } },
    { "type": "Feature", "properties": { "adi": "Hacı Ahmet Merkez Camii", "adres": "Öztürk Sk. No:3 ŞAHİNTEPE\/BAŞAKŞEHİR" }, "geometry": { "type": "Point", "coordinates": [ 28.726587160000065, 41.07162803500006 ] } },
    { "type": "Feature", "properties": { "adi": "Eskoop Cumhuriyet Camii", "adres": "OSB Evren Sanayi Sitesi Sk. No:7 ZİYA GÖKALP\/BAŞAKŞEHİR" }, "geometry": { "type": "Point", "coordinates": [ 28.799131997000075, 41.082250418000058 ] } },
    { "type": "Feature", "properties": { "adi": "İpkas Kooperatif Camii", "adres": "OSB 2722. Sk. No:1 ZİYA GÖKALP\/BAŞAKŞEHİR" }, "geometry": { "type": "Point", "coordinates": [ 28.795058392000044, 41.079636644000061 ] } },
    { "type": "Feature", "properties": { "adi": "Gazi Süleyman Paşa Camii", "adres": "Fenertepe Cad. No:7 KAYABAŞI\/BAŞAKŞEHİR" }, "geometry": { "type": "Point", "coordinates": [ 28.788033656000039, 41.132568372000037 ] } },
    { "type": "Feature", "properties": { "adi": "İsteks Camii", "adres": "OSB İsteks Sanayi Sitesi Sk. ZİYA GÖKALP\/BAŞAKŞEHİR" }, "geometry": { "type": "Point", "coordinates": [ 28.794888970000045, 41.096853495000062 ] } },
    { "type": "Feature", "properties": { "adi": "Hacı Simavi Camii", "adres": "Sancak Sk. BAŞAKŞEHİR\/BAŞAKŞEHİR" }, "geometry": { "type": "Point", "coordinates": [ 28.78989696800005, 41.097486948000039 ] } },
    { "type": "Feature", "properties": { "adi": "Medine Münavi Fahrettin Paşa Camii", "adres": "Yeşil Vadi Cad. No:2 BAŞAK\/BAŞAKŞEHİR" }, "geometry": { "type": "Point", "coordinates": [ 28.804679069000031, 41.103613840000037 ] } },
    { "type": "Feature", "properties": { "adi": "Yunus Emre Camii", "adres": "İbn-İ Sina Cad. No:4 BAŞAK\/BAŞAKŞEHİR" }, "geometry": { "type": "Point", "coordinates": [ 28.810211051000067, 41.119056812000053 ] } },
    { "type": "Feature", "properties": { "adi": "TOKİ Ayazma Camii", "adres": "Melikgazi Cad. No:17 ZİYA GÖKALP\/BAŞAKŞEHİR" }, "geometry": { "type": "Point", "coordinates": [ 28.779912457000023, 41.078871494000055 ] } },
    { "type": "Feature", "properties": { "adi": "Bağcılar Güngören Sanayi Sitesi Camii", "adres": "OSB Güngören-Bağcılar Sanayi Sitesi Yolu Sk. No:7 ZİYA GÖKALP\/BAŞAKŞEHİR" }, "geometry": { "type": "Point", "coordinates": [ 28.803315283000074, 41.079154953000057 ] } },
    { "type": "Feature", "properties": { "adi": "Hz. Ebu Talib Camii", "adres": "Seyit Onbaşı Cad. No:27 ZİYA GÖKALP\/BAŞAKŞEHİR" }, "geometry": { "type": "Point", "coordinates": [ 28.790398451000044, 41.075223888000039 ] } },
    { "type": "Feature", "properties": { "adi": "Demirciler Kooperatif Camii", "adres": "OSB Demirciler Sanayi Sitesi Yolu Sk. No:2 ZİYA GÖKALP\/BAŞAKŞEHİR" }, "geometry": { "type": "Point", "coordinates": [ 28.80559472300007, 41.069485370000052 ] } },
    { "type": "Feature", "properties": { "adi": "Şehit Sezer Bilal-i Habeşi Camii", "adres": "Görümlü Sk. No:5 GÜVERCİNTEPE\/BAŞAKŞEHİR" }, "geometry": { "type": "Point", "coordinates": [ 28.753729419000024, 41.091354129000081 ] } },
    { "type": "Feature", "properties": { "adi": "Bayramtepe Huzur Camii", "adres": "Karadeniz Cad. No:23 GÜVERCİNTEPE\/BAŞAKŞEHİR" }, "geometry": { "type": "Point", "coordinates": [ 28.754449180000051, 41.074346872000035 ] } },
    { "type": "Feature", "properties": { "adi": "Ömer Fahrettin Paşa Camii", "adres": "Albayrak Sk. No:6 KAYABAŞI\/BAŞAKŞEHİR" }, "geometry": { "type": "Point", "coordinates": [ 28.77054116100004, 41.10522018000006 ] } },
    { "type": "Feature", "properties": { "adi": "Ömer Nasuhi Bilmen Camii", "adres": "Ali Soylu Cad. No:5 BAŞAK\/BAŞAKŞEHİR" }, "geometry": { "type": "Point", "coordinates": [ 28.80631571400005, 41.113372890000051 ] } },
    { "type": "Feature", "properties": { "adi": "Bayramtepe Alemdar Camii", "adres": "Bucak Sk. No:71 GÜVERCİNTEPE\/BAŞAKŞEHİR" }, "geometry": { "type": "Point", "coordinates": [ 28.748872763000065, 41.07970372300008 ] } },
    { "type": "Feature", "properties": { "adi": "Altınşehir Tepe Mahallesi Eski Camii", "adres": "Cami Sk. No:7 ALTINŞEHİR\/BAŞAKŞEHİR" }, "geometry": { "type": "Point", "coordinates": [ 28.753484843000024, 41.062619408000046 ] } },
    { "type": "Feature", "properties": { "adi": "Bilal-i Habeşi Camii", "adres": "Yunus Emre Cad. No:20 BAŞAK\/BAŞAKŞEHİR" }, "geometry": { "type": "Point", "coordinates": [ 28.806539666000049, 41.120628507000049 ] } },
    { "type": "Feature", "properties": { "adi": "Hicret Camii", "adres": "Karaduman Sk. No:81 ZİYA GÖKALP\/BAŞAKŞEHİR" }, "geometry": { "type": "Point", "coordinates": [ 28.778572824000037, 41.07309478600007 ] } },
    { "type": "Feature", "properties": { "adi": "Akşamsettin Camii", "adres": "Reşat Nuri Güntekin Cad. No:5 \/1 BAŞAK\/BAŞAKŞEHİR" }, "geometry": { "type": "Point", "coordinates": [ 28.812227627000027, 41.092341646000079 ] } },
    { "type": "Feature", "properties": { "adi": "Sarı Saltuk Camii", "adres": "Mimar Sinan Cad. No:5 BAŞAK\/BAŞAKŞEHİR" }, "geometry": { "type": "Point", "coordinates": [ 28.810497711000039, 41.095276987000034 ] } },
    { "type": "Feature", "properties": { "adi": "Altınşehir Merkez Camii", "adres": "İstiklal Cad. No:2 ALTINŞEHİR\/BAŞAKŞEHİR" }, "geometry": { "type": "Point", "coordinates": [ 28.747001732000058, 41.063756273000081 ] } },
    { "type": "Feature", "properties": { "adi": "Hacı Kamil Demiröz Camii", "adres": "2801. Sk. BAHÇEŞEHİR 1. KISIM\/BAŞAKŞEHİR" }, "geometry": { "type": "Point", "coordinates": [ 28.666864146000023, 41.102160728000058 ] } },
    { "type": "Feature", "properties": { "adi": "Ensar Camii", "adres": "Ertuğrul Gazi Cad. BAŞAK\/BAŞAKŞEHİR" }, "geometry": { "type": "Point", "coordinates": [ 28.804985991000024, 41.096154985000055 ] } },
    { "type": "Feature", "properties": { "adi": "Hz. Hüseyin Camii", "adres": "Şehit Semih Balaban Cad. No:9 KAYABAŞI\/BAŞAKŞEHİR" }, "geometry": { "type": "Point", "coordinates": [ 28.759530450000057, 41.108428761000027 ] } },
    { "type": "Feature", "properties": { "adi": "İmam Rıza Camii", "adres": "Yunus Sk. No:72 ŞAHİNTEPE\/BAŞAKŞEHİR" }, "geometry": { "type": "Point", "coordinates": [ 28.727375307000045, 41.073235514000032 ] } },
    { "type": "Feature", "properties": { "adi": "İmam-ı Azam Camii", "adres": "Yeşil Vadi Cad. No:4 BAŞAK\/BAŞAKŞEHİR" }, "geometry": { "type": "Point", "coordinates": [ 28.804011879000029, 41.109048547000043 ] } },
    { "type": "Feature", "properties": { "adi": "Çevre Sanayi Sitesi Camii", "adres": "OSB Çevre Sanayi Sitesi Sk. ZİYA GÖKALP\/BAŞAKŞEHİR" }, "geometry": { "type": "Point", "coordinates": [ 28.796677488000057, 41.094885369000053 ] } },
    { "type": "Feature", "properties": { "adi": "Metal İş Sanayi Sitesi Camii", "adres": "OSB Metal İş Sanayi Sitesi Yolu Sk. No:1 ZİYA GÖKALP\/BAŞAKŞEHİR" }, "geometry": { "type": "Point", "coordinates": [ 28.803621657000065, 41.069714051000062 ] } },
    { "type": "Feature", "properties": { "adi": "Aydınlar Camii", "adres": "Gökçınar Sk. No:9 ŞAHİNTEPE\/BAŞAKŞEHİR" }, "geometry": { "type": "Point", "coordinates": [ 28.718385157000057, 41.079641995000031 ] } },
    { "type": "Feature", "properties": { "adi": "Hatipoğlu Hacı Osman Işıklı Camii", "adres": "Yeşiltepe Sk. No:10 BAHÇEŞEHİR 2. KISIM\/BAŞAKŞEHİR" }, "geometry": { "type": "Point", "coordinates": [ 28.672415622000074, 41.067439495000031 ] } },
    { "type": "Feature", "properties": { "adi": "Hz. Ömer Camii", "adres": "Taşkent Sk. No:22 ZİYA GÖKALP\/BAŞAKŞEHİR" }, "geometry": { "type": "Point", "coordinates": [ 28.787834337000049, 41.072899906000032 ] } },
    { "type": "Feature", "properties": { "adi": "Süleyman Çelebi Camii", "adres": "Çamlıca Sk. No:12 BAŞAK\/BAŞAKŞEHİR" }, "geometry": { "type": "Point", "coordinates": [ 28.800259729000061, 41.105381546000046 ] } },
    { "type": "Feature", "properties": { "adi": "Kayabaşı Merkez Camii", "adres": "İstiklal Cad. No:135 KAYABAŞI\/BAŞAKŞEHİR" }, "geometry": { "type": "Point", "coordinates": [ 28.740350328000034, 41.11146177300003 ] } },
    { "type": "Feature", "properties": { "adi": "Güvercintepe Kuba Camii", "adres": "Gül Sk. No:101 B GÜVERCİNTEPE\/BAŞAKŞEHİR" }, "geometry": { "type": "Point", "coordinates": [ 28.751374970000029, 41.079592519000073 ] } },
    { "type": "Feature", "properties": { "adi": "Tormak Sanayi Camii", "adres": "OSB Tormak Sanayi Sitesi Sk. No:4 ZİYA GÖKALP\/BAŞAKŞEHİR" }, "geometry": { "type": "Point", "coordinates": [ 28.78956977200005, 41.089550087000077 ] } },
    { "type": "Feature", "properties": { "adi": "Hz. Ali Camii", "adres": "Adatepe Sk. No:7 GÜVERCİNTEPE\/BAŞAKŞEHİR" }, "geometry": { "type": "Point", "coordinates": [ 28.753283960000033, 41.085231351000061 ] } },
    { "type": "Feature", "properties": { "adi": "Hz. İbrahim Camii", "adres": "Günay Sk. No:27 B ALTINŞEHİR\/BAŞAKŞEHİR" }, "geometry": { "type": "Point", "coordinates": [ 28.751405412000054, 41.069386769000062 ] } },
    { "type": "Feature", "properties": { "adi": "Yeni Şamlar Mahallesi Camii", "adres": "Hürmet Sk. No:8 ŞAMLAR\/BAŞAKŞEHİR" }, "geometry": { "type": "Point", "coordinates": [ 28.755186154000057, 41.125927378000029 ] } },
    { "type": "Feature", "properties": { "adi": "Hacı Ahmet Camii", "adres": "Mescid Sk. No:3 BAŞAKŞEHİR\/BAŞAKŞEHİR" }, "geometry": { "type": "Point", "coordinates": [ 28.790423657000076, 41.104301425000074 ] } },
    { "type": "Feature", "properties": { "adi": "Şeyh Şamil Camii", "adres": "Ertuğrul Gazi Cad. No:22 \/2 BAŞAK\/BAŞAKŞEHİR" }, "geometry": { "type": "Point", "coordinates": [ 28.804839705000063, 41.101078402000041 ] } },
    { "type": "Feature", "properties": { "adi": "Hatice Binti Ali Camii", "adres": "Katip Çelebi Cad. No:23 \/1 ZİYA GÖKALP\/BAŞAKŞEHİR" }, "geometry": { "type": "Point", "coordinates": [ 28.783644763000041, 41.076869277000071 ] } },
    { "type": "Feature", "properties": { "adi": "Selman-ı Farisi Camii", "adres": "Hüdavendigar Cad. No:3 \/1 BAŞAK\/BAŞAKŞEHİR" }, "geometry": { "type": "Point", "coordinates": [ 28.809808231000034, 41.086426838000079 ] } },
    { "type": "Feature", "properties": { "adi": "Zekiye Hatun Camii", "adres": "Denizci Sk. No:30 ŞAHİNTEPE\/BAŞAKŞEHİR" }, "geometry": { "type": "Point", "coordinates": [ 28.733179730000074, 41.067420456000036 ] } },
    { "type": "Feature", "properties": { "adi": "Bahçeşehir Merkez Camii", "adres": "Seyhan Cad. BAHÇEŞEHİR 1. KISIM\/BAŞAKŞEHİR" }, "geometry": { "type": "Point", "coordinates": [ 28.692232241000056, 41.074574472000052 ] } },
    { "type": "Feature", "properties": { "adi": "Prof. Dr. M. Esad Coşan Camii", "adres": "Necati Coşan Cad. No:20 BAŞAKŞEHİR\/BAŞAKŞEHİR" }, "geometry": { "type": "Point", "coordinates": [ 28.786185996000029, 41.110631262000027 ] } },
    { "type": "Feature", "properties": { "adi": "Keresteciler Sanayi Sitesi Camii", "adres": "OSB Keresteciler Sanayi Sitesi Yolu Sk. No:1\/2 ZİYA GÖKALP\/BAŞAKŞEHİR" }, "geometry": { "type": "Point", "coordinates": [ 28.782832616000064, 41.071559445000048 ] } },
    { "type": "Feature", "properties": { "adi": "Haseyed Camii", "adres": "Atatürk Bulvarı No:76 ZİYA GÖKALP\/BAŞAKŞEHİR" }, "geometry": { "type": "Point", "coordinates": [ 28.808895031000077, 41.078065711000079 ] } },
    { "type": "Feature", "properties": { "adi": "Hz. İsmail Camii", "adres": "Yiğitalp Sk. No:9 KAYABAŞI\/BAŞAKŞEHİR" }, "geometry": { "type": "Point", "coordinates": [ 28.768899700000077, 41.136641447000045 ] } },
    { "type": "Feature", "properties": { "adi": "Dolapdere Sanayi Sitesi Camii", "adres": "OSB Dolapdere Sanayi Sitesi Yolu Sk. No:2 ZİYA GÖKALP\/BAŞAKŞEHİR" }, "geometry": { "type": "Point", "coordinates": [ 28.807144192000067, 41.074434779000057 ] } },
    { "type": "Feature", "properties": { "adi": "Mevlana Camii", "adres": "Mevlana Celaleddini Rumi Cad. No:19 BAŞAK\/BAŞAKŞEHİR" }, "geometry": { "type": "Point", "coordinates": [ 28.810537957000065, 41.101056115000063 ] } },
    { "type": "Feature", "properties": { "adi": "Hoşdere Köyü Camii", "adres": "Medeniyet Cad. No:25 BAHÇEŞEHİR 2. KISIM\/BAŞAKŞEHİR" }, "geometry": { "type": "Point", "coordinates": [ 28.659077636000063, 41.083094187000029 ] } },
    { "type": "Feature", "properties": { "adi": "Halillürrahman Camii", "adres": "Dinç Sk. ALTINŞEHİR\/BAŞAKŞEHİR" }, "geometry": { "type": "Point", "coordinates": [ 28.749027962000071, 41.07067150000006 ] } },
    { "type": "Feature", "properties": { "adi": "Şamlar Mahallesi Camii", "adres": "2829. Sk. No:55 ŞAMLAR\/BAŞAKŞEHİR" }, "geometry": { "type": "Point", "coordinates": [ 28.735951438000029, 41.123994888000027 ] } },
    { "type": "Feature", "properties": { "adi": "Elmalılı Hamdi Yazır Camii", "adres": "İstiklal Cad. No:202 GÜVERCİNTEPE\/BAŞAKŞEHİR" }, "geometry": { "type": "Point", "coordinates": [ 28.739336724000054, 41.093956616000071 ] } },
    { "type": "Feature", "properties": { "adi": "İkitelli Altıntaç Camii", "adres": "Eski Turgut Özal Cad. No:12 ZİYA GÖKALP\/BAŞAKŞEHİR" }, "geometry": { "type": "Point", "coordinates": [ 28.812774445000059, 41.073030240000037 ] } },
    { "type": "Feature", "properties": { "adi": "Altınşehir İmamoğulları Camii", "adres": "Cumhuriyet Cad. No:27 GÜVERCİNTEPE\/BAŞAKŞEHİR" }, "geometry": { "type": "Point", "coordinates": [ 28.750056412000049, 41.076169909000043 ] } },
    { "type": "Feature", "properties": { "adi": "İskender Esma Camii", "adres": "Nedim Sk. No:53 ŞAHİNTEPE\/BAŞAKŞEHİR" }, "geometry": { "type": "Point", "coordinates": [ 28.726826785000071, 41.08094845200003 ] } },
    { "type": "Feature", "properties": { "adi": "Veysel Karani Camii", "adres": "Kartal Sk. No:51 ŞAHİNTEPE\/BAŞAKŞEHİR" }, "geometry": { "type": "Point", "coordinates": [ 28.723351129000037, 41.074550935000048 ] } },
    { "type": "Feature", "properties": { "adi": "Hoca Ahmet Yesevi Camii", "adres": "Süleyman Çelebi Cad. No:10 BAŞAKŞEHİR\/BAŞAKŞEHİR" }, "geometry": { "type": "Point", "coordinates": [ 28.786646395000048, 41.104692859000068 ] } },
    { "type": "Feature", "properties": { "adi": "Bayramtepe Hz. Ebubekir Camii", "adres": "Şefaat Sk. No:42 GÜVERCİNTEPE\/BAŞAKŞEHİR" }, "geometry": { "type": "Point", "coordinates": [ 28.754574321000064, 41.078728855000065 ] } },
    { "type": "Feature", "properties": { "adi": "Mehmet Şükrü Paşa Camii", "adres": "Botanik Sk. No:10 KAYABAŞI\/BAŞAKŞEHİR" }, "geometry": { "type": "Point", "coordinates": [ 28.792407414000024, 41.142012653000052 ] } },
    { "type": "Feature", "properties": { "adi": "Göçmen Konutları Camii", "adres": "Tunalı Cad. No:1 \/1 BAŞAK\/BAŞAKŞEHİR" }, "geometry": { "type": "Point", "coordinates": [ 28.796523895000064, 41.104658389000065 ] } },
    { "type": "Feature", "properties": { "adi": "Aymakoop Camii", "adres": "OSB Aymakop Sanayi Sitesi Yolu Sk. No:3 ZİYA GÖKALP\/BAŞAKŞEHİR" }, "geometry": { "type": "Point", "coordinates": [ 28.790266062000057, 41.079592234000074 ] } },
    { "type": "Feature", "properties": { "adi": "Mehmet Zahid Kotku Camii", "adres": "Cihangir Sk. No:6 BAŞAKŞEHİR\/BAŞAKŞEHİR" }, "geometry": { "type": "Point", "coordinates": [ 28.790495823000072, 41.100249290000079 ] } },
    { "type": "Feature", "properties": { "adi": "Şahintepe Fetih Camii", "adres": "Aydın Çıkmazı Sk. No:4 ŞAHİNTEPE\/BAŞAKŞEHİR" }, "geometry": { "type": "Point", "coordinates": [ 28.733667411000056, 41.07411819400005 ] } },
    { "type": "Feature", "properties": { "adi": "Şamlar Yeşil Çamlık Camii", "adres": "Çanakkale Şehitleri Cad. No:3 ŞAMLAR\/BAŞAKŞEHİR" }, "geometry": { "type": "Point", "coordinates": [ 28.758126324000045, 41.131506030000025 ] } },
    { "type": "Feature", "properties": { "adi": "Hacı Eyüp Saadet Çarmıklı Camii", "adres": "Avni Akyol Bulvarı No:1 BAHÇEŞEHİR 2. KISIM\/BAŞAKŞEHİR" }, "geometry": { "type": "Point", "coordinates": [ 28.684478961000025, 41.06999262000005 ] } },
    { "type": "Feature", "properties": { "adi": "Saraçlar Sitesi Camii", "adres": "OSB Saraçlar Sanayi Sitesi Sk. ZİYA GÖKALP\/BAŞAKŞEHİR" }, "geometry": { "type": "Point", "coordinates": [ 28.785615828000061, 41.083917842000062 ] } },
    { "type": "Feature", "properties": { "adi": "Müderris Halil Hilmi Camii", "adres": "Pelit Sk. No:16 BAŞAKŞEHİR\/BAŞAKŞEHİR" }, "geometry": { "type": "Point", "coordinates": [ 28.784348091000027, 41.10737875600006 ] } }
    ]
});
    

/***/ }),

/***/ "./src/app/map/map.component.css":
/*!***************************************!*\
  !*** ./src/app/map/map.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/map/map.component.html":
/*!****************************************!*\
  !*** ./src/app/map/map.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  map works!\n</p>\n"

/***/ }),

/***/ "./src/app/map/map.component.ts":
/*!**************************************!*\
  !*** ./src/app/map/map.component.ts ***!
  \**************************************/
/*! exports provided: MapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function() { return MapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MapComponent = /** @class */ (function () {
    function MapComponent() {
    }
    MapComponent.prototype.ngOnInit = function () {
    };
    MapComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-map',
            template: __webpack_require__(/*! ./map.component.html */ "./src/app/map/map.component.html"),
            styles: [__webpack_require__(/*! ./map.component.css */ "./src/app/map/map.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MapComponent);
    return MapComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Feyzullah\Desktop\projem\basaksehir-camiler\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map