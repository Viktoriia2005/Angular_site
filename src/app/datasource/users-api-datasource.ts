import { Injectable } from '@angular/core';
import { UserModel } from '../models/user.model';
import { UsersDatasourceInterface } from './users-datasource-interface';
import { StudentService } from '../services/users.service';

@Injectable({
    providedIn: 'root'
})
export class UsersApiDatasource implements UsersDatasourceInterface {

    constructor(private studentsService: StudentService) { }

    async getUsersAsync(): Promise<UserModel[]> {
        const users = await this.studentsService.getUsersAsync();
        const cities = await this.studentsService.getCitiesAsync();
        users.forEach(e => {
            const city = cities.find(c => c.id === e.city);
            e.city = city ? city.name : 'Unknown';
        });
        return users;
    }


    addUserAsync(newUser: UserModel): Promise<UserModel> {
        throw new Error('Not implemented');
        // return this.http.post<UserModel>(this.baseUrl, newUser);
    }

    updateUserAsync(updatedUser: UserModel): Promise<UserModel> {
        throw new Error('Not implemented');
        // return this.http.put<UserModel>(`${this.baseUrl}/${updatedUser.id}`, updatedUser);
    }

    deleteUserAsync(user: UserModel): Promise<boolean> {
        throw new Error('Not implemented');
        // return this.http.delete<void>(`${this.baseUrl}/${user.id}`).pipe(
        //     map(() => true),
        //     catchError(error => {
        //         console.error("Error deleting user:", error);
        //         return of(false);
        //     })
        // );
    }
}