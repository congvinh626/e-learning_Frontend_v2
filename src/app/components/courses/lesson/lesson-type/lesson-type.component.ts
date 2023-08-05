import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-lesson-type',
  templateUrl: './lesson-type.component.html',
  styleUrls: ['./lesson-type.component.scss']
})
export class LessonTypeComponent {
  constructor(public dialogRef: MatDialogRef<LessonTypeComponent>,){

  }
}
