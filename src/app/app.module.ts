import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { GenericInputComponent } from './generic-input/generic-input.component';
import { DemandFormComponent } from './demand-form/demand-form.component';
import { FormConfigurationService } from './services/form-configuration.service';
import { FormsModule } from '@angular/forms';
import {CheckboxModule} from 'primeng/checkbox';
import {RadioButtonModule} from 'primeng/radiobutton';
import {PasswordModule} from 'primeng/password';
import {CalendarModule} from 'primeng/calendar';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {ColorPickerModule} from 'primeng/colorpicker';
import {KeyFilterModule} from 'primeng/keyfilter';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {ButtonModule} from 'primeng/button';
import {FileUploadModule} from 'primeng/fileupload';
import {SpinnerModule} from 'primeng/spinner';
import {InputMaskModule} from 'primeng/inputmask';
import {DropdownModule} from 'primeng/dropdown';
import {SelectButtonModule} from 'primeng/selectbutton';
import {MultiSelectModule} from 'primeng/multiselect';


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    GenericInputComponent,
    DemandFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CheckboxModule,
    RadioButtonModule,
    PasswordModule,
    CalendarModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    ColorPickerModule,
    KeyFilterModule,
    MessagesModule,
    MessageModule,
    ButtonModule,
    FileUploadModule,
    SpinnerModule,
    InputMaskModule,
    DropdownModule,
    SelectButtonModule,
    MultiSelectModule
    
  ],
  providers: [FormConfigurationService],
  bootstrap: [AppComponent]
})
export class AppModule { }