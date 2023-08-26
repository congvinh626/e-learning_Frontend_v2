import { Component, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CourseService } from 'src/app/service/CourseService';
import { LoadingService } from 'src/app/service/loading.service';
import { ToastrcustomService } from 'src/app/service/toastrcustom';

@Component({
  selector: 'app-course-new-member',
  templateUrl: './course-new-member.component.html',
  styleUrls: ['./course-new-member.component.scss']
})
export class CourseNewMemberComponent {
  @Input() course_id: number = 0;
  listData: any = [];
  confirmData: any = {
    "course_id": 0,
    "user_id": 0
  }
  constructor(
    private LoadingService: LoadingService,
    private CourseService: CourseService,
    public dialogRef: MatDialogRef<CourseNewMemberComponent>,
    private ToastrcustomService: ToastrcustomService
  ) {}

  ngOnInit(): void {
    this.getNewMember();
    this.confirmData.course_id = this.course_id;
  }

  getNewMember() {
    
    this.LoadingService.setValue(true);
    this.CourseService.waitConfirmMember(this.course_id).subscribe((response: any) => {
      this.listData = response.data;
      this.LoadingService.setValue(false);
    });
  }


  addMember(id: number){
    this.confirmData.user_id = id;

    this.LoadingService.setValue(true);
    this.CourseService.addMember(this.confirmData).subscribe((response: any) => {
      if (response.statusCode == 200) {
        this.ToastrcustomService.showSuccess(response.message);
        this.getNewMember();
        this.LoadingService.setValue(false);

      } else {
        this.ToastrcustomService.showSuccess(response.message);
        this.LoadingService.setValue(false);

      }
    });
  }

  removeMember(id: number){
    this.confirmData.user_id = id;

    this.LoadingService.setValue(true);
    this.CourseService.removeMember(this.confirmData).subscribe((response: any) => {
      if (response.statusCode == 200) {
        this.ToastrcustomService.showSuccess(response.message);
        this.getNewMember();
        this.LoadingService.setValue(false);

      } else {
        this.ToastrcustomService.showSuccess(response.message);
        this.LoadingService.setValue(false);

      }
    });
  }

  Close(){
    this.dialogRef.close('reload');
  }
}
