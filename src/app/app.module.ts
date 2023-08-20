import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientInterceptor } from './service/http.client.interceptor';
import { MatMenuModule } from '@angular/material/menu';
import { LoginComponent } from './components/index/login/login.component';
import { ForgotPasswordComponent } from './components/index/forgot-password/forgot-password.component';
import { RegisterComponent } from './components/index/register/register.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LandingPageComponent } from './components/index/landing-page/landing-page.component';
import {TextFieldModule} from '@angular/cdk/text-field';
import { AutocomplateComponent } from './components/global/autocomplate/autocomplate.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ShareModule } from './Module/share-module.module';
import { SafePipe } from './safe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgotPasswordComponent,
    RegisterComponent,
    LandingPageComponent,

    
   

  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    MatDialogModule,
    MatMenuModule,
    MatAutocompleteModule,
    TextFieldModule,
    MatFormFieldModule,
    ShareModule,
    ToastrModule.forRoot()
  ],
  providers: [
    // AsyncPipe,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpClientInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
