import { Injectable } from '@angular/core';
import { Student } from './students';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  get(id: number) {
    throw new Error('Method not implemented.');
  }
  url = "http://localhost:8010/user";
  httpHeaders = new HttpHeaders().set('content-type', 'application/json');


  constructor(private http: HttpClient) { }

  addstudent(data: any): Observable<Student[]> {
    return this.http.post<Student[]>(this.url, data);
  }

  getStudent(): Observable<Student[]> {
    return this.http.get<Student[]>(this.url);
  }

  getOnlyStudent(id: any) {
    let ids = id;
    return this.http.get(`${this.url}/${ids}`);
  }

  delStu(id: string): Observable<any> {
    return this.http.delete<any>(`${this.url}/${id}`);
  }
  updateStudent(data: any): Observable<Student> {
    return this.http.put<any>(`${this.url}/${data.id}`, data);
  }

}
