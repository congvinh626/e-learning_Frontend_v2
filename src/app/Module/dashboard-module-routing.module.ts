import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SidebarComponent } from "../components/index/sidebar/sidebar.component";
import { NotFoundComponent } from "../components/global/not-found/not-found.component";
import { CourseIndexComponent } from "../components/courses/course/course-index/course-index.component";
import { LessonIndexComponent } from "../components/courses/lesson/lesson-index/lesson-index.component";

const routes: Routes = [
  { path: '', component: SidebarComponent,
  children: [
    { path: '404-not-found', component: NotFoundComponent },

    { path: 'khoa-hoc', component: CourseIndexComponent },
    { path: 'khoa-hoc/:slug', component: LessonIndexComponent },
   
  ]},

]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class DashboardModuleRoutingModule { }
