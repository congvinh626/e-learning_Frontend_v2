import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-upload-multiple-file',
  templateUrl: './upload-multiple-file.component.html',
  styleUrls: ['./upload-multiple-file.component.scss']
})
export class UploadMultipleFileComponent {
  @Input() label: string = '';
  @Input() error: string = '';
  @Input() icon: string = '';
  @Input() request: Boolean = false;
  @Input() bgColor: string = 'green';

  @Output() senData = new EventEmitter();

  quantityFile: number = 0;

  getUploadedImage(e: any) {
    console.log('e.target.value', e.target.value);
    const file = e.target.files
    this.quantityFile = file.length;

    // if (this.quantity == '') {
    //   this.senData.emit(file[0]);
    // } else {
      this.senData.emit(file);
    // }
  }
}
