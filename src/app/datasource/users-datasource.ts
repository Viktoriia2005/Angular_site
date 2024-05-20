import { UserModel } from "../models/user.model";
import { UsersDatasourceInterface } from "./users-datasource-interface";

export class UsersDatasource implements UsersDatasourceInterface {

    private users: UserModel[] = [
        new UserModel(1, 'Іван', new Date('01.01.2000'), 'Кременчук'),
        // new UserModel(2, 'Марія', new Date('15.05.2001'), 'Кременчук'),
        // new UserModel(3, 'Петро', new Date('20.11.2002'), 'Кременчук')
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