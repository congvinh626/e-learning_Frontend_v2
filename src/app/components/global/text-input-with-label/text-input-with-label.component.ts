import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-text-input-with-label',
  templateUrl: './text-input-with-label.component.html',
  styleUrls: ['./text-input-with-label.component.scss']
})
export class TextInputWithLabelComponent {
  @Input() label: string = '';
  @Input() inputType: string = '';
  @Output() senData = new EventEmitter();

  handleInput(e: any) {
    this.senData.emit(e.target.value);
  }
}
