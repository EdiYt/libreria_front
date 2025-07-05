import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private api = environment.apiUrl;

  constructor(private http: HttpClient) {}

  obtenerLibros()  { return this.http.get<any[]>(`${this.api}/Libro`); }
  obtenerGeneros() { return this.http.get<any[]>(`${this.api}/Genero`); }
}
