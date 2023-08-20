import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-submit-form-button',
  templateUrl: './submit-form-button.component.html',
  styleUrls: ['./submit-form-button.component.scss']
})
export class SubmitFormButtonComponent {
  @Input() btnText!: string | number ;
  @Input() bgColor: string = 'red';
  @Input() icon: string = '';
  
}
