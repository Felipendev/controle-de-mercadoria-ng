import { CommonModule } from '@angular/common';

import { BodyComponent } from '../home/body/body.component';
import { HeaderComponent } from '../home/header/header.component';
import { FooterComponent } from '../home/footer/footer.component';
import { ClientesListComponent } from './clientes-list/clientes-list.component';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [
        HeaderComponent,
        BodyComponent,
        FooterComponent,
        HomeComponent,
        ClientesListComponent
    ],
    exports:[
        HomeComponent
    ],
    imports: [
        CommonModule
    ]
})
export class HomeModule {}