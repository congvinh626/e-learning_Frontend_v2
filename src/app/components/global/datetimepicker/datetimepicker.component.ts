import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-datetimepicker',
  templateUrl: './datetimepicker.component.html',
  styleUrls: ['./datetimepicker.component.scss']
})
export class DatetimepickerComponent {
  @Input() label: string = '';
  @Input() error: string = '';
  @Input() request: boolean = false;
  @Output() senData = new EventEmitter();

  DateItem!: Date;

  onSearchDate(event: any){
      this.senData.emit(event.target.value);
  }
}
