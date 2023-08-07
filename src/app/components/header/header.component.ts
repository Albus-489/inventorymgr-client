import { Component } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(public menuService: MenuService) {}

  toggleSideMenu() {
    this.menuService.sideMenuHidden = !this.menuService.sideMenuHidden;
  }
}
