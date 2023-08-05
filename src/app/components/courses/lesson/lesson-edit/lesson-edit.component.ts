import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { FileItem, infoLesson } from 'src/app/Model/Lesson';
import { LessonService } from 'src/app/service/LessonService';
import { UploadFileService } from 'src/app/service/UploadFileService';
import { convertSlug } from 'src/app/service/convertSlug';
import { LoadingService } from 'src/app/service/loading.service';
import { ToastrcustomService } from 'src/app/service/toastrcustom';

@Component({
  selector: 'app-lesson-edit',
  templateUrl: './lesson-edit.component.html',
  styleUrls: ['./lesson-edit.component.scss']
})
export class LessonEditComponent {
  @Input() course_slug: string = '';
  @Input() isCreate: boolean = true;
  @Input() lesson_slug: string = '';

  isMenuVisible: boolean = false;
  formItem!: FormGroup;
  submited: boolean = false;
  formData = new FormData();
  menu: string = 'home';
  filesArray: any = [];
  detailItem: infoLesson = {
    id: 0,
    title: '',
    slug: '',
    description: '',
    link: '',
    course_id: 0,
    files: []
  };

  constructor(
    private ToastrcustomService: ToastrcustomService,
    private convertSlug: convertSlug,
    private LoadingService: LoadingService,
    public dialogRef: MatDialogRef<LessonEditComponent>,
    private LessonService: LessonService,
    private UploadFileService: UploadFileService,


  ) {
    this.formFirst();
  }

  ngOnInit(): void {
    if (!this.isCreate) {
      this.getDetail();
    }
  }


  formFirst() {
    this.formItem = new FormGroup({
      title: new FormControl('', Validators.required),
      link: new FormControl(''),
      description: new FormControl(''),
    });
  }

  getDetail() {
    this.LessonService.getDetail(this.lesson_slug).subscribe((response: infoLesson) => {
      this.detailItem = response;
      this.filesArray = response.files;
      console.log('this.detailItem', this.detailItem);

      this.formItem.patchValue({
        title: response.title,
        link: response.link,
        description: response.description
      });
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

  hendleLink(value: string) {
    this.formItem.patchValue({
      link: value
    });
  }

  hendleDesc(value: string) {
    this.formItem.patchValue({
      description: value
    });
    // this.formItem.value.description = value;
  }

  hendleFile(value: string) {
    this.filesArray = Array.from(value);
  }

  deleteFile(index: number, id: number) {
    console.log('index', index);
    console.log(id);

    if (this.isCreate) {
      this.filesArray.splice(index, 1);
    } else {
      this.deleteFIleUpload(index, id);
    }
  }

  deleteFIleUpload(index: number, id: number) {
    this.LoadingService.setValue(true);
    this.UploadFileService.deleteFile(id).subscribe((data: any) => {
      if (data.statusCode == 200) {
        this.filesArray.splice(index, 1);
        this.ToastrcustomService.showSuccess('Xóa file thành công !!!');
        this.LoadingService.setValue(false);

      } else {
        this.ToastrcustomService.showSuccess(data.message);
        this.LoadingService.setValue(false);

      }

    });
  }

  onSubmit() {
    this.submited = true;
    this.formData.append('title', this.formItem.value.title);
    this.formData.append('description', this.formItem.value.description);
    this.formData.append('link', this.formItem.value.link);
    this.formData.append('slug', this.convertSlug.convertSlug(this.formItem.value.title));


    if (this.formItem.valid) {
      if (this.isCreate) {
        this.createItem();
      } else {
        this.editItem();
      }
    }
  }

  createItem() {
    this.formData.append('course_slug', this.course_slug);
    if (this.filesArray) {
      for (let i = 0; i < this.filesArray.length; i++) {
        this.formData.append('file[]', this.filesArray[i]);
      }
    }

    this.LoadingService.setValue(true);
    this.LessonService.createLesson(this.formData).subscribe((data: any) => {
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

    this.LessonService.updateLesson(this.formData).subscribe((data: any) => {
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
