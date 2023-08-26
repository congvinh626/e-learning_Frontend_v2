import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-select-icon',
  templateUrl: './select-icon.component.html',
  styleUrls: ['./select-icon.component.scss']
})
export class SelectIconComponent {
  @Input() label: string = '';
  @Input() error: any = '';
  @Input() request: Boolean = false;
  @Input() placeholder: string = '';
  @Input() iconEnd: string = '';
  @Input() iconEndChange: string = '';
  @Input() iconStart: string = '';
  @Input() value: string = '';
  @Input() options: any = [];


  @Output() senData = new EventEmitter();
  
  checkIcon: boolean = true;

  hendleItem(item: any) {
    this.value = item.name;
    this.senData.emit(item);
  }

}
