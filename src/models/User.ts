export class User{

  public authToken: string;
  public email: string;
  public password: string;
  public name: string;

  constructor(email:string,password:string){
    this.email=email;
    this.password=password;
  }

}
