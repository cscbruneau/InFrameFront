import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { GenericInputComponent } from './generic-input/generic-input.component';
import { TicketFormComponent } from './ticket-form/ticket-form.component';
import { DemandFormComponent } from './demand-form/demand-form.component';
import { HeaderComponent } from './header/header.component';
import { ListFormComponent } from './list-form/list-form.component';

import { FormsModule } from '@angular/forms';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';


// Modules formulaires PrimeNG
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { PasswordModule } from 'primeng/password';
import { CalendarModule } from 'primeng/calendar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ColorPickerModule } from 'primeng/colorpicker';
import { KeyFilterModule } from 'primeng/keyfilter';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { ButtonModule } from 'primeng/button';
import { FileUploadModule } from 'primeng/fileupload';
import { MultiSelectModule } from 'primeng/multiselect';
import { SelectButtonModule } from 'primeng/selectbutton';
import { SpinnerModule } from 'primeng/spinner';
import { DropdownModule } from 'primeng/dropdown';
import { InputMaskModule } from 'primeng/inputmask';
import { FormConfigService } from './services/form-config.service';
import { HttpClientModule } from '@angular/common/http';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MenubarModule } from 'primeng/menubar';
import { AgGridModule } from 'ag-grid-angular';


const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'demands', component: ListFormComponent },
  { path: 'demand', component: DemandFormComponent },
  { path: 'tickets', component: TicketFormComponent },
  { path: 'tickets/:id', component: TicketFormComponent },
  { path: '', component: ListFormComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    GenericInputComponent,
    DemandFormComponent,
    TicketFormComponent,
    HeaderComponent,
    ListFormComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
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
    MultiSelectModule,
    InputTextareaModule,
    MenubarModule,
    RouterModule.forRoot(appRoutes),
    AgGridModule.withComponents([])
  ],
  providers: [FormConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }