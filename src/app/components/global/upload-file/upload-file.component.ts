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
  @Input() icon: string = '';
  @Input() request: Boolean = false;
  @Input() nameFile: Boolean = false;
  @Input() bgColor: string = 'green';

  @Output() senData = new EventEmitter();

  quantityFile: number = 0;
  file: any = '';

  getUploadedImage(e: any) {
    console.log('e.target.value', e.target.files[0]);
    this.file = e.target.files[0];
    // this.quantityFile = file.length;

      this.senData.emit(this.file);
   
  }
}
