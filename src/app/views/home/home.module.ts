import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BodyComponent } from '../body/body.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { ProdutosListComponent } from './produtos-list/produtos-list.component';

@NgModule({
    declarations: [
        HeaderComponent,
        BodyComponent,
        FooterComponent,
        HomeComponent,
        ProdutosListComponent
    ],
    exports:[
        HomeComponent
    ],
    imports: [
        CommonModule
    ]
})
export class HomeModule {}