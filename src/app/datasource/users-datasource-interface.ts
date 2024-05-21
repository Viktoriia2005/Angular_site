import { UserModel } from "../models/user.model";

export interface UsersDatasourceInterface {
    getUsers(): Promise<UserModel[]>;

    addUser(newUser: UserModel): Promise<void>;

    updateUser(user: UserModel): Promise<void>;

    deleteUser(user: UserModel): Promise<void>;
}