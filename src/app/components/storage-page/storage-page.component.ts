import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IStorage } from 'src/app/interfaces/storage.interface';
import { StoragesService } from 'src/app/services/api/storages.service';
import { ModalComponent } from '../modal/modal.component';
import { Validators } from '@angular/forms';
import { getProductFormFields } from 'src/app/form-config/formfields.config';

@Component({
  selector: 'app-storage-page',
  templateUrl: './storage-page.component.html',
  styleUrls: ['./storage-page.component.scss'],
})
export class StoragePageComponent {
  constructor(
    private modalService: NgbModal,
    private route: ActivatedRoute,
    private storagesService: StoragesService
  ) {}

  storageId!: string;
  storageName!: string;
  isLoading: boolean = false;
  storageData!: IStorage;
  ngOnInit(): void {
    this.storageId = this.route.snapshot.paramMap.get('id')!;
    this.storageName = this.route.snapshot.paramMap.get('name')!;
    this.getStorageWithPopulate();
  }

  fetchStoragesError: any;
  getStorageWithPopulate(): void {
    this.isLoading = true;
    this.storagesService.getStorage(this.storageId).subscribe({
      next: (result) => {
        this.storageData = result;
        console.log(this.storageData);
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

  openModal() {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.formConfig = getProductFormFields();
  }
}
