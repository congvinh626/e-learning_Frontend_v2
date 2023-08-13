import {CdkTextareaAutosize, TextFieldModule} from '@angular/cdk/text-field';
import {Component, EventEmitter, Input, NgZone, Output, ViewChild} from '@angular/core';
import {take} from 'rxjs/operators';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
@Component({
  selector: 'app-text-input-v2',
  templateUrl: './text-input-v2.component.html',
  styleUrls: ['./text-input-v2.component.scss']
})
export class TextInputV2Component {
  constructor(private _ngZone: NgZone) {}

  @ViewChild('autosize') autosize!: CdkTextareaAutosize;
  @Input() label: string = '';
  @Input() error: any = '';
  @Input() request: Boolean = false;
  @Output() senData = new EventEmitter();
  
  handleInput(e: any) {
    this.senData.emit(e.target.value);
  }
  
  triggerResize() {
    console.log('fdfssfsdfdsf');
    
    // Wait for changes to be applied, then trigger textarea resize.
    this._ngZone.onStable.pipe(take(2)).subscribe(() => this.autosize.resizeToFitContent(true));
  }
}
