// angular imports
import { NgModule, ModuleWithProviders } from "@angular/core";
import { NumeralPipe, DEFAULT_NUMERAL } from "./ngx-numeral.pipe";

const DECLARATIONS = [
    NumeralPipe,
];

@NgModule({
    declarations: DECLARATIONS,
    exports: DECLARATIONS,
})

export class NumeralModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: NumeralModule,
            providers: [
                { provide: DEFAULT_NUMERAL, useValue: 0 }
            ]
        };
    }
}

export { NumeralPipe, DEFAULT_NUMERAL } from "./ngx-numeral.pipe";
