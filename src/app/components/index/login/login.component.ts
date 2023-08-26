import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NavigationStart, Router } from '@angular/router';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { AccountService } from 'src/app/service/AccountService';
import { ToastrcustomService } from 'src/app/service/toastrcustom';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';
import { UserLogin } from 'src/app/Model/User';
import { LoadingService } from 'src/app/service/loading.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  errors: any = [];
  userLogin: UserLogin = {
    username: '',
    password: '',
  }

  constructor(
    private AccountService: AccountService, 
    private ToastrcustomService: ToastrcustomService,
    private LoadingService: LoadingService,
    private router: Router,
    ) {
  }

  login() {
      this.LoadingService.setValue(true);
  
      this.AccountService.login(this.userLogin).subscribe(response => {
        localStorage.setItem('setUserInfo', JSON.stringify(this.userLogin));
        if (response.statusCode == 200) {
          this.ToastrcustomService.showSuccess("Đăng nhập thành công")
          this.router.navigate(['/elearning/khoa-hoc']);
        }
        else if (response.statusCode == "ACC013") {
          this.ToastrcustomService.showError(response.message);
          this.router.navigate(['/verify']);

        }
        else if (response.statusCode == "ACC017") {
          this.ToastrcustomService.showError(response.message);
          this.router.navigate([`/update-info`]);
        }
        else{
          this.ToastrcustomService.showError(response.message);
        }
        this.LoadingService.setValue(false);
      },(error) => {
        
          this.ToastrcustomService.showError(error.error.message);
          this.LoadingService.setValue(false);
      });

  }

  handleInputUsername(value: string){
    this.userLogin.username = value;
  }

  handleInputPassword(value: string){
    this.userLogin.password = value;
  }
}
