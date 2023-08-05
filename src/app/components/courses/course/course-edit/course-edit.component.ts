import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { infoCourse } from 'src/app/Model/Course';
import { CourseService } from 'src/app/service/CourseService';
import { convertSlug } from 'src/app/service/convertSlug';
import { LoadingService } from 'src/app/service/loading.service';
import { ToastrcustomService } from 'src/app/service/toastrcustom';

@Component({
  selector: 'app-course-edit',
  templateUrl: './course-edit.component.html',
  styleUrls: ['./course-edit.component.scss']
})
export class CourseEditComponent {
  @Input() slug: string = '';
  @Input() isCreate: boolean = true;

  isMenuVisible: boolean = false;
  formItem!: FormGroup;
  submited: boolean = false;
  formData = new FormData();
  detailItem: any = [];
  menu: string = 'home';
  constructor(
    private CourseService: CourseService,
    private ToastrcustomService: ToastrcustomService,
    private convertSlug: convertSlug,
    private LoadingService: LoadingService,
    public dialogRef: MatDialogRef<CourseEditComponent>,

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
      description: new FormControl(''),
      file: new FormControl(''),
    });
  }

  getDetail() {
    this.CourseService.getDetail(this.slug).subscribe((response: infoCourse) => {
      this.detailItem = response;
      this.formItem.patchValue({
        title: response.title,
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

  hendleDesc(value: string) {
    this.formItem.patchValue({
      description: value
    });
    // this.formItem.value.description = value;
  }

  hendleFile(value: string) {
    this.formItem.patchValue({
      file: value
    });
  }

  onSubmit() {
    this.submited = true;
    this.formData.append('title', this.formItem.value.title);
    this.formData.append('description', this.formItem.value.description);
    this.formData.append('slug', this.convertSlug.convertSlug(this.formItem.value.title));
    this.formData.append('code', (Math.random() + 1).toString(36).slice(2, 17));
    this.formData.append('status', '1');
    if(this.formItem.value.file){
      this.formData.append('avatar', this.formItem.value.file);
    }

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
    this.CourseService.createCourse(this.formData).subscribe((data: any) => {
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
    this.formData.append('id', this.detailItem.id);
    console.log(this.formData);

    this.CourseService.updateCourse(this.formData).subscribe((data: any) => {
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
