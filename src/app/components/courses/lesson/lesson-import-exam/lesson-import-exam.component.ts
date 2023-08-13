import { Component, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ExamService } from 'src/app/service/ExamService';
import { LoadingService } from 'src/app/service/loading.service';

@Component({
  selector: 'app-lesson-import-exam',
  templateUrl: './lesson-import-exam.component.html',
  styleUrls: ['./lesson-import-exam.component.scss']
})
export class LessonImportExamComponent {
  @Input() course_slug: string = '';
  @Input() isCreate: boolean = true;
  @Input() lesson_slug: string = '';
  @Input() listLesson: any = '';
  
  title: string = 'Tạo mới';
  detailItem: any = [];
  listQuestion: any = [];
  listform: any = ['1'];

  constructor(
    private LoadingService: LoadingService,
    private ExamService: ExamService,
    public dialogRef: MatDialogRef<LessonImportExamComponent>,


  ) {
  }

  ngOnInit(): void {
    if (!this.isCreate) {
      this.getDetail();
      this.title = "Chỉnh sửa"
    }
  }

  insertForm(){
    
    this.listform.push('1');
    console.log('this.listform2222222', this.listform);
    
  }

  hendleFormQuestion(value: any, index: number){
    this.listQuestion[index] = value;

  }
  
  getDetail() {
    this.LoadingService.setValue(true);
    this.ExamService.getDetail(this.lesson_slug).subscribe((response: any) => {
      this.detailItem = response;
      // this.filesArray = response.files;

      this.LoadingService.setValue(false);

    });
  }

  onSubmit() {
    // console.log('valuevaluevalue', this.listQuestion);
    this.dialogRef.close(this.listQuestion);

  }

 
  Close() {
    this.dialogRef.close();
  }
}
