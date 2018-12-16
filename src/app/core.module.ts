import { NgModule, ModuleWithProviders, SkipSelf, Optional } from "@angular/core";
import { DataService } from "./data.service";
import { FeatureDirective } from "./feature.directive";
import { ListComponent } from "./list/list.component";
import { CommonModule } from "@angular/common";

@NgModule({
    imports: [CommonModule],
    declarations: [FeatureDirective, ListComponent],
    exports: [FeatureDirective, ListComponent],
    providers: [],
})
export class CoreModule {

    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error(
                'CoreModule is already loaded. Import it in the AppModule only');
        }
    }
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: CoreModule,
            providers: [
                { provide: DataService, useClass: DataService },
            ]
        }
    }
}