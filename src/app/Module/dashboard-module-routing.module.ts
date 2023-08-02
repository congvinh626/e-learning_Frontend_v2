import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { IndexComponent } from "../dashboard-module/account/index/index.component";
import { SidebarComponent } from "../components/index/sidebar/sidebar.component";
import { NotFoundComponent } from "../components/global/not-found/not-found.component";

const routes: Routes = [
  { path: '', component: SidebarComponent,
  children: [
    { path: '404-not-found', component: NotFoundComponent },
   
  ]},

]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class DashboardModuleRoutingModule { }
