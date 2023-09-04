"use strict";
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
    constructor(email, name, userId) {
        this.email = email;
        this.name = name;
        this.userId = userId;
        this.city = 2; //# === private
    }
}
const hitesh = new User("mops.com", "hitesh");
//hitesh.city 
