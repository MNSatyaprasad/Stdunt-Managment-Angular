import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const POST_URL = 'http://localhost:8090/student';
@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  createStudents(students: {
    firstName: string;
    lastName: string;
    stdclass: string;
    subject: string;
    dob: Date;
  }) {
    return this.http.post(POST_URL, students);
  }
  constructor(public http: HttpClient) {}
}
