import { CUSTOM_ELEMENTS_SCHEMA, ErrorHandler, NgModule } from '@angular/core';
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
import { SelectSearchComponent } from '../components/global/select-search/select-search.component';
import { PopupConfirmComponent } from '../components/global/popup-confirm/popup-confirm.component';
import { DashboardModuleRoutingModule } from './dashboard-module-routing.module';
import { ShareModule } from './share-module.module';
import { CourseIndexComponent } from '../components/courses/course/course-index/course-index.component';
import { CourseEditComponent } from '../components/courses/course/course-edit/course-edit.component';
import { LessonEditComponent } from '../components/courses/lesson/lesson-edit/lesson-edit.component';
import { LessonIndexComponent } from '../components/courses/lesson/lesson-index/lesson-index.component';
import { TextInputComponent } from '../components/global/text-input/text-input.component';
import { SubmitBtnOutlineComponent } from '../components/global/submit-btn-outline/submit-btn-outline.component';
import { SubmitFormButtonComponent } from '../components/global/submit-form-button/submit-form-button.component';
import { TextAreaComponent } from '../components/global/text-area/text-area.component';
import { TextInputV2Component } from '../components/global/text-input-v2/text-input-v2.component';
import { UploadFileComponent } from '../components/global/upload-file/upload-file.component';
import { TextInputWithLabelComponent } from '../components/global/text-input-with-label/text-input-with-label.component';
import { UploadMultipleFileComponent } from '../components/global/upload-multiple-file/upload-multiple-file.component';
import { AutocomplateComponent } from '../components/global/autocomplate/autocomplate.component';
import { DatepickerComponent } from '../components/global/datepicker/datepicker.component';
import { DatetimepickerComponent } from '../components/global/datetimepicker/datetimepicker.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { LessonTypeComponent } from '../components/courses/lesson/lesson-type/lesson-type.component';
import { LessonExamComponent } from '../components/courses/lesson/lesson-exam/lesson-exam.component';
import { ExamIndexComponent } from '../components/courses/exam/exam-index/exam-index.component';
import { VideoIndexComponent } from '../components/courses/video/video-index/video-index.component';
import { LessonImportExamComponent } from '../components/courses/lesson/lesson-import-exam/lesson-import-exam.component';
import { LessonExamFormComponent } from '../components/courses/lesson/lesson-exam-form/lesson-exam-form.component';
import { ExamInfoComponent } from '../components/courses/exam/exam-info/exam-info.component';
import { ExamResultComponent } from '../components/courses/exam/exam-result/exam-result.component';
import { ExamHistoryComponent } from '../components/courses/exam/exam-history/exam-history.component';
import { SafePipe } from '../safe.pipe';
import { CountdownModule } from 'ngx-countdown';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    SidebarComponent,
    NotFoundComponent,
    SelectSearchComponent,
    PopupConfirmComponent,
    
    CourseIndexComponent,
    CourseEditComponent,
    LessonEditComponent,
    LessonIndexComponent,
    TextInputComponent,
    SubmitBtnOutlineComponent,
    SubmitFormButtonComponent,
    TextAreaComponent,
    TextInputV2Component,
    TextInputWithLabelComponent,
    UploadFileComponent,
    UploadMultipleFileComponent,
    AutocomplateComponent,
    DatepickerComponent,
    DatetimepickerComponent,
    LessonTypeComponent,
    LessonExamComponent,
    ExamIndexComponent,
    VideoIndexComponent,
    LessonImportExamComponent,
    LessonExamFormComponent,
    SafePipe,

    ExamInfoComponent,
    ExamResultComponent,
    ExamHistoryComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
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
    MatIconModule,
    ShareModule,
    MatAutocompleteModule,
    CountdownModule

  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class DashboardModuleModule {}
