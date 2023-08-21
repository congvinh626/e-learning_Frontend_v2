import { HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject, map } from "rxjs";
import { CommonService } from "./CommonService";
import { createCourse } from "../Model/Course";

@Injectable({
    providedIn: 'root'
})

export class ExamService {
    constructor(private httpService: CommonService, private router: Router) { }


    getExam(slug: string) {
        return this.httpService.getRequest(`course/exam/${slug}`);
    }

    getDetail(slug: string) {
        return this.httpService.getRequest(`exam/${slug}`);
    }

    getHistory(id: string) {
        return this.httpService.getRequest(`historyExam/${id}`);
    }

    getQuestionExam(slug: string) {
        return this.httpService.getRequest(`getExam/${slug}`);
    }

    createExam(item: any) {
        return this.httpService.uploadRequest('exam', item);
    }

    updateExam(item: any) {
        return this.httpService.postRequest('exam/update', item);
    }

    uploadExam(item: any) {
        return this.httpService.putRequest('uploadExam', item);
    }

    deleteExam(slug: string) {
        return this.httpService.deleteRequest(`exam/${slug}`);
    }

}