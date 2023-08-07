import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidemenuComponent } from './components/sidemenu/sidemenu.component';
import { SettingspageComponent } from './components/settingspage/settingspage.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { StorageComponent } from './components/storage/storage.component';
import { ProductComponent } from './components/product/product.component';
import { HomeComponent } from './components/home/home.component';

import { HttpClientModule } from '@angular/common/http';
import { StoragePageComponent } from './components/storage-page/storage-page.component';
import { ModalComponent } from './components/modal/modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidemenuComponent,
    SettingspageComponent,
    AboutusComponent,
    StorageComponent,
    ProductComponent,
    HomeComponent,
    StoragePageComponent,
    ModalComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, NgbModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
