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

@Component({
  selector: 'app-exam-index',
  templateUrl: './exam-index.component.html',
  styleUrls: ['./exam-index.component.scss']
})
export class ExamIndexComponent {
  @ViewChild('elementToScroll') elementToScroll!: ElementRef;
  // @ViewChild('cd', { static: false }) private countdown!: CountdownComponent;
  // @ViewChild("otpInput", { static: false }) otpInput: any;
  slug: any = '';
  listData: any = [];
  countQuestion: number[] = [];
  itemQuestion: string = '';
  timerConfig = { 'leftTime': 3610, 'notify': [3600] };
  config = {
    leftTime: 120,
    format: 'mm:ss',
    allowNumbersOnly: true,
    length: 6,
    isPasswordInput: false,
    disableAutoFocus: false,
    placeholder: ".",
    inputClass: 'each_input',
    inputStyles: { width: "34px", height: "34px", border: 'none', },
    demand: true
  };
  constructor(
    private router: Router,
    private dialog: MatDialog,
    private LoadingService: LoadingService,
    private ExamService: ExamService,
    private ToastrService: ToastrcustomService,
    private route: ActivatedRoute
  ) {
    this.slug = this.route.snapshot.paramMap.get('slug');
    this.Pagingdata();
    // this.countdown.begin();
  }


  Pagingdata() {
    this.LoadingService.setValue(true);
    this.ExamService.getQuestionExam(this.slug).subscribe(response => {

      this.listData = response;
      this.countQuestion = new Array<number>(response.question.length);
      
      this.LoadingService.setValue(false);

    },
      (error) => {

        this.ToastrService.showError('Có lỗi xảy ra, xin tải lại !!!');
      });
  }

  // scrollQuestion(el: HTMLElement) {
  //   el.scrollIntoView({behavior: "smooth"});
  // }

  //  scrollQuestion(day: any) {
  //   const item = this.listData.question.find((x: any) => x === day)
  //   console.log(item);
    
  //   item.scrollIntoView();
  // }

  scrollToElement(index: number) {
    const element = this.elementToScroll.nativeElement.querySelector('#item' + index);
    element.scrollIntoView({ behavior: 'smooth' });
  }

 
  handleEvent(event: any) {
    console.log(event.target.value);

    // this.checkEndTime = false;

    // if (event["action"] == "done") {
    //   this.checkEndTime = true;
    // }
  }
}
