import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { LoanComponent } from './home/loan/loan.component';
import { SuccessComponent } from './home/success/success.component';
import { UpdateComponent } from './home/update/update.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'login'},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'loan', component: LoanComponent, canActivate: [AuthGuard] },
  {path: 'update', component: UpdateComponent},
  {path: 'success', component: SuccessComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
