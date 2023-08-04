import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-submit-btn-outline',
  templateUrl: './submit-btn-outline.component.html',
  styleUrls: ['./submit-btn-outline.component.scss']
})
export class SubmitBtnOutlineComponent {
  @Input() btnText: string = '';
  @Input() outlineColor: string = 'red';
  @Input() icon: string = '';
  
}
