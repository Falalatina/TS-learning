// class User {
//   public email: string
//   name: string
//   readonly #city: string|number = 2; //# === private
//   constructor(email:string, name:string){
//     this.email =email;
//     this.name = name;
    
//   }
// }

class User {

  private _courseCount = 1;
 
  readonly city: string|number = 2; //# === private
  constructor(
    public email:string,
    public name:string,
    private userId?:string
    ){
  }
     
  get getAppleEmail(): string{
    return `apple${this.email}`
  }
}
const hitesh = new User( "mops.com", "hitesh");
//hitesh.city 