import { HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject, map } from "rxjs";
import { CommonService } from "./CommonService";
import { createCourse } from "../Model/Course";

@Injectable({
    providedIn: 'root'
})

export class NotificationService {
    constructor(private httpService: CommonService, private router: Router) { }


    getNotification() {
        return this.httpService.getRequest(`notification`);
    }

}