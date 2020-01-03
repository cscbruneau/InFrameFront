import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { GenericInputComponent } from './generic-input/generic-input.component';
import { GenericFormComponent } from './generic-form/generic-form.component';
import { FormConfigurationService } from './services/form-configuration.service';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    GenericInputComponent,
    GenericFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [FormConfigurationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
