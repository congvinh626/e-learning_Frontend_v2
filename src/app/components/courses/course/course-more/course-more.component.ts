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
  Pagination: any = {
    currentPage: 0,
    lastPage: 0,
    pageSize: 0,
  }
  PageInfo = {
    page: 1,
    pageSize: 10,
    searchText: '',
    status: 1
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
    this.CourseService.getCourse(this.PageInfo).subscribe(response => {

      this.listData = response.data;
      this.Pagination.currentPage = response.data.current_page;
      this.Pagination.lastPage = response.data.last_page;
      this.Pagination.pageSize = response.data.per_page;
      this.LoadingService.setValue(false);

    },
      (error) => {

        this.ToastrService.showError('Có lỗi xảy ra, xin tải lại !!!');
      });
  }

  statusCourse(e: any) {
    this.PageInfo.status = e.target.value;
    this.Pagingdata();
  }

  handleSearch(textSearch: any) {
    this.PageInfo.searchText = textSearch;
    this.Pagingdata();
  }

  openCourseInfo() {
    const dialogRef = this.dialog.open(CourseInfoComponent, { width: '550px', disableClose: true });
    dialogRef.componentInstance.slug = '123';
    dialogRef.afterClosed().subscribe((result) => {
      
    });
  }


}
