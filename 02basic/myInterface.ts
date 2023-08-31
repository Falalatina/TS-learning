interface User {
  readonly dbId:number,
  email:string,
  userId: number,
  googleId?: string
  //startTrial: () => string
  startTrial(): string //2 metoda
}

const hitesh: User = { dbId: 22, email: "hhh", userId: 2211,
startTrial: () => {
  return "trail start";
}
}

hitesh.email = 'h@hc.com'
