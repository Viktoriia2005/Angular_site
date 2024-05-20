export class UserModel {
    id: number;
    name: string;
    birthdate: Date;
    city: string;

    constructor(id: number, name: string, birtdate: Date, city: string) {
        this.id = id;
        this.name = name;
        this.birthdate = birtdate;
        this.city = city;
    }
}