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
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  errors: any = [];
  rePassword: string = '';
  formItem!: FormGroup;
  submited: boolean = false;
  listType = [{
    id: 1,
    name: 'Giáo viên'
  },
  {
    id: 2,
    name: 'Học viên'
  }]
  constructor(
    private AccountService: AccountService, 
    private ToastrcustomService: ToastrcustomService,
    private LoadingService: LoadingService,
    private router: Router,
    ) {
      this.formFirst();
  }

  formFirst() {
    this.formItem = new FormGroup({
      username: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      type: new FormControl('', Validators.required)
    });
  }

  get f() {
    return this.formItem.controls;
  }

  onSubmit() {
    this.submited = true;
    if(this.rePassword == '' || this.rePassword != this.formItem.value.password){
      return ;
    }
    this.LoadingService.setValue(true);

    this.AccountService.register(this.formItem.value).subscribe(response => {
      if (response.statusCode == 200) {
        this.ToastrcustomService.showSuccess("Đăng ký thành công!");
        localStorage.setItem('UserInfo', JSON.stringify(response.data));
        this.router.navigate([`/verify`]);

      }
      else {
        this.errors = response.message;
        this.ToastrcustomService.showError(response.message)
      }
      this.LoadingService.setValue(false);
    },(error) => {
        console.log('error', error);
        
        // this.ToastrcustomService.showError(error.error.message);
        this.LoadingService.setValue(false);
    });
  }

  handleInputUsername(value: string){
    this.formItem.patchValue({
      username: value
    });
  }

  handleInputPassword(value: string){
    this.formItem.patchValue({
      password: value
    });
  }

  handleInputRePassword(value: string){
    this.rePassword = value;
  }

  handleInputType(value: any){
    this.formItem.patchValue({
      type: value.id
    });  }

  handleInputEmail(value: string){
    this.formItem.patchValue({
      email: value
    });  }
}
