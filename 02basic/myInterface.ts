interface User {
  readonly dbId:number,
  email:string,
  userId: number,
  googleId?: string
  //startTrial: () => string
  startTrial(): string //2 metoda
  getCoupon(couponname:string, value:number):number
}

interface User{
  githubToken?: string
}

interface Adminek extends User {
  role: 'admin' | 'ta' | 'learner'
}

const hitesh: Aminek = { dbId: 22, email: "hhh", userId: 2211,
startTrial: () => {
  return "trail start";
},
githubToken: 'tttfdgsyhfgh',
getCoupon: (name: 'kara', val: 10) =>{
  return 10;
}
}

hitesh.email = 'h@hc.com'
