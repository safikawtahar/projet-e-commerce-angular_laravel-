import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PanierService {
  private _count = new BehaviorSubject<number>(0);
  count$ = this._count.asObservable();

  constructor() { }

  get count(): number {
    return this._count.value;
  }

  incrementCount() {
    this._count.next(this._count.value + 1);
  }

}