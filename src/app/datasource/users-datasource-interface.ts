import { UserModel } from "../models/user.model";

export interface UsersDatasourceInterface {
    getUsersAsync(): Promise<UserModel[]>;

    // addUserAsync(newUser: UserModel): Promise<UserModel>;

    // updateUserAsync(user: UserModel): Promise<UserModel>;

    // deleteUserAsync(user: UserModel): Promise<boolean>;
}