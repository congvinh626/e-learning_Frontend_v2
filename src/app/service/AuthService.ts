import { HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject, map } from "rxjs";
import { CommonService } from "./CommonService";

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private httpService: CommonService, private router: Router) { }



  //   getAllAcc() {
  //     // let api = 'api/admin/ManageAccount';
  //     console.log('aaaaaaaaaaâ');

  //     // if(searchText){
  //     //   api = 'api/admin/ManageAccount?searchText='+ searchText;
  //     // }
  //     return this.httpService.getRequest("admin/ManageAccount");
  // }

  getAllAcc() {
    return this.httpService.getRequest("admin/ManageAccount");
  }

  CreateAcc(item: any){
    return this.httpService.postRequest("admin/ManageAccount", item);
  }

  EditAcc(item: any){
    return this.httpService.putRequest("admin/ManageAccount", item);
  }

  getDetAcc(id: any){
    return this.httpService.getRequest("admin/ManageAccount/"+ id);

  }


  GetAllRole(){
    return this.httpService.getRequest("admin/ManageRole?page=1&pageSize=100");
  }

  GetRoleForId(id: string){
    return this.httpService.getRequest("admin/ManageAccount/"+ id+"/Roles");
  }

  addRole(item: any){
    return this.httpService.postRequest('admin/ManageAccount/Roles', item);
  }

  removeRole(item: any){
    return this.httpService.deleteRequest('admin/ManageAccount/Roles?userId='+ item.userId + '&roleId=' + item.roleId);
  }


  GetAllClaim() {
    return this.httpService.getRequest('admin/ManageClaim');
  }

  GetClaimForAcc(id: string) {
    return this.httpService.getRequest('admin/ManageAccount/'+ id + '/Claims');
  }




  GetClaimForRole(id: string){
    return this.httpService.getRequest('admin/ManageRole/'+ id + '/Claims');
  }

  addClaimForRole(item: any){
    return this.httpService.putRequest('admin/ManageRole/Claims',item);
  }


  GetClaimForUser(id: string){
    return this.httpService.getRequest('admin/ManageAccount/'+ id + '/Claims');
  }

  addClaimForUser(item: any){
    return this.httpService.putRequest('admin/ManageAccount/Claims',item);
  }
}