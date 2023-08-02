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
    return this.httpService.postRequest("Account/Login", data);
  }

  sendEmailOrPhone(data: any) {
    return this.httpService.postRequest("Account/ForgotPassword", data);
  }

  sendOtp(data: any) {
    return this.httpService.postRequest("Account/SendOtp", data);
  }


  updatePassword(data: any) {
    return this.httpService.postRequest("Account/SetPassword", data);
  }


  verifyCode(data: any) {
    return this.httpService.postRequest("Account/VerifyOtp", data);

  }


  register(data: any) {
    return this.httpService.postRequest("Account/Register", data);
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

  getTimeEndToken() {
    const UserInfo = Number(localStorage.getItem('dateEndToken') || 'null');
    return UserInfo;
  }

  refreshToken(data: any) {
    return this.httpService.postRequest("Account/RefreshToken", data);
  }

 
  logOut() {
    localStorage.removeItem('UserName');
    localStorage.removeItem('UserInfo');
    localStorage.removeItem('dateEndToken');
    // this.router.navigate(['/Home']);
  }
  // Paging(data: any) {
  //     return this.httpService.postRequest("Vehicle/get-list-vehicle",data)
  // }

  // Insert(data: any)
  // {
  //     return this.httpService.postRequest("Vehicle/add-vehicle", data);
  // }

  // GetDetail(id: string) {
  //     return this.httpService.getRequest("Vehicle/get-vehicle-by-id/" + id);
  // }   

  // Update(data : any) {
  //     return this.httpService.putRequest("Vehicle/update-vehicle",data)
  // }

}