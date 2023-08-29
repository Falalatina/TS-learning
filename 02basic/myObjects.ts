// const User ={
//   name: 'kara',
//   email: 'mops123@eu.pl',
//   isActive: true
// }

// function createUser({name: string, isPaid: boolean}){}

// let newUser = {name: 'kara', isPaid: false, email: "@a.com"};
// createUser(newUser);

//  function createCourse():{name: string, price: number}{
//   return {name: 'reactjs', price: 399}
//  }

// type User ={
//   name: string,
//   email: string,
//   isActive: boolean 
// }

// function createUser(user: User):User{
//   return user;
// }

// createUser({name:"wiki",email:"mops",isActive:true});



type User = {
  readonly _id: string
  name: string
  email: string
  isActive: boolean
  creditDetail?: number
}

let myUser: User = {
  _id: "123",
  name: "h",
  email: "h@h.com",
  isActive: true
}

type cardNumber = {
  cardNumber: string
}

type cardDate= {
  cardDate: string
}

type cardDetails = cardNumber & cardDate & {
  cvv: number
}

myUser.email = "hello";





export{}