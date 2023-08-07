import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IStorage } from 'src/app/interfaces/storage.interface';

@Injectable({
  providedIn: 'root',
})
export class StoragesService {
  constructor(private http: HttpClient) {}

  getStorages(): Observable<IStorage[]> {
    return this.http.get<IStorage[]>('http://localhost:8080/storage');
  }

  getStorage(storageID: string): Observable<IStorage> {
    return this.http.get<IStorage>(
      `http://localhost:8080/storage/${storageID}`
    );
  }
}
