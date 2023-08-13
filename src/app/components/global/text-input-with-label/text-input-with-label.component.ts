import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-text-input-with-label',
  templateUrl: './text-input-with-label.component.html',
  styleUrls: ['./text-input-with-label.component.scss']
})
export class TextInputWithLabelComponent {
  // @Input() label: any = '';
  @Input() inputType: string = '';
  @Input() index: number = 0;
  @Output() senData = new EventEmitter();

  handleInput(e: any) {
    let item = {
      'index': this.index,
      'value': e.target.value
    }
    this.senData.emit(item);
  }
}
