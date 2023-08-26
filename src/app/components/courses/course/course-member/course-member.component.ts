import { Component, Input } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { PopupConfirmComponent } from 'src/app/components/global/popup-confirm/popup-confirm.component';
import { CourseService } from 'src/app/service/CourseService';
import { LoadingService } from 'src/app/service/loading.service';
import { ToastrcustomService } from 'src/app/service/toastrcustom';
@Component({
  selector: 'app-course-member',
  templateUrl: './course-member.component.html',
  styleUrls: ['./course-member.component.scss']
})
export class CourseMemberComponent {
  @Input() course_id: number = 0;

  listData: any = [];
  teacher_id: number = 0;
  confirmData: any = {
    "course_id": 0,
    "user_id": 0
  }

  constructor(
    private LoadingService: LoadingService,
    private CourseService: CourseService,
    public dialogRef: MatDialogRef<CourseMemberComponent>,
    private ToastrcustomService: ToastrcustomService,
    private dialog: MatDialog,

  ) {}

  ngOnInit(): void {
    this.getMember();
    this.confirmData.course_id = this.course_id;
  }

  changeTab(event: any){
    if(event.index == 0)
    console.log(1111111, event);
    
    this.getMember();
  }

  getMember() {
    
    this.LoadingService.setValue(true);
    this.CourseService.getMember(this.course_id).subscribe((response: any) => {
      this.teacher_id = response.teacher_id;
      this.listData = response.users;
      this.LoadingService.setValue(false);
      
    });
  }


  confirmDelete(id: number, name:string) {
    const dialogRef = this.dialog.open(PopupConfirmComponent);
    dialogRef.componentInstance.title = "Xóa thành viên";
    dialogRef.componentInstance.message = `Bạn có chắc chắn muốn xóa '${name}' khỏi khóa học không?`;

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.removeMember(id);
      }
    });
  }

  removeMember(id: number){

    this.confirmData.user_id = id;

    this.LoadingService.setValue(true);
    this.CourseService.removeMember(this.confirmData).subscribe((response: any) => {
      if (response.statusCode == 200) {
        this.ToastrcustomService.showSuccess(response.message);
        this.getMember();
      } else {
        this.ToastrcustomService.showSuccess(response.message);
      }
      this.LoadingService.setValue(false);

    },(error) => {
      this.ToastrcustomService.showError(error.error.message);
      this.LoadingService.setValue(false);
    });
  }
  Close(){
    this.dialogRef.close('reload');
  }
}
