import { Component, EventEmitter, Inject, Output, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NavigationStart, Router } from '@angular/router';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { AccountService } from 'src/app/service/AccountService';
import { ToastrcustomService } from 'src/app/service/toastrcustom';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';
import { UserLogin } from 'src/app/Model/User';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoadingService } from 'src/app/service/loading.service';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.scss']
})
export class VerifyComponent {

  @ViewChild("otpInput", { static: false }) otpInput: any;
  // @ViewChild('otpInput')
  // @Output() changePage = new EventEmitter();
  loading: boolean = false;
  test: any;
  otp: any = '';
  user: any;
  teswt: any;
  responseData: any;
  errWrong: boolean = false;
  notice: string = '';
  checkValidate: boolean = false;
  checkEndTime: boolean = false;
  infoAcc: any = [];
  config = {
    allowNumbersOnly: true,
    length: 6,
    isPasswordInput: false,
    disableAutoFocus: false,
    inputClass: 'each_input',
    inputStyles: { width: "40px", height: "40px"},
    demand: true
  };
  constructor(
    private router: Router,
    private AccountService: AccountService,
    private ToastrcustomService: ToastrcustomService,
    private LoadingService: LoadingService,
    ) { }


  ngOnInit() {
  }


  EnterSubmit(event: any) {
    if (event.key === "Enter") {
      this.onSubmit();
    }
  }

  onOtpChange(otp: any) {
    this.otp = otp;
  }

  handleEvent(event: any) {
    this.checkEndTime = false;

    if (event["action"] == "done") {
      this.checkEndTime = true;
    }
  }

  onSubmit() {
    this.checkValidate = false;

    if (!this.otp) {
      this.checkValidate = true;
      return;
    }

    this.LoadingService.setValue(true);

    this.AccountService.verifyCode(this.otp).subscribe(
      response => {
        // this.responseData = response;
        this.router.navigate([`/update-info`]);
        this.LoadingService.setValue(false);
      }
      ,(error) => {
        this.ToastrcustomService.showError(error.error.message);
        this.LoadingService.setValue(false);
    });
  }

  reSendOtp() {
    this.LoadingService.setValue(true);
    this.otpInput.setValue('');

    this.AccountService.sendOtp().subscribe(
      response => {
        this.checkEndTime = false;
        this.start();
        this.errWrong = false;
        this.LoadingService.setValue(false);

      }, (error) => {
        this.ToastrcustomService.showError(error.error.message);
        this.LoadingService.setValue(true);
      }
    );
    
  }

  start() {
    this.config = {
      allowNumbersOnly: true,
      length: 6,
      isPasswordInput: false,
      disableAutoFocus: false,
      inputClass: 'each_input',
      inputStyles: { width: "30px", height: "30px"},
      demand: false
    };

  }
}