import { Injectable } from "@angular/core";
import { BehaviorSubject, map, Observable } from "rxjs";
import { CommonService } from "./CommonService";

@Injectable({
    providedIn: 'root'
})

export class LoadingService{
  private loading: BehaviorSubject<boolean>;

  constructor() {
    this.loading = new BehaviorSubject<boolean>(false);
  }

  getValue(): Observable<boolean> {
    return this.loading.asObservable();
  }
  setValue(newValue: boolean): void {
    setTimeout(() => {
      this.loading.next(newValue);
    })
  }
}
