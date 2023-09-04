class User {
  email: string
  name: string
  city: string|number = ""
  constructor(email:string, name:string){
    this.email =email;
    this.name = name;
  }
}

const hitesh = new User( "mops.com", "hitesh");
hitesh.city = 2;
//hitesh.city = "Jaipur"