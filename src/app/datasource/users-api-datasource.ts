import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModel } from '../models/user.model';
import { UsersDatasourceInterface } from './users-datasource-interface';
import { Observable, catchError, map, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UsersApiDatasource implements UsersDatasourceInterface {

    private apiUrl = 'http://localhost:4200/users';

    constructor(private http: HttpClient) { }

    getUsersAsync(): Observable<UserModel[]> {
        return this.http.get<UserModel[]>(this.apiUrl);
    }

    addUserAsync(newUser: UserModel): Observable<UserModel> {
        return this.http.post<UserModel>(this.apiUrl, newUser);
    }

    updateUserAsync(updatedUser: UserModel): Observable<UserModel> {
        return this.http.put<UserModel>(`${this.apiUrl}/${updatedUser.id}`, updatedUser);
    }

    deleteUserAsync(user: UserModel): Observable<boolean> {
        return this.http.delete<void>(`${this.apiUrl}/${user.id}`).pipe(
            map(() => true),
            catchError(error => {
                console.error("Error deleting user:", error);
                return of(false);
            })
        );
    }
}
