import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingService } from 'src/app/service/loading.service';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { ToastrcustomService } from 'src/app/service/toastrcustom';
import { PopupConfirmComponent } from 'src/app/components/global/popup-confirm/popup-confirm.component';
import { LessonEditComponent } from '../lesson-edit/lesson-edit.component';
import { LessonService } from 'src/app/service/LessonService';
import { LessonTypeComponent } from '../lesson-type/lesson-type.component';
import { LessonExamComponent } from '../lesson-exam/lesson-exam.component';
import { ExamInfoComponent } from '../../exam/exam-info/exam-info.component';

@Component({
  selector: 'app-lesson-index',
  templateUrl: './lesson-index.component.html',
  styleUrls: ['./lesson-index.component.scss']
})
export class LessonIndexComponent {
  isCreate: boolean = true;
  slug: any = '';
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
    private LessonService: LessonService,
    private ToastrService: ToastrcustomService,
    private route: ActivatedRoute
  ) {
    this.slug = this.route.snapshot.paramMap.get('slug');
    this.Pagingdata();

  }


  Pagingdata() {
    this.LoadingService.setValue(true);
    this.LessonService.getLesson(this.slug).subscribe(response => {

      this.listData = response;
     
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

  openModal() {
    const dialogRef = this.dialog.open(LessonTypeComponent, { width: '270px' });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
      
      if (result == 'course') {
        this.openModalCourse();
      }else if(result == 'exam'){
        this.openModalExam();
      }
    });
  }

  openModalCourse() {
    this.isCreate = false;
    const dialogRef = this.dialog.open(LessonEditComponent, { width: '550px', disableClose: true });
    dialogRef.componentInstance.isCreate = true;
    dialogRef.componentInstance.course_slug = this.slug;

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.Pagingdata();
      }
    });
  }

  openModalExam() {
    this.isCreate = false;
    const dialogRef = this.dialog.open(LessonExamComponent, { width: '900px', disableClose: true });
    dialogRef.componentInstance.isCreate = true;
    dialogRef.componentInstance.listLesson = this.listData.lessons;

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.Pagingdata();
      }
    });
  }

  editModalExam(item: any) {
    this.isCreate = false;
    const dialogRef = this.dialog.open(LessonExamComponent, { width: '900px', disableClose: true });
    dialogRef.componentInstance.isCreate = false;
    dialogRef.componentInstance.listExam = item;
    console.log('itemitem', item);
    
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.Pagingdata();
      }
    });
  }

  examInfoModal(slug: string) {
    this.isCreate = false;
    const dialogRef = this.dialog.open(ExamInfoComponent);
    dialogRef.componentInstance.slug = slug;
    
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.Pagingdata();
      }
    });
  }

  editModal(slug: string) {
    this.isCreate = false;
    const dialogRef = this.dialog.open(LessonEditComponent, { width: '550px', disableClose: true });
    dialogRef.componentInstance.isCreate = false;
    dialogRef.componentInstance.lesson_slug = slug;

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
    this.LessonService.deleteLesson(slug).subscribe(response => {
      this.Pagingdata();
      this.ToastrService.showSuccess('Xóa khóa học thành công!');
      this.LoadingService.setValue(false);
    },
      (error) => {
        this.ToastrService.showError('Có lỗi xảy ra, xin tải lại !!!');
        this.LoadingService.setValue(false);
      });
  }

}
