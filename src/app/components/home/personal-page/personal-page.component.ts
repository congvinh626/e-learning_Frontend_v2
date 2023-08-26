import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AccountService } from 'src/app/service/AccountService';
import { LoadingService } from 'src/app/service/loading.service';
import { ToastrcustomService } from 'src/app/service/toastrcustom';

@Component({
  selector: 'app-personal-page',
  templateUrl: './personal-page.component.html',
  styleUrls: ['./personal-page.component.scss']
})
export class PersonalPageComponent {
  infoAcc: any = {};
  checkAvatar: string = '';
  formItem!: FormGroup;
  submited: boolean = false;

  constructor(
   private AccountService: AccountService,
   private ToastrcustomService: ToastrcustomService,
   private LoadingService: LoadingService
  ) {
    this.formFirst();
    this.getInfo();
  }

  formFirst() {
    this.formItem = new FormGroup({
      id: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      phone: new FormControl(''),
      dob: new FormControl(''),
      adress: new FormControl('')
    });
  }

  getInfo(){
    this.AccountService.infoAcc().subscribe(response => {
      this.infoAcc = response;
      const parts = response.avatar.split("/"); // Tách chuỗi thành các phần tử dựa trên dấu "/"
      this.checkAvatar = parts.pop();
      console.log('response', response);
      
      this.formItem.patchValue({
        id: response.id,
        name: response.name,
        phone: response.phone,
        dob: response.dob,
        adress: response.adress
      });
    },(error) => {
        this.ToastrcustomService.showError(error.error.message);
    });
  }

  get f() {
    return this.formItem.controls;
  }

  hendleName(value: string) {
    this.formItem.patchValue({
      name: value
    });
  }

  hendlePhone(value: string) {
    this.formItem.patchValue({
      phone: value
    });
  }

  hendleDob(value: string) {
    console.log('value', value);
    
    this.formItem.patchValue({
      dob: value
    });
  }

  hendleAdress(value: string) {
    this.formItem.patchValue({
      adress: value
    });
  }

  onSubmit(){
    this.submited = true;
    if (this.formItem.valid) {
      this.LoadingService.setValue(true);
      this.AccountService.updateInfo(this.formItem.value).subscribe((data: any) => {
        if (data.statusCode == 200) {
          this.ToastrcustomService.showSuccess('Cập nhật thành công !!!');
        } else {
          this.ToastrcustomService.showSuccess(data.message);
        }
        this.LoadingService.setValue(false);
      });
    }
  }

  uploadAvatar(e: any){
    var formData = new FormData();
    formData.append('avatar', e.target.files[0]);

    this.AccountService.updateAvatar(formData).subscribe((data: any) => {
      if (data.statusCode == 200) {
        this.getInfo();
        this.ToastrcustomService.showSuccess('Cập nhật thành công !!!');
      } else {
        this.ToastrcustomService.showSuccess(data.message);
      }
      this.LoadingService.setValue(false);
    });
  }

}
