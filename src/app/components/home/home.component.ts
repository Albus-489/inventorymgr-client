import { Component, OnInit } from '@angular/core';
import { IStorage } from 'src/app/interfaces/storage.interface';
import { StoragesService } from 'src/app/services/api/storages.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private storagesService: StoragesService) {}

  isLoading: boolean = false;

  ngOnInit(): void {
    this.fetchStorages();
  }

  storages: IStorage[] = [];
  fetchStoragesError: any;

  fetchStorages(): void {
    this.isLoading = true;
    this.storagesService.getStorages().subscribe({
      next: (result) => {
        this.storages = result;
        console.log(this.storages);
      },
      error: (err) => {
        console.log('Fetching storages error: ', err.message);
        this.fetchStoragesError = err.message;
        this.isLoading = false;
      },
      complete: () => {
        this.isLoading = false;
      },
    });
  }
}
