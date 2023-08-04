import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-autocomplate',
  templateUrl: './autocomplate.component.html',
  styleUrls: ['./autocomplate.component.scss']
})
export class AutocomplateComponent {
  @Input() options!: any;
  @Input() display: string = '';
  @Input() label: string = '';
  @Input() request: boolean = false;
  @Input() error: string = '';
  @Output() changeCompany = new EventEmitter();
  
  myControl = new FormControl<any>({});
  // options: any = [{name: 'Mary'}, {name: 'Shelley'}, {name: 'Igor'}];
  filteredOptions: any;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => {
        const name = typeof value === 'string' ? value : value[this.display];
        return name ? this._filter(name as string) : this.options.slice();
      }),
    );
    console.log('this.filteredOptions', this.options);
    
  }

  ngOnChanges(changes: any) {
    if (changes.options) {
      this.options = changes.options.currentValue;
    }
    
  }


  displayFn = (user: any) => {
    console.log('user', user);
    this.changeCompany.emit(user)
    return user && user[this.display] ? user[this.display] : '';
  }

  private _filter(name: string): any {
    const filterValue = name.toLowerCase();

    return this.options.filter((option: any) => option[this.display].toLowerCase().includes(filterValue));
  }
}