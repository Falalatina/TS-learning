function addTwo(num:number) :number{
  return num + 2;
}

function getUpper(val:string){
  let w = val.toUpperCase();
  return w;
}

function signUpUser(name: string, email:string, password:boolean = false){

}

let LoginUser = (email:string,name:string,isPaid:boolean) => {

}

getUpper('88m');
addTwo(5);
signUpUser('name','mops');


// function getValue(myVal: number){
//   if(myVal >5){
//     return true;
//   }
//   return '200 OK';
// }

const getHello = (s:string):string => {
  return ""
}

const heros = ["thor", "spiderman", "ironman"]

heros.map(hero =>{
  return `hero is ${hero}`
});

function consoleError(errmsg: string): void{
  console.log(errmsg);
  
}

function handleError(errmsg: string): never{
  console.log(errmsg);
  throw new Error(errmsg);
  
}

export{}