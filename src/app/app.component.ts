import { Component } from '@angular/core';
import { LoadingService } from './service/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ProductMobi';
  loading: boolean = false;

  constructor(
    private loadingService: LoadingService,
  ) {}
  ngOnInit() {

    this.loadingService.getValue().subscribe((value) => {
      this.loading = value;
    });

    // var userInfo = this.AccountService.getUserInfo();
    // this.img = userInfo.avatarUrl;
  }
}
