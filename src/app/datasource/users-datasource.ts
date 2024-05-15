import { UserModel } from "../models/user-model";
import { UsersDatasourceInterface } from "./users-datasource-interface";

export class UsersDatasource implements UsersDatasourceInterface {

    private users: UserModel[] = [
        new UserModel(1, 'Іван', new Date('01.01.2000'), 'Кременчук')
        // { name1: 'Марія', birthDate: '15.05.2001' },
        // { name: 'Петро', birthDate: '20.11.2002' }
    ];

    public getUsers(): UserModel[] {
        return this.users;
    }

    public addUser(newUser: UserModel) {
        this.users.push(newUser);
    }

    public updateUser(user: UserModel) {
        //TODO Need to implement
    }

    public deleteUser(user: UserModel) {
        const index = this.users.indexOf(user);
        if (index !== -1) {
            this.users.splice(index, 1);
        }
    }
}