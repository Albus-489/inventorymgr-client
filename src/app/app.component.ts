import { Component } from '@angular/core';
import { MenuService } from './services/menu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'inventorymgr-client';
  constructor(private menuService: MenuService) {}

  get sideMenuHidden(): boolean {
    return this.menuService.sideMenuHidden;
  }
}
