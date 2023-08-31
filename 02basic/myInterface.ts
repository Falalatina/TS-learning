interface User {
  readonly dbId:number,
  email:string,
  userId: number,
  googleId?: string
  //startTrial: () => string
  startTrial(): string //2 metoda
  getCoupon(couponname:string, value:number):number
}

const hitesh: User = { dbId: 22, email: "hhh", userId: 2211,
startTrial: () => {
  return "trail start";
},
getCoupon: (name: 'kara', val: 10) =>{
  return 10;
}
}

hitesh.email = 'h@hc.com'
