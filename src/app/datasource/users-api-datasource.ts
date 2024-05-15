import { UserModel } from "../models/user-model";
import { UsersDatasourceInterface } from "./users-datasource-interface";

export class UsersApiDatasource implements UsersDatasourceInterface{
    
    getUsers(): UserModel[] {
        throw new Error("Method not implemented.");
    }
    addUser(newUser: UserModel): void {
        throw new Error("Method not implemented.");
    }
    updateUser(user: UserModel): void {
        throw new Error("Method not implemented.");
    }
    deleteUser(user: UserModel): void {
        throw new Error("Method not implemented.");
    }
}