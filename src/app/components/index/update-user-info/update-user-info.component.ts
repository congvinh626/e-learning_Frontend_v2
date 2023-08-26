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
  selector: 'app-update-user-info',
  templateUrl: './update-user-info.component.html',
  styleUrls: ['./update-user-info.component.scss']
})
export class UpdateUserInfoComponent {
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
      name: new FormControl('', Validators.required),
      phone: new FormControl(''),
      dob: new FormControl(''),
      adress: new FormControl('')
    });
  }

  get f() {
    return this.formItem.controls;
  }

  onSubmit() {
    this.submited = true;
    
    this.LoadingService.setValue(true);

    this.AccountService.updateInfo(this.formItem.value).subscribe(response => {
      if (response.statusCode == 200) {
        this.ToastrcustomService.showSuccess("Cập nhật thành công!");
        this.router.navigate(['/elearning/khoa-hoc']);
        
      }
      else {
        this.errors = response.message;
        this.ToastrcustomService.showError(response.message)
      }
      this.LoadingService.setValue(false);
    },(error) => {
        console.log('error', error);
        
        this.ToastrcustomService.showError(error.error.message);
        this.LoadingService.setValue(false);
    });
  }

  handleInputName(value: string){
    this.formItem.patchValue({
      name: value
    });
  }

  handleInputPhone(value: string){
    this.formItem.patchValue({
      phone: value
    });
  }

  handleInputAdress(value: string){
    this.formItem.patchValue({
      adress: value
    });  
  }


  searchToDate(event: any) {
    this.formItem.patchValue({
      dob: event.target.value,
    });
  }
}
