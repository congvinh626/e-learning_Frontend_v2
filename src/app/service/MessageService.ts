import { HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject, map } from "rxjs";
import { CommonService } from "./CommonService";
import { createCourse } from "../Model/Course";

@Injectable({
  providedIn: 'root'
})

export class MessageService {
  constructor(private httpService: CommonService, private router: Router) { }


getMessageRoom() {
    return this.httpService.getRequest(`message`);
}

createMessage(item: any) {
    return this.httpService.postRequest(`message`, item);
}
// createMessage(item: any) {
//   return this.httpService.postRequest(`channels/message`, item);
// }

createMessage2(item: any) {
  return this.httpService.postRequest(`message/test`, item);
}
}