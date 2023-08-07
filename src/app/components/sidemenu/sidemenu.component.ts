import { Component, Output } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss'],
})
export class SidemenuComponent {
  constructor(public menuService: MenuService) {}

  toggleSideMenu() {
    this.menuService.sideMenuHidden = !this.menuService.sideMenuHidden;
  }
}
