import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

interface Student {
    id: number;
    name: string;
    birthday: string;
    cityId: number;
    city?: string;
}

@Injectable({
    providedIn: 'root'
})
export class StudentService {
    private apiUrl = 'http://localhost:4200/students';
    private cities: { [key: number]: string } = {};

    constructor(private http: HttpClient) {
        this.http.get<{ id: number, name: string }[]>('http://localhost:5000/cities').subscribe(cities => {
            cities.forEach(city => this.cities[city.id] = city.name);
        });
    }

    getUsersAsync(): Observable<Student[]> {
        return this.http.get<Student[]>(this.apiUrl).pipe(
            map(students => students.map(student => ({ ...student, city: this.cities[student.cityId] })))
        );
    }

    addUsersAsync(student: Student): Observable<Student> {
        const studentWithCityName = { ...student, city: this.cities[student.cityId] };
        return this.http.post<Student>(this.apiUrl, studentWithCityName);
    }

    updateUsersAsync(id: number, student: Student): Observable<Student> {
        const studentWithCityName = { ...student, city: this.cities[student.cityId] };
        return this.http.put<Student>(`${this.apiUrl}/${id}`, studentWithCityName);
    }

    deleteUsersAsync(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }
}

