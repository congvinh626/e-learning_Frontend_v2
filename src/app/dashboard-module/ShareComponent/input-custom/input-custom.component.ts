import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
@Component({
  selector: 'app-input-custom',
  templateUrl: './input-custom.component.html',
  styleUrls: ['./input-custom.component.scss']
})
export class InputCustomComponent implements ControlValueAccessor{
  _name: string = '';

  @Input() type : string = "";
  @Input() placeholder: string = "";
  @Input() name: string = "";
  writeValue(value: any): void {
    throw new Error('Method not implemented.');
  }
  registerOnChange(fn: any): void {
    throw new Error('Method not implemented.');
  }
  registerOnTouched(fn: any): void {
    throw new Error('Method not implemented.');
  }
  setDisabledState?(isDisabled: boolean): void {
    throw new Error('Method not implemented.');
  }

  inputValue: string = '';

  @Output() valueChange = new EventEmitter<string>();

  onChildValueChange() {
    this.valueChange.emit(this.inputValue);
  }

}
