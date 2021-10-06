import { SigninComponent } from './signin/signin.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { ClienteFormComponent } from '../home/cliente-form/cliente-form.component';
import { HeaderComponent } from '../home/header/header.component';
import { FooterComponent } from '../home/footer/footer.component';
import { HomeComponent } from './home.component';
import { LocalDateTimePipe } from 'src/app/shared/pipe/local-date-time.pipe';
import { PhonePipe } from 'src/app/shared/pipe/phone/phone.pipe';
import { FiltroPipe } from './../../shared/pipe/filtro-form/filtro.pipe';
import { MenuModule } from 'src/app/shared/menu/menu.module';
import { NgxMaskModule } from 'ngx-mask';
@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
        HomeComponent,
        LocalDateTimePipe,
        ClienteFormComponent,
        PhonePipe,
        FiltroPipe,
        SigninComponent
        
    ],
    exports:[
        HomeComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        MenuModule,
        NgxMaskModule.forRoot({
            dropSpecialCharacters: false
          })    
    ]
})
export class HomeModule {}