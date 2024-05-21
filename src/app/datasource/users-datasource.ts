import { Injectable, Optional, SkipSelf } from "@angular/core";
import { UserModel } from "../models/user.model";
import { UsersDatasourceInterface } from "./users-datasource-interface";

@Injectable({
    providedIn: 'root',
})
export class UsersDatasource implements UsersDatasourceInterface {

    constructor(@Optional() @SkipSelf() parentModule: UsersDatasource) { }

    private users: UserModel[] = [
        new UserModel(1, 'Іван', new Date('01.01.2000'), 'Кременчук'),
        // new UserModel(2, 'Марія', new Date('15.05.2001'), 'Кременчук'),
        // new UserModel(3, 'Петро', new Date('20.11.2002'), 'Кременчук')
    ];

    public async getUsers(): Promise<UserModel[]> {
        return this.users;
    }

    public async addUser(newUser: UserModel): Promise<void> {
        const maxId = Math.max(...this.users.map(user => user.id));
        newUser.id = maxId + 1;
        this.users.push(newUser);
    }

    public async updateUser(updatedUser: UserModel): Promise<void> {
        const userIdx = this.users.findIndex(e => e.id == updatedUser.id);
        if (userIdx >= 0) {
            this.users[userIdx] = { ...updatedUser };
        }
    }

    public async deleteUser(user: UserModel): Promise<void> {
        const userIdx = this.users.findIndex(e => e.id == user.id);
        if (userIdx !== -1) {
            this.users.splice(userIdx, 1);
        }
    }
}