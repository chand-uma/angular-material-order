import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MaterialOrder } from '../models/material-order.model';

@Injectable({
  providedIn: 'root'
})
export class MaterialOrderService {
  private apiUrl = 'https://your-api-base-url/api/materialorders';

  constructor(private http: HttpClient) { }

  createMaterialOrder(order: MaterialOrder): Observable<MaterialOrder> {
    return this.http.post<MaterialOrder>(this.apiUrl, order);
  }

  getMaterialOrders(): Observable<MaterialOrder[]> {
    return this.http.get<MaterialOrder[]>(this.apiUrl);
  }
}
