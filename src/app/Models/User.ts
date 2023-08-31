export class User{
    private _userId: number;
    private _firstName: string;
    private _lastName: string;
    private _dateCreated: Date;
    private _token: string;

    constructor(userId: number, firstName: string, lastName: string, dateCreated: Date, token: string){
        this._userId = userId;
        this._firstName = firstName;
        this._lastName = lastName;
        this._dateCreated = dateCreated;
        this._token = token;
    }

    public get fullname(): string{
        return this._firstName + " " + this._lastName;
    }

    public get userId(): number{
        return this.userId;
    }

    public get dateCreated(): Date{
        return this._dateCreated;
    }
}