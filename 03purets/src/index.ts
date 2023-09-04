class User {
  email: string
  name: string
  readonly city: string|number = 2;
  constructor(email:string, name:string){
    this.email =email;
    this.name = name;
  }
}

const hitesh = new User( "mops.com", "hitesh");
//hitesh.city = 2;
//hitesh.city = "Jaipur"