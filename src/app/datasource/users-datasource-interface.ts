import { UserModel } from "../models/user-model";

export interface UsersDatasourceInterface {
    getUsers(): UserModel[];

    addUser(newUser: UserModel): void;

    updateUser(user: UserModel): void;

    deleteUser(user: UserModel): void;
}