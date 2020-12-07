export class recordType {
    public firstName: string;
    public lastName: string;
    public avatar: string;
    public id: number;

    constructor(firstName: string, lastName: string, avatar: string, id: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.avatar = avatar;
        this.id = id;
    }
}