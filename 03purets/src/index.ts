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
  private deleteToken(){
    console.log("token deleted");
  }
     
  get getAppleEmail(): string{
    return `apple${this.email}`
  }

  get courseCount():number {
    return this._courseCount
  }

  set courseCount(courseNum){
    if (courseNum <=1) {
      throw new Error("course count should be more then 1")  
    }
    this._courseCount = courseNum
  }
}
const hitesh = new User( "mops.com", "hitesh");
//hitesh.city 

//hitesh.deleteToken()