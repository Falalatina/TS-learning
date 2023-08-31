interface User {
  readonly dbId:number,
  email:string,
  userId: number,
  googleId?: string
}

const hitesh: User = { dbId: 22, email: "hhh", userId: 2211}