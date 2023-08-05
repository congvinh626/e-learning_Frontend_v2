import { Component, HostListener, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-popup-confirm',
  templateUrl: './popup-confirm.component.html',
  styleUrls: ['./popup-confirm.component.scss']
})
export class PopupConfirmComponent {
  @Input() message: string = '';
  @Input() title: string = '';
  
  constructor( public dialogRef: MatDialogRef<PopupConfirmComponent>) {
  }
  // @HostListener('document:keydown', ['$event'])

  // handleKeyboardEvent(event: KeyboardEvent) {
  //     if (event.key === 'F9') {
  //       this.onSubmit();
  //     } else if (event.key === 'F10') {
  //       this.Close();
  //     }

  // }
  
  onSubmit(){
    this.dialogRef.close(true);

  }

  Close(){
    this.dialogRef.close();
  }
}
