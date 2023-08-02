import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './components/index/forgot-password/forgot-password.component';
import { LoginComponent } from './components/index/login/login.component';
import { RegisterComponent } from './components/index/register/register.component';
import { LandingPageComponent } from './components/index/landing-page/landing-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path: 'nha-thuoc', loadChildren: () => import('./Module/dashboard-module.module').then((m) => m.DashboardModuleModule), },
  { path: 'Home', component: LandingPageComponent},
  { path: 'login', component: LoginComponent },
  { path: 'quen-mat-khau', component: ForgotPasswordComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dang-nhap', component: LoginComponent },

];


@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
