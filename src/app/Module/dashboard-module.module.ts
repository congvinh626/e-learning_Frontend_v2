import { ErrorHandler, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatMenuModule } from '@angular/material/menu';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { SidebarComponent } from '../components/index/sidebar/sidebar.component';
import { NotFoundComponent } from '../components/global/not-found/not-found.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTabsModule} from '@angular/material/tabs';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatTreeModule} from '@angular/material/tree';
import {MatIconModule} from '@angular/material/icon';
import { SelectSearchComponent } from '../dashboard-module/ShareComponent/select-search/select-search.component';
import { PopupConfirmComponent } from '../dashboard-module/ShareComponent/popup-confirm/popup-confirm.component';
import { PaginationComponent } from '../dashboard-module/ShareComponent/pagination/pagination.component';
import { DashboardModuleRoutingModule } from './dashboard-module-routing.module';

@NgModule({
  declarations: [
    SidebarComponent,
    NotFoundComponent,
    SelectSearchComponent,
    PopupConfirmComponent,
    PaginationComponent

  ],
  imports: [
    CommonModule,
    DashboardModuleRoutingModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    FontAwesomeModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    MatTabsModule,
    MatCheckboxModule,
    MatTreeModule,
    MatIconModule
  ],

})
export class DashboardModuleModule {}
