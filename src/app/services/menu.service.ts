import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  constructor() {}

  public _sideMenuHidden = false;

  get sideMenuHidden(): boolean {
    return this._sideMenuHidden;
  }

  set sideMenuHidden(value: boolean) {
    this._sideMenuHidden = value;
  }
}
