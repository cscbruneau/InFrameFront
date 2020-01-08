import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { GenericInputComponent } from './generic-input/generic-input.component';
import { DemandFormComponent } from './demand-form/demand-form.component';
import { FormConfigurationService } from './services/form-configuration.service';

import {RadioButtonModule} from 'primeng/radiobutton';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

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
    RadioButtonModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [FormConfigurationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
