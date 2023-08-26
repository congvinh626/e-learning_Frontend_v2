import {Component} from '@angular/core';
import {ROUTE_DATA} from './sidebar';
import { NotificationService } from 'src/app/service/NotificationService';
import { AccountService } from 'src/app/service/AccountService';
import { ToastrcustomService } from 'src/app/service/toastrcustom';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  menu: any = ROUTE_DATA;
  roleAcc: string = '';
  menuForRole: any = [];
  infoAcc: any = {};
  checkAvatar: string = '';
  constructor(
   private NotificationService: NotificationService,
   private AccountService: AccountService,
   private ToastrcustomService: ToastrcustomService,
   private router: Router
  ) {
    var userInfo = this.AccountService.getUserInfo();
    this.roleAcc = userInfo.role[0];
    this.categoryParent();
    this.getInfo();

  }

  ngOnInit() {
  }

  categoryParent() {
    
    for (let i = 0; i < this.menu.length; i++) {
      if(this.menu[i].roles ){
        if(this.menu[i].roles.indexOf(this.roleAcc) > -1){
          
          if(this.menu[i].children){
            this.menu[i].children = this.getCategoryChilden(this.menu[i].children);
          }
          this.menuForRole.push(this.menu[i]);

        }
      }else{
        if(this.menu[i].children){
          this.menu[i].children = this.getCategoryChilden(this.menu[i].children);
        }
        this.menuForRole.push(this.menu[i]);

      }
      
    }
  }


  getCategoryChilden(listChilden: any){
    var arr: any = [];

    for (let i = 0; i < listChilden.length; i++) {
      if(listChilden[i].roles ){
        if(listChilden[i].roles.indexOf(this.roleAcc) > -1){
          arr.push(listChilden[i]);
        }
      }else{
        arr.push(listChilden[i]);
      }
    }

    return arr;
  }

  getInfo(){
  
      this.AccountService.infoAcc().subscribe(response => {
        this.infoAcc = response;
        // this.checkAvatar = 
        const parts = response.avatar.split("/"); // Tách chuỗi thành các phần tử dựa trên dấu "/"
        this.checkAvatar = parts.pop();
        
      },(error) => {
          this.ToastrcustomService.showError(error.error.message);
      });
  }

  logOut(){
    this.AccountService.logOut();
    this.router.navigate(['/Home']);

  }
}
