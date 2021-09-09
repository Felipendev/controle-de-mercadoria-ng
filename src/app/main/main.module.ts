import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BodyComponent } from './../main/body/body.component';
import { HeaderComponent } from './../main/header/header.component';
import { FooterComponent } from './../main/footer/footer.component';
import { MainComponent } from './main.component';

@NgModule({
    declarations: [
        HeaderComponent,
        BodyComponent,
        FooterComponent,
        MainComponent
    ],
    exports:[
        MainComponent
    ],
    imports: [
        CommonModule
    ]
})
export class MainModule {}