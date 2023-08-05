import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss']
})
export class TextInputComponent {
  @Input() label: string = '';
  @Input() error: any = '';
  @Input() request: Boolean = false;
  @Input() placeholder: string = '';
  @Input() inputType: string = '';
  @Input() value: string = '';
  @Output() senData = new EventEmitter();
  
  handleInput(e: any) {
    this.senData.emit(e.target.value);
  }

}
