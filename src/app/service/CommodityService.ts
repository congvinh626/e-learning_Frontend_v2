import { Injectable } from "@angular/core";
import { map } from "rxjs";
import { CommonService } from "./CommonService";




@Injectable({
    providedIn: 'root'
})


export class CommodityService{
    constructor(private httpService: CommonService) {}


    Paging(data: any) {
        return this.httpService.postRequest("Item/get-list-item",data);
    }

    GetDetail(id: any) {
        return this.httpService.getRequest("Item/get-item/" + id);
    }

    Update(data: any) {
        return this.httpService.putRequest("Item/update-item", data);
    }
    
}