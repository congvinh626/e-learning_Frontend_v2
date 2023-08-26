import { HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject, map } from "rxjs";
import { CommonService } from "./CommonService";
import { createCourse } from "../Model/Course";

@Injectable({
    providedIn: 'root'
})

export class LessonService {
    constructor(private httpService: CommonService, private router: Router) { }


    getLesson(slug: string) {
        return this.httpService.getRequest(`course/lesson/${slug}`);
    }

    getDetail(slug: string) {
        return this.httpService.getRequest(`lesson/${slug}`);
    }



    createLesson(item: any) {
        return this.httpService.uploadRequest('lesson', item);
    }

    updateLesson(item: any) {
        return this.httpService.postRequest('lesson/update', item);
    }

    deleteLesson(slug: string) {
        return this.httpService.deleteRequest(`lesson/${slug}`);
    }


    getComment(item: any) {
        return this.httpService.getRequest('comment', item);
    }

    createComment(item: any) {
        return this.httpService.postRequest('comment', item);
    }

    getOffCourse(id: number) {
        return this.httpService.postRequest(`course/getOff/${id}`, '');
    }

}