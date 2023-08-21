import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingService } from 'src/app/service/loading.service';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { ToastrcustomService } from 'src/app/service/toastrcustom';
import { PopupConfirmComponent } from 'src/app/components/global/popup-confirm/popup-confirm.component';
import { LessonService } from 'src/app/service/LessonService';
import { ExamInfoComponent } from '../../exam/exam-info/exam-info.component';
import { ExamService } from 'src/app/service/ExamService';
import { CountdownComponent } from 'ngx-countdown';
import { ExamResultComponent } from '../exam-result/exam-result.component';

@Component({
  selector: 'app-exam-index',
  templateUrl: './exam-index.component.html',
  styleUrls: ['./exam-index.component.scss']
})
export class ExamIndexComponent {
  @ViewChild('elementToScroll') elementToScroll!: ElementRef;

  slug: any = '';
  lesson_slug: any = '';
  listData: any = [];
  countQuestion: number[] = [];
  itemQuestion: string = '';
  config: any = {
    leftTime: 0, 
  }
  dataExam: any = [];
  countDone: number = 0;
  listAnswer: any = {
    exam_slug: '',
    listItem: this.dataExam
  };
  constructor(
    private router: Router,
    private dialog: MatDialog,
    private LoadingService: LoadingService,
    private ExamService: ExamService,
    private ToastrService: ToastrcustomService,
    private route: ActivatedRoute
  ) {

    this.lesson_slug = this.route.snapshot.paramMap.get('lesson_slug');
    this.slug = this.route.snapshot.paramMap.get('slug');
    this.listAnswer.exam_slug = this.slug;
    this.Pagingdata();
  }


  Pagingdata() {
    this.LoadingService.setValue(true);
    this.ExamService.getQuestionExam(this.slug).subscribe(response => {

      const timeInSeconds = response.time * 60;
      this.config = { ...this.config, leftTime: timeInSeconds };
      this.listData = response;
      this.getDataExam();
      this.LoadingService.setValue(false);
    },
      (error) => {
        this.ToastrService.showError('Có lỗi xảy ra, xin tải lại !!!');
      });
  }

  getDataExam(){
    const listQuestion = this.listData.question;
    for (let i = 0; i < listQuestion.length; i++) {
      this.dataExam.push({
        'question_id': listQuestion[i].id,
        'answer_id': null
      })
    }
  }

  handleAnswer(answer_id: number, question_id: number, index: number){
    console.log('this.question_id', question_id, index);
    let item = {
      'question_id': question_id,
      'answer_id': answer_id
    }

    this.dataExam[index] = item;
  }

  scrollToElement(index: number) {
    const element = this.elementToScroll.nativeElement.querySelector('#item' + index);
    element.scrollIntoView({ behavior: 'smooth' });
  }

  handleEvent(event:any){
      if(event.action == "done" ){
        this.countDone ++;
        if(this.countDone == 2){
          this.uploadExam();
          this.countDone = 0;
        }
      }
    console.log('event', event);
    
  }

  onSubmit(){
    const dialogRef = this.dialog.open(PopupConfirmComponent);
    dialogRef.componentInstance.title = "Xác nhận nạp bài";
    dialogRef.componentInstance.message = `Bạn có chắc chắn muốn nạp bài không?`;

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.uploadExam();
      }
    });
  }

  uploadExam(){
    this.LoadingService.setValue(true);
    this.ExamService.uploadExam(this.listAnswer).subscribe((response: any) => {
      if (response.statusCode == 200) {
        this.openExamResult(response.data);
      }
      this.LoadingService.setValue(false);
    });
  }

  openExamResult(result: any){
    const dialogRef = this.dialog.open(ExamResultComponent, { disableClose: true });
    dialogRef.componentInstance.result = result;

    dialogRef.afterClosed().subscribe((response) => {
      if (response) {
        console.log('result', result);
        console.log('result.history', result.history);
        
        this.router.navigate([`elearning/lich-su/${result.history}`]);
      }else{
        this.router.navigate([`elearning/khoa-hoc/${this.lesson_slug}`]);
      }
    });
  }
}
