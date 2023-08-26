import { Component, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { infoCourse } from 'src/app/Model/Course';
import { CourseService } from 'src/app/service/CourseService';
import { LoadingService } from 'src/app/service/loading.service';
import { ToastrcustomService } from 'src/app/service/toastrcustom';

@Component({
  selector: 'app-course-info',
  templateUrl: './course-info.component.html',
  styleUrls: ['./course-info.component.scss']
})
export class CourseInfoComponent {
  @Input() slug: string = '';
  detailItem: any = [];
  constructor(
    private CourseService: CourseService,
    private LoadingService: LoadingService,
    public dialogRef: MatDialogRef<CourseInfoComponent>,
    private ToastrcustomService: ToastrcustomService
  ) { }

  ngOnInit(): void {
      this.getDetail();
  }

  getDetail() {
    this.CourseService.getDetail(this.slug).subscribe((response: infoCourse) => {
      this.detailItem = response;
    });
  }

  onSubmit(){
    this.LoadingService.setValue(true);
  
      this.CourseService.registerCourse(this.detailItem.id).subscribe(response => {
        if (response.statusCode == 200) {
          this.ToastrcustomService.showSuccess("Đăng nhập thành công")
        }
        else {
          this.ToastrcustomService.showError(response.message)
        }
        this.dialogRef.close('reload');
      },(error) => {
        
          this.ToastrcustomService.showError(error.error.message);
          this.LoadingService.setValue(false);
      });
  }

  Close(){
    this.dialogRef.close();
  }
}
