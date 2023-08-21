import { Component, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { infoCourse } from 'src/app/Model/Course';
import { CourseService } from 'src/app/service/CourseService';
import { LoadingService } from 'src/app/service/loading.service';

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
    this.dialogRef.close();
  }

  Close(){
    this.dialogRef.close();
  }
}
