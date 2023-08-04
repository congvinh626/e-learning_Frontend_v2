import {Component, EventEmitter, Input, Output} from '@angular/core';
import {PageData} from 'src/app/Model/Paging';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent {
  @Input() test: string = '';

  pagedata: PageData = {
    page: 1,
    pageSize: 10,
  };

  isDisablePlus: boolean = false;
  isDisableMinus: boolean = true;

  @Output() changePage = new EventEmitter();
  @Input() Pagination!: any;

  size: number = 10;
  formItem: any = {};

  ChoosePage(currentPage: number) {
    this.Pagination.currentPage = currentPage;
    this.sendDate();
  }

  selectSizePage(event: any) {
    this.size = event.target.value;
    this.Pagination.currentPage = 1;
    this.sendDate();
  }

  sendDate() {
    this.formItem.pageSize = this.size;
    this.formItem.page = this.Pagination.currentPage;

    this.changePage.emit(this.formItem);
  }
}
