import { HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject, map } from "rxjs";
import { CommonService } from "./CommonService";

@Injectable({
  providedIn: 'root'
})

export class PartnerService {
  constructor(private httpService: CommonService, private router: Router) { }

 // Doctor

  getListDoctor(item: any) {
    return this.httpService.getRequest("Doctor?Page="+ item.page + '&PageSize='+ item.pageSize + '&IsActive='+ item.IsActive + '&Keyword='+ item.Keyword);
  }

  createDoctor(item: any) {
    return this.httpService.postRequest("Doctor/Create", item);
  }

  updateDoctor(item: any) {
    return this.httpService.putRequest("Doctor/Update", item);
  }

  deleteDoctor(id: number) {
    return this.httpService.deleteRequest("Doctor/Delete?id="+ id +"&isActive=true");
  }

  detDoctor(id: number) {
    return this.httpService.getRequest("Doctor/GetDetail?id="+ id);
  }
  
  changeActive(item: any){
    return this.httpService.putRequest("Doctor/Active?id="+ item.id +"&isActive=" + item.isActive,'');
  }

  /////////////////////////// customer //////////////////////////

  getListCustomer(item: any) {
    return this.httpService.getRequest("Customer?Page="+ item.page + '&PageSize='+ item.pageSize + '&IsActive='+ item.IsActive + '&Keyword='+ item.Keyword);
  }

  createCustomer(item: any) {
    return this.httpService.postRequest("Customer/Create", item);
  }

  updateCustomer(item: any) {
    return this.httpService.putRequest("Customer/Update", item);
  }

  deleteCustomer(id: number) {
    return this.httpService.deleteRequest("Customer/Delete?id="+ id +"&isActive=true");
  }

  detCustomer(id: number) {
    return this.httpService.getRequest("Customer/GetDetail?id="+ id);
  }
  
  changeActiveCustomer(item: any){
    return this.httpService.putRequest("Customer/Active?id="+ item.id +"&isActive=" + item.isActive,'');
  }

}