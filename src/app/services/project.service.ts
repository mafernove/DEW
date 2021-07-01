import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private readonly http: HttpClient) { }

  getProject() {
    return this.http.get('/api/project/GetProject');
  }

  getProjects() {
    return this.http.get('https://localhost:44309/api/project/getprojects');
  }
}