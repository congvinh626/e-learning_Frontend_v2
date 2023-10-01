import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SidebarComponent } from "../components/index/sidebar/sidebar.component";
import { NotFoundComponent } from "../components/global/not-found/not-found.component";
import { CourseIndexComponent } from "../components/courses/course/course-index/course-index.component";
import { LessonIndexComponent } from "../components/courses/lesson/lesson-index/lesson-index.component";
import { VideoIndexComponent } from "../components/courses/video/video-index/video-index.component";
import { ExamIndexComponent } from "../components/courses/exam/exam-index/exam-index.component";
import { ExamHistoryComponent } from "../components/courses/exam/exam-history/exam-history.component";
import { CourseMoreComponent } from "../components/courses/course/course-more/course-more.component";
import { RoleGuardService } from "../service/rolo.guard.service";
import { PersonalPageComponent } from "../components/home/personal-page/personal-page.component";
import { MessageIndexComponent } from "../message/message-index/message-index.component";

const routes: Routes = [
  { path: '', component: SidebarComponent,
  children: [
    { path: '404-not-found', component: NotFoundComponent },

    { path: 'khoa-hoc', component: CourseIndexComponent },
    { path: 'them-khoa-hoc', component: CourseMoreComponent },
    { path: 'khoa-hoc/:slug', component: LessonIndexComponent },
    { path: 'bai-hoc/:slug', component: VideoIndexComponent },
    { path: 'kiem-tra/:lesson_slug/:slug', component: ExamIndexComponent },
    { path: 'lich-su/:id', component: ExamHistoryComponent },
    { path: 'trang-ca-nhan', component: PersonalPageComponent },
    { path: 'nhan-tin', component: MessageIndexComponent },

    // {
    //   path: 'khoa-hoc',
    //   component: CourseIndexComponent,
    //   canActivate: [RoleGuardService],
    //   data: {
    //     roles: ["student"]
    //   }
    // },
  ]},

]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class DashboardModuleRoutingModule { }
