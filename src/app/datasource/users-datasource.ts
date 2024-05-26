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
    ];

    public async getUsersAsync(): Promise<UserModel[]> {
        return this.users;
    }

    public async addUserAsync(newUser: UserModel): Promise<UserModel> {
        const maxId = Math.max(...this.users.map(user => user.id));
        newUser.id = maxId + 1;
        this.users.push(newUser);
        return newUser;
    }

    public async updateUserAsync(updatedUser: UserModel): Promise<UserModel> {
        const userIdx = this.users.findIndex(e => e.id == updatedUser.id);
        if (userIdx >= 0) {
            this.users[userIdx] = { ...updatedUser };
        }
        return updatedUser;
    }

    public async deleteUserAsync(user: UserModel): Promise<boolean> {
        const userIdx = this.users.findIndex(e => e.id == user.id);
        if (userIdx !== -1) {
            this.users.splice(userIdx, 1);
            return true;
        }
        return false;
    }
}