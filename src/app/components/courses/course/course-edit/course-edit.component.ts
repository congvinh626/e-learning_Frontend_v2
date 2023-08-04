import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CourseService } from 'src/app/service/CourseService';
import { convertSlug } from 'src/app/service/convertSlug';
import { ToastrcustomService } from 'src/app/service/toastrcustom';

@Component({
  selector: 'app-course-edit',
  templateUrl: './course-edit.component.html',
  styleUrls: ['./course-edit.component.scss']
})
export class CourseEditComponent {
  @Input() id: number = 0;
  @Input() isCreate: boolean = true;

  isMenuVisible: boolean = false;
  formItem!: FormGroup;
  submited: boolean = false;
  formData = new FormData();

  menu: string = 'home';
  constructor( 
    private CourseService: CourseService, 
    private toastr: ToastrcustomService,
    private convertSlug: convertSlug
    ) {
    this.formFirst();
  }

  formFirst() {
    this.formItem = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
    });
  }

  get f() {
    return this.formItem.controls;
  }

  hendleTitle(value: string){
    // this.formItem.value.title = value;
    this.formItem.patchValue({
      title: value
    });
  }

  hendleDesc(value: string){
    this.formItem.patchValue({
      description: value
    });
    // this.formItem.value.description = value;
  }

  onSubmit() {
    this.submited = true;
    this.formData.append('title', this.formItem.value.title);
    this.formData.append('description', this.formItem.value.description);
    this.formData.append('slug', this.convertSlug.convertSlug(this.formItem.value.title));
    this.formData.append('code', (Math.random() + 1).toString(36).slice(2, 17));
    this.formData.append('status', '1');

    console.log(this.formData);
    console.log('this.formItem.valid', this.formItem.valid);
    
    if (this.formItem.valid) {
      if(this.isCreate){
        this.createItem();
      }else{
        this.editItem();

      }
    }
  }

  createItem(){
    this.CourseService.createCourse(this.formData).subscribe((data: any) => {
      if (data.statusCode == 200) {
        this.toastr.showSuccess('Đăng ký thành công !!!');
        this.submited = false;
        this.formFirst();
        
      } else {
        this.toastr.showSuccess(data.message);
      }

    });
  }

  editItem(){
    this.CourseService.updateCourse(this.formData).subscribe((data: any) => {
      if (data.statusCode == 200) {
        this.toastr.showSuccess('Đăng ký thành công !!!');
        this.submited = false;
        this.formFirst();

      } else {
        this.toastr.showSuccess(data.message);
      }

    });
  }

  Close(){

  }
}
