export class UserModel {
    id: number;
    name: string;
    birthdate: Date;
    city: string | number;

    constructor(id: number, name: string, birtdate: Date, city: string | number) {
        this.id = id;
        this.name = name;
        this.birthdate = birtdate;
        this.city = city;
    }
}