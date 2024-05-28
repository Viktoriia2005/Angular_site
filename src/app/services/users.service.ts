import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { UserModel } from '../models/user.model';
import { CityModel } from '../models/city.model';

@Injectable({
    providedIn: 'root'
})
export class StudentService {
    private baseUrl = 'http://localhost:5000/';

    constructor(private http: HttpClient) {
    }

    async getCitiesAsync(): Promise<CityModel[]> {
        const cities = await firstValueFrom(this.http.get<{ id: number, name: string }[]>(`${this.baseUrl}cities`));
        return cities;
    }

    async getUsersAsync(): Promise<UserModel[]> {
        const users = await firstValueFrom(this.http.get<UserModel[]>(`${this.baseUrl}users`));
        return users;
    }
}
// addUsersAsync(student: Student): Observable<Student> {
//     const studentWithCityName = { ...student, city: this.cities[student.cityId] };
//     return this.http.post<Student>(this.baseUrl, studentWithCityName);
// }

// updateUsersAsync(id: number, student: Student): Observable<Student> {
//     const studentWithCityName = { ...student, city: this.cities[student.cityId] };
//     return this.http.put<Student>(`${this.baseUrl}users/${id}`, studentWithCityName);
// }

// deleteUsersAsync(id: number): Observable<void> {
//     return this.http.delete<void>(`${this.baseUrl}students/${id}`);
// }

