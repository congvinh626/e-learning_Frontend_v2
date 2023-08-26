import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CourseEditComponent } from '../course-edit/course-edit.component';
import { LoadingService } from 'src/app/service/loading.service';
import { CourseService } from 'src/app/service/CourseService';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { ToastrcustomService } from 'src/app/service/toastrcustom';
import { PopupConfirmComponent } from 'src/app/components/global/popup-confirm/popup-confirm.component';
import { CourseInfoComponent } from '../course-info/course-info.component';

@Component({
  selector: 'app-course-more',
  templateUrl: './course-more.component.html',
  styleUrls: ['./course-more.component.scss']
})
export class CourseMoreComponent {
  isCreate: boolean = true;
  timeout: any = '';
  Pagination: any = {
    currentPage: 0,
    lastPage: 0,
    pageSize: 0,
  }
  PageInfo = {
    searchText: '',
    courseCode: ''
  };
  listData: any = [];
  constructor(
    private router: Router,
    private dialog: MatDialog,
    private LoadingService: LoadingService,
    private CourseService: CourseService,
    private ToastrService: ToastrcustomService
  ) {
    this.Pagingdata();
  }


  Pagingdata() {
    this.LoadingService.setValue(true);
    this.CourseService.getCourseSuggest(this.PageInfo).subscribe(response => {
      this.listData = response;
      this.LoadingService.setValue(false);

    },
      (error) => {
        this.ToastrService.showError('Có lỗi xảy ra, xin tải lại !!!');
      });
  }

 
  handleSearch(textSearch: any) {
    this.PageInfo.searchText = textSearch;
    clearTimeout(this.timeout);
    var $this = this;
    this.timeout = setTimeout(function () {
      $this.Pagingdata();
    }, 500);
  } 

  handleCode(textSearch: any) {
    this.PageInfo.courseCode = textSearch;
    clearTimeout(this.timeout);
    var $this = this;
    this.timeout = setTimeout(function () {
      $this.Pagingdata();
    }, 500);
  } 

  openCourseInfo(slug:string) {
    const dialogRef = this.dialog.open(CourseInfoComponent, { width: '550px', disableClose: true });
    dialogRef.componentInstance.slug = slug;
    dialogRef.afterClosed().subscribe((result) => {
      if(result){
        this.Pagingdata();
      }
    });
  }
}
