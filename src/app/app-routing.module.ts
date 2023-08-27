import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './components/index/forgot-password/forgot-password.component';
import { LoginComponent } from './components/index/login/login.component';
import { RegisterComponent } from './components/index/register/register.component';
import { LandingPageComponent } from './components/index/landing-page/landing-page.component';
import { VerifyComponent } from './components/index/verify/verify.component';
import { UpdateUserInfoComponent } from './components/index/update-user-info/update-user-info.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'Home', component: LandingPageComponent},
  { path: 'login', component: LoginComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'verify', component: VerifyComponent },
  { path: 'update-info', component: UpdateUserInfoComponent },
  { path: 'elearning', loadChildren: () => import('./Module/dashboard-module.module').then((m) => m.DashboardModuleModule), },

  // { path: 'dang-nhap', component: LoginComponent },

];


@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
