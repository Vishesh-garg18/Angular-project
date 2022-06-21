export class User {
  constructor(
    public name: string,
    // public lastname:string,
    public email: string,
    public phonenumber: number,
    public gender: string,
    public subscribe: boolean,
    public street: string,
    public city: string,
    public state: string
  ) {}
}
