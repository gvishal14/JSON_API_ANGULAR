import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  url='http://localhost:3000/students'
  constructor(private http: HttpClient) { }
  getAllStudent(): Observable<any>{
    return this.http.get(this.url);
  }

  saveStudentData(data:any){
    console.log(data);
    return this.http.post(this.url, data);
  }
  deleteStudent(id:any){
    return this.http.delete(`${this.url}/${id}`)
  }
  getStudentById(id:number){
    return this.http.get(`${this.url}/${id}`)
  }
  updateStudentData(id:number,data:any){
    return this.http.put(`${this.url}/${id}`, data)
  }
}
