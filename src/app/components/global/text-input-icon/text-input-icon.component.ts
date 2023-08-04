import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-text-input-icon',
  templateUrl: './text-input-icon.component.html',
  styleUrls: ['./text-input-icon.component.scss']
})
export class TextInputIconComponent {
  @Input() label: string = '';
  @Input() error: string = '';
  @Input() request: Boolean = false;
  @Input() placeholder: string = '';
  @Input() inputType: string = 'text';
  @Input() inputTypeChange: string = 'text';
  @Input() iconEnd: string = '';
  @Input() iconEndChange: string = '';
  @Input() iconStart: string = '';


  @Output() senData = new EventEmitter();
  
 checkIcon: boolean = true;


  handleInput(e: any) {
    this.senData.emit(e.target.value);
  }
}
