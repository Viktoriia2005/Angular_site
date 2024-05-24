import { UserModel } from "../models/user.model";

export interface UsersDatasourceInterface {
    getUsers(): Promise<UserModel[]>;

    addUser(newUser: UserModel): Promise<UserModel>;

    updateUser(user: UserModel): Promise<UserModel>;

    deleteUser(user: UserModel): Promise<boolean>;
}