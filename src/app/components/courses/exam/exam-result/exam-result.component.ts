import { Component, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-exam-result',
  templateUrl: './exam-result.component.html',
  styleUrls: ['./exam-result.component.scss']
})
export class ExamResultComponent {
  @Input() result: any = [];

  constructor( public dialogRef: MatDialogRef<ExamResultComponent>) {}

    onSubmit(){
      this.dialogRef.close(true);
  
    }
  
    Close(){
      this.dialogRef.close();
    }
}
