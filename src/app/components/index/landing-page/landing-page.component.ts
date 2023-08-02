import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingService } from 'src/app/service/loading.service';
import { ShareService } from 'src/app/service/ShareService';
import { listMenu } from './memu';
import { ToastrcustomService } from 'src/app/dashboard-module/ShareComponent/toastrcustom/toastrcustom';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {
  code: any = '';
  listMenu: any = listMenu;

  constructor(
    private ShareService: ShareService,
    private toastr: ToastrcustomService,
    private router: Router,
    private route: ActivatedRoute,
    private viewportScroller: ViewportScroller,
    private loadingService: LoadingService) {
  }

  ngOnInit(): void {

  }



  navigateTo(path: string): void {
    this.viewportScroller.scrollToAnchor(path)
    // this.router.navigate(['#'+path], { relativeTo: this.route });
  }

  getResultMachinePdf() {
    this.loadingService.setValue(true);

    this.ShareService.getResultMachinePdf(this.code).subscribe((res: any) => {
      if (res.statusCode == 200) {
        window.open(res.fileUrl, "_blank");
      } else {
        this.toastr.showError(res.message)
      }
      this.loadingService.setValue(false);

    })

  }

  clickMenu(name: string){
    for (let myChild of this.listMenu) {
      if (name == myChild.name) {
        myChild.check = true;
      } else {
        myChild.check = false;
      }
    }
  }
  
}
