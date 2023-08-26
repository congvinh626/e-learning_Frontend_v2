import { HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject, map } from "rxjs";
import { CommonService } from "./CommonService";
import { createCourse } from "../Model/Course";

@Injectable({
  providedIn: 'root'
})

export class CommentService {
  constructor(private httpService: CommonService, private router: Router) { }


    getComment(slug: string) {
        return this.httpService.getRequest(`comment/${slug}`);
    }

    createComment(item: any) {
        return this.httpService.postRequest(`comment`, item);
    }

    updateComment(item: any) {
        return this.httpService.postRequest(`/comment/update`, item);
    }

    deleteComment(id: number) {
        return this.httpService.deleteRequest(`/comment/${id}`);
    }
}