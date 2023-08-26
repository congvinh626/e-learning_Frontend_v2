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
import { AccountService } from 'src/app/service/AccountService';

@Component({
  selector: 'app-course-index',
  templateUrl: './course-index.component.html',
  styleUrls: ['./course-index.component.scss']
})
export class CourseIndexComponent {
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
    status: 1,
    confirm: 'true'
  };
  listData: any = [];
  permission: any = [];
  constructor(
    private router: Router,
    private dialog: MatDialog,
    private LoadingService: LoadingService,
    private CourseService: CourseService,
    private AccountService: AccountService,
    private ToastrService: ToastrcustomService
  ) {
    this.Pagingdata();
    this.permission = this.AccountService.getPermissionForUser();
    
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

  confirmCourse(e: any) {
    this.PageInfo.confirm = e.target.value;
    this.Pagingdata();
  }

  handleSearch(textSearch: any) {
    this.PageInfo.searchText = textSearch;
    this.Pagingdata();
  }

  openModal() {
    const dialogRef = this.dialog.open(CourseEditComponent, { width: '550px', disableClose: true });
    dialogRef.componentInstance.isCreate = true;
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.Pagingdata();
      }
    });
  }

  editModal(slug: string) {
    this.isCreate = false;
    const dialogRef = this.dialog.open(CourseEditComponent, { width: '550px', disableClose: true });
    dialogRef.componentInstance.isCreate = false;
    dialogRef.componentInstance.slug = slug;

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.Pagingdata();
      }
    });
  }

  confirmDelete(slug: string, title: string) {
    const dialogRef = this.dialog.open(PopupConfirmComponent);
    dialogRef.componentInstance.title = "Xóa khóa học";
    dialogRef.componentInstance.message = `Bạn có chắc chắn muốn xóa khóa học '${title}' không?`;

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.deleteItem(slug);
      }
    });
  }

  deleteItem(slug: string) {

    this.LoadingService.setValue(true);
    this.CourseService.deleteCourse(slug).subscribe(response => {
      this.Pagingdata();
      this.ToastrService.showSuccess('Xóa khóa học thành công!');
      this.LoadingService.setValue(false);
    },
      (error) => {
        this.ToastrService.showError('Có lỗi xảy ra, xin tải lại !!!');
        this.LoadingService.setValue(false);
      });
  }

  changeStatus(slug: string) {
    this.LoadingService.setValue(true);
    this.CourseService.changeStatusCourse(slug).subscribe(response => {
      this.Pagingdata();
      this.ToastrService.showSuccess('Thay đổi trạng thái khóa học thành công!')
      this.LoadingService.setValue(false);

    },
      (error) => {

        this.ToastrService.showError('Có lỗi xảy ra, xin tải lại !!!');
        this.LoadingService.setValue(false);

      });
  }
}
