import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/General/home/home.component';
import { ListTicketsComponent } from './components/ticket/list-tickets/list-tickets.component';
import { TicketFormComponent } from './components/ticket/ticket-form/ticket-form.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'tickets', component: ListTicketsComponent },
  { path: 'ticket/new', component: TicketFormComponent },
  { path: 'ticket/new/:formConfigId', component: TicketFormComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
