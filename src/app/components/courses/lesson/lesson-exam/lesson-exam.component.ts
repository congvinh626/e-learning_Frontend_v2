import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FileItem, infoLesson } from 'src/app/Model/Lesson';
import { ExamService } from 'src/app/service/ExamService';
import { UploadFileService } from 'src/app/service/UploadFileService';
import { convertSlug } from 'src/app/service/convertSlug';
import { LoadingService } from 'src/app/service/loading.service';
import { ToastrcustomService } from 'src/app/service/toastrcustom';
import { LessonImportExamComponent } from '../lesson-import-exam/lesson-import-exam.component';

@Component({
  selector: 'app-lesson-exam',
  templateUrl: './lesson-exam.component.html',
  styleUrls: ['./lesson-exam.component.scss']
})
export class LessonExamComponent {
  @Input() course_slug: string = '';
  @Input() isCreate: boolean = true;
  @Input() lesson_slug: string = '';
  @Input() listLesson: any = '';
  @Input() listExam: any = '';
  
  isMenuVisible: boolean = false;
  formItem!: FormGroup;
  submited: boolean = false;
  formData = new FormData();
  title: string = 'Thêm mới';
  typeQuestion2: any = [];
  typeQuestion: any = '';
  fileExam: any = {};
  detailItem: infoLesson = {
    id: 0,
    title: '',
    slug: '',
    description: '',
    link: '',
    course_id: 0,
    files: []
  };
  listClassify: any = [];
  constructor(
    private ToastrcustomService: ToastrcustomService,
    private convertSlug: convertSlug,
    private LoadingService: LoadingService,
    public dialogRef: MatDialogRef<LessonExamComponent>,
    private ExamService: ExamService,
    private UploadFileService: UploadFileService,
    private dialog: MatDialog,


  ) {
    this.formFirst();
  }

  ngOnInit(): void {
    if (!this.isCreate) {
      this.getDetail(this.listExam[0].slug);
      this.title = "Chỉnh sửa"
    }
  }


  formFirst() {
    this.formItem = new FormGroup({
      title: new FormControl('', Validators.required),
      time: new FormControl('', Validators.required),
      numberOfQuestion: new FormControl(''),
      classify: new FormControl(''),
      showResult: new FormControl(false),
      lesson_id: new FormControl(''),
      startTime: new FormControl(''),
      endTime: new FormControl(''),
      importQuestion: new FormControl('')
    });
  }

  getDetail(slug: string) {
    
    this.LoadingService.setValue(true);
    this.ExamService.getDetail(slug).subscribe((response: any) => {
      this.detailItem = response;
      // this.filesArray = response.files;

      this.formItem.patchValue({
        title: response.title,
        numberOfQuestion: response.numberOfQuestion,
        time: response.time,
        classify: response.classify,
        showResult: response.showResult,
        lesson_id: response.lesson_id,
        startTime: response.startTime,
        endTime: response.endTime
      });
      this.LoadingService.setValue(false);

    });
  }

  get f() {
    return this.formItem.controls;
  }

  hendleTitle(value: string) {
    this.formItem.patchValue({
      title: value
    });
  }

  hendleNumberOfQuestion(value: string) {
    this.formItem.patchValue({
      numberOfQuestion: value
    });
  }

  hendleStartTime(value: string) {
    this.formItem.patchValue({
      startTime: value
    });
    // this.formItem.value.description = value;
  }

  hendleEndTime(value: string) {
    this.formItem.patchValue({
      endTime: value
    });
    // this.formItem.value.description = value;
  }

  hendleTime(value: string) {
    this.formItem.patchValue({
      time: value
    });
    // this.formItem.value.description = value;
  }

  hendleCourse(value: any) {
    this.formItem.patchValue({
      lesson_id: value.id
    })
  }

  hendleExam(value: any) {
    
    // this.formItem.patchValue({
    //   lesson_id: value.id
    // })
  }

  hendleFile(value: string) {
    this.fileExam = value;
  }

  openImportExam(){
    const dialogRef = this.dialog.open(LessonImportExamComponent, { width: '900px', disableClose: true });
    dialogRef.componentInstance.isCreate = true;

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        console.log('resultresult', result);
        
        this.formItem.patchValue({
          importQuestion: JSON.stringify(result)
        })
      }
    });
  }

  insertForm(){
    this.typeQuestion2.push(this.typeQuestion);
  }

  addToTest(newValue: any){
    this.listClassify[newValue.index] = Number(newValue.value);
    this.formItem.patchValue({
      classify: this.listClassify
    })
  }



  onSubmit() {
    this.submited = true;
    console.log( this.formItem.value.lesson_id);
    
    this.formData.append('title', this.formItem.value.title);
    this.formData.append('time', this.formItem.value.time);
    this.formData.append('numberOfQuestion', this.formItem.value.numberOfQuestion);
    this.formData.append('classify', this.formItem.value.classify);
    this.formData.append('showResult', this.formItem.value.showResult ? '1' : '0');
    this.formData.append('lesson_id', this.formItem.value.lesson_id.toString());
    this.formData.append('slug', this.convertSlug.convertSlug(this.formItem.value.title));
    this.formData.append('startTime', this.formItem.value.startTime);
    this.formData.append('endTime', this.formItem.value.endTime);

    this.formData.append('file', this.fileExam);
    this.formData.append('importQuestion', this.formItem.value.importQuestion);
    console.log( this.formData);

    if (this.formItem.valid) {
      if (this.isCreate) {
        
        this.createItem();
      } else {
        this.editItem();
      }
    }
  }

  createItem() {

    this.LoadingService.setValue(true);
    this.ExamService.createExam(this.formData).subscribe((data: any) => {
      if (data.statusCode == 200) {
        this.ToastrcustomService.showSuccess('Đăng ký thành công !!!');
        this.dialogRef.close('reload');

      } else {
        this.ToastrcustomService.showSuccess(data.message);
        this.LoadingService.setValue(false);

      }

    });
  }

  editItem() {
    this.formData.append('id', this.detailItem.id.toString());
    // this.formData.append('id', this.detailItem.id);
    console.log(this.formData);

    this.ExamService.updateExam(this.formData).subscribe((data: any) => {
      if (data.statusCode == 200) {
        this.ToastrcustomService.showSuccess('Đăng ký thành công !!!');
        this.dialogRef.close('reload');

      } else {
        this.ToastrcustomService.showSuccess(data.message);
        this.LoadingService.setValue(false);
      }

    });
  }

  Close() {
    this.dialogRef.close();
  }
}
