import { Component, Input } from '@angular/core';
import { IStorage } from 'src/app/interfaces/storage.interface';

@Component({
  selector: 'app-storage',
  templateUrl: './storage.component.html',
  styleUrls: ['./storage.component.scss'],
})
export class StorageComponent {
  @Input() storageData!: IStorage;
}
