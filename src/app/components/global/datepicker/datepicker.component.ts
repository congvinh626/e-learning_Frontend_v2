import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss']
})
export class DatepickerComponent {
  @Input() label: string = '';
  @Input() error: string = '';
  @Input() startDate: boolean = false;
  @Input() endDate: boolean = false;
  @Input() request: boolean = false;
  @Output() senData = new EventEmitter();

  DateItem: any = '';

  onSearchDate(event: any){
    if(this.startDate){
      this.senData.emit(event.target.value + 'T00:00:00');
    }
    else if(this.endDate){
      this.senData.emit(event.target.value + 'T23:59:59');

    }
  }
}
