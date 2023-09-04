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
 
  readonly city: string|number = 2; //# === private
  constructor(
    public email:string,
    public name:string,
    private userId?:string
    ){
    
    
  }
}
const hitesh = new User( "mops.com", "hitesh");
//hitesh.city 