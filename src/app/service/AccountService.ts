import { HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject, map } from "rxjs";
import { CommonService } from "./CommonService";

@Injectable({
  providedIn: 'root'
})

export class AccountService {
  constructor(private httpService: CommonService, private router: Router) { }

 

  login(data: any) {
    return this.httpService.postRequest("login", data).pipe(map((data: any) => {
      if (data) {
        localStorage.setItem('UserInfo', JSON.stringify(data.data));
      }
      return data;
    }))
  }

  sendEmailOrPhone(data: any) {
    return this.httpService.postRequest("Account/ForgotPassword", data);
  }

  sendOtp() {
    return this.httpService.postRequest("sendOtp", '');
  }

  updatePassword(data: any) {
    return this.httpService.postRequest("Account/SetPassword", data);
  }

  verifyCode(otp: any) {
    return this.httpService.postRequest(`verifyOtp/${otp}`, '');
  }

  register(data: any) {
    return this.httpService.postRequest("register", data);
  }

  SaveTokens(tokendata: any) {
    localStorage.removeItem('UserInfo');
    localStorage.removeItem('dateEndToken');
    localStorage.setItem('UserInfo', JSON.stringify(tokendata));

    const d = new Date();
    let endDate = d.setTime(d.getTime() + 1000 * 60 * 30);
    localStorage.setItem('dateEndToken', String(endDate));

  }

  getUserInfo() {
    const UserInfo = JSON.parse(localStorage.getItem('UserInfo') || 'null');
    return UserInfo;
  }

  getPermissionForUser() {
    const Permission = JSON.parse(localStorage.getItem('UserInfo') || 'null');
    return Permission.permission;
  }

  getTimeEndToken() {
    const UserInfo = Number(localStorage.getItem('dateEndToken') || 'null');
    return UserInfo;
  }

  refreshToken(data: any) {
    return this.httpService.postRequest("Account/RefreshToken", data);
  }

 
  logOut() {
    localStorage.removeItem('UserName');
    localStorage.removeItem('setUserInfo');
    localStorage.removeItem('UserInfo');
    localStorage.removeItem('dateEndToken');
    // this.router.navigate(['/Home']);
  }
  
  
  infoAcc() {
      return this.httpService.getRequest("user");
  }

  updateInfo(item: any){
    return this.httpService.postRequest("user/update", item);
  }

  updateAvatar(item: any){
    return this.httpService.postRequest("upload/avatar", item);
  }

}