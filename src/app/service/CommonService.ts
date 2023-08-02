import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  _urlApi: string = environment.urlApi;

  constructor(private http: HttpClient) {}

  getRequest(url: string, param?: any): Observable<any> {
    if (param) {
      return this.http.get(this._urlApi + url + '/' + param);
    } else {
      return this.http.get(this._urlApi + url);
    }
  }

  postRequest(url: string, data: any): Observable<any> {
    return this.http.post(this._urlApi + url, data);
  }

  putRequest(url: string, data: any): Observable<any> {
    return this.http.put(this._urlApi + url, data);
  }

  deleteRequest(url: string): Observable<any> {
    return this.http.delete(this._urlApi + url);
  }

  uploadRequest(url: string, data: any): Observable<any> {
    return this.http.post(this._urlApi + url, data, {reportProgress: true});
  }

  downloadRequest(url: string, id?: number): Observable<any> {
    if (id) {
      return this.http.get(`${this._urlApi + url}/${id}`, {responseType: 'blob'});
    }
    return this.http.get(`${this._urlApi + url}`, {responseType: 'blob'});
  }

  DowloadRequest(url: string): Observable<any> {
    return this.http.get(this._urlApi + url, {reportProgress: true, responseType: 'blob'});
  }

  DowloadPostRequest(url: string, data: any): Observable<any> {
    return this.http.post(this._urlApi + url, data, {reportProgress: true, responseType: 'blob'});
  }
}
