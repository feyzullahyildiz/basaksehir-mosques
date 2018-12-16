import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CoreModule } from './core.module';
import { MapComponent } from './map/map.component';
import { DataService } from './data.service';


@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    // FeatureDirective,
    // ListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CoreModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
