import { NgModule } from '@angular/core';
import { AsyncPipe, CommonModule, NgFor } from '@angular/common';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoadingComponent } from '../components/global/loading/loading.component';
import { TextInputIconComponent } from '../components/global/text-input-icon/text-input-icon.component';
import { PaginationComponent } from '../components/global/pagination/pagination.component';

@NgModule({
  declarations: [
    LoadingComponent,
    TextInputIconComponent,
    // PaginationComponent

  ],
  exports: [
    LoadingComponent,
    TextInputIconComponent,
    // PaginationComponent

  ],
  imports: [CommonModule],

})
export class ShareModule { }