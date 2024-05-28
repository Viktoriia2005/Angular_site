export class UserModel {
    id: number;
    name: string;
    birthday: Date;
    city: string | number;

    constructor(id: number, name: string, birthday: Date, city: string | number) {
        this.id = id;
        this.name = name;
        this.birthday = birthday;
        this.city = city;
    }
}