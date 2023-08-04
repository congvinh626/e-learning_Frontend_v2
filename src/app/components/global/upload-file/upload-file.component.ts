import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent {
  @Input() label: string = '';
  @Input() name: string = '';
  @Input() error: string = '';
  @Input() request: Boolean = false;
  @Input() bgColor: string = 'green';

  @Output() senData = new EventEmitter();

  quantityFile: number = 0;

  getUploadedImage(e: any) {
    console.log('e.target.value', e.target.value);
    const file = e.target.files
    this.quantityFile = file.length;

      this.senData.emit(file[0]);
   
  }
}
