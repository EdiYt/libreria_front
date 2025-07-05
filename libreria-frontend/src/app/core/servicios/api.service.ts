import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  // Endpoints exactos de tu backend
  obtenerLibros() {
    return this.http.get<any[]>(`${this.apiUrl}/Libro`);
  }

  obtenerAutores() {
    return this.http.get<any[]>(`${this.apiUrl}/Autor`);
  }

  obtenerGeneros() {
    return this.http.get<any[]>(`${this.apiUrl}/Genero`);
  }

  crearLibro(libro: any) {
    return this.http.post(`${this.apiUrl}/Libro`, libro);
  }
}