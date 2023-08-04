import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BehaviorSubject, catchError, map} from 'rxjs';
import {CommonService} from './CommonService';
import { MatDialog } from '@angular/material/dialog';
import { PopupConfirmComponent } from '../components/global/popup-confirm/popup-confirm.component';

@Injectable({
  providedIn: 'root',
})
export class ShareService {
  constructor(private httpService: CommonService, private http: HttpClient, public dialog: MatDialog,) {}

  // private data = new BehaviorSubject('default data');
  // private messageSource = new BehaviorSubject('Default message');
  // pageNow = this.messageSource.asObservable();

  // private controlName = new BehaviorSubject([{'page': 'Phương tiện'}]);
  private controlName = new BehaviorSubject([{page: 'Phương tiện'}]);
  pageMain = this.controlName.asObservable();

  changePageMain(item: any) {
    setTimeout(() => {
      this.controlName.next(item);
    });
  }

  // sendPageNow(message: string) {
  //     this.messageSource.next(message);
  // }

  getSector() {
    return this.httpService.getRequest('PartnerSector/get-partner-sector');
  }

  getProvince() {
    return this.httpService.getRequest('MasterData/get-province');
  }

  getDistrict(id: any) {
    return this.httpService.getRequest('MasterData/get-district' + id);
  }

  getCommune(id: any) {
    return this.httpService.getRequest('MasterData/get-ward' + id);
  }

  getResultMachinePdf(code: any) {
    return this.httpService.getRequest('ResultMachinePdf/pdf-result?code=' + code);
  }

}
