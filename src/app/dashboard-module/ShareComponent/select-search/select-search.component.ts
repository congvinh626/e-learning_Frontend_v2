import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-select-search',
  templateUrl: './select-search.component.html',
  styleUrls: ['./select-search.component.scss']
})
export class SelectSearchComponent {
  @Input() listItem: any = [];
  @Input() searchItem: any = [];
  @Output() getItemSelect = new EventEmitter();
  @Input() paret: string = '';
  @Input() itemChoose: any = [];
  listData: any = [];
  valueItem: string = '';
  ngOnInit() {
    this.listData = this.listItem;
    // setTimeout(() => {
    //   this.getValue();
    // }, 500);
  }

  ngOnChanges(changes: any) {
    if (changes.itemChoose) {
      this.getValue()
    }
  }

  getValue() {
    console.log(3333333333333333333);

    for (let i = 0; i < this.itemChoose.length; i++) {
      if (this.itemChoose[i].page == this.paret) {
        this.valueItem = this.itemChoose[i].item;
        break;
      }
    }
  }

  search(e: any) {
    var arr: any = [];
    var text = e.target.value;

    this.listItem.find((o: any, i: any) => {
      if (o[this.searchItem].toLowerCase().includes(text.toLowerCase()) == true) {
        arr.push(this.listItem[i])
      }

    });
    this.listData = arr;
  }

  getItem(item: any) {
    item.parent = this.paret;
    this.valueItem = item[this.searchItem];
    this.getItemSelect.emit(item);
  }
}
