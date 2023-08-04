import { HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject, map } from "rxjs";
import { CommonService } from "./CommonService";

@Injectable({
  providedIn: 'root'
})

export class CourseService {
  constructor(private httpService: CommonService, private router: Router) { }


getCourse(item: any) {
    return this.httpService.getRequest(`course?page=${item.page}&pageSize=${item.pageSize}&searchText=${item.searchText}&status=${item.status}`);
}

getDetail(slug: string) {
    return this.httpService.getRequest(`course/${slug}`);
}



createCourse(item: any) {
    return this.httpService.uploadRequest('course', item);
}

updateCourse(item: any) {
    return this.httpService.postRequest('course/update', item);
}

deleteCourse(slug: string) {
    return this.httpService.deleteRequest(`course/${slug}`);
}

changeStatusCourse(slug: string) {
    return this.httpService.postRequest(`course/changeStatus/${slug}`, '');
}

}