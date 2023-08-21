import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CourseService } from 'src/app/service/CourseService';
import { LoadingService } from 'src/app/service/loading.service';

@Component({
  selector: 'app-course-new-member',
  templateUrl: './course-new-member.component.html',
  styleUrls: ['./course-new-member.component.scss']
})
export class CourseNewMemberComponent {
  detailItem: any = {};
  constructor(
    private LoadingService: LoadingService,
    private CourseService: CourseService,
    public dialogRef: MatDialogRef<CourseNewMemberComponent>,
    
  ) {}

  ngOnInit(): void {
    this.getDetail();
  }

  getDetail() {
    
    this.LoadingService.setValue(true);
    this.CourseService.getDetail('this.slug').subscribe((response: any) => {
      this.detailItem = response;
      this.LoadingService.setValue(false);
      console.log(this.detailItem);
      
    });
  }


  onSubmit(){
    this.dialogRef.close();

  }

  Close(){
    this.dialogRef.close();
  }
}
