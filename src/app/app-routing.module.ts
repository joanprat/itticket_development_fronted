import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { TicketTableComponent } from './components/ticket-table/ticket-table.component';
import { TicketDetailsComponent } from './components/ticket-details/ticket-details.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path: '', component: TicketTableComponent, canActivate: [AuthGuard]},
  {path: 'details', component: TicketDetailsComponent},
  {path: 'login', component: LoginComponent},
  {path: '**', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
