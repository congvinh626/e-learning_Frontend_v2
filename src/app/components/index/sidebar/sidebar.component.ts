import {Component} from '@angular/core';
import {ROUTE_DATA} from './sidebar';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  menu: any = ROUTE_DATA;
 
  constructor(
   
  ) {}

  ngOnInit() {
   
  }

 
}
