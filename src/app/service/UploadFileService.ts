import { HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject, map } from "rxjs";
import { CommonService } from "./CommonService";
import { createCourse } from "../Model/Course";

@Injectable({
    providedIn: 'root'
})

export class UploadFileService {
    constructor(private httpService: CommonService, private router: Router) { }


    deleteFile(id: number) {
        return this.httpService.deleteRequest(`fileUpload/${id}`);
    }



}