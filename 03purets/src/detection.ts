function detectType(val: number|string){
  if (typeof val === "string") {
    return val.toLowerCase();
  }
  return val +2
}

function provideId(id: string | null){
  if (!id) {
    console.log("please provide id");
  }
  id?.toLowerCase()
}

// function printAll(val: string | string[] | null){
//   if (val ==! null) {
//     if (typeof val === "object") {
//       for( const s of val){
//         console.log(s);  
//       }  
//     } else if (typeof val === "string"){
//       console.log(val);   
//     }
//   }
// }

interface User{
  name: string,
  email: string
}

interface Admin{
  name: string
  email: string,
  isAdmin: boolean
}

function isAdminAccount(account: User | Admin){
   if ("isAdmin" in account) {
      return account.isAdmin
   }
}


function logValue(x: Date | string){
  if (x instanceof Date) {
    console.log(x.toUTCString());
  } else {
    console.log(x.toUpperCase());
  }
}

type Fish = {swim: () => void};
type Bird = {fly: () => void};

function isFish(pet: Fish | Bird): pet is Fish{
  return (pet as Fish).swim !== undefined
}

function getFood(pet:Fish | Bird) {
  if (isFish(pet)) {
    pet
    return "fish food"
  } else{
    pet
    return " bird food"
  }
}


interface Mops{
  snoring: () => void
}
interface Doberman{
  judge: () => void
}

function isMops(dog: Mops | Doberman): dog is Mops{
  return (dog as Mops).snoring !== undefined
}

function feedingTime(dog: Mops | Doberman){
  if (isMops(dog)) {
    dog
    return "Mops is supposed to eat twice a day. reality is brutal."
  } else{
    dog
    return "Doberman is supposed to eat 4 times per day"
  }
}

interface Circle{
  kind: "circle",
  radius: number
}

interface Square{
  kind: "square"
  side: number
}

interface Rectangle{
  kind: "rectangle",
  lenght: number,
  width: number
}

type Shape = Circle | Square | Rectangle

// function getTrueShape(shape: Shape){
//   if (shape.kind === "circle") {
//     return Math.PI * shape.radius **2
//   }
//   return shape.side * shape.side
// }

function getArea(shape: Shape){
  switch(shape.kind){
    case "circle":
      return Math.PI * shape.radius **2
    case "square":
      return  shape.side * shape.side
    case "rectangle":
      return shape.lenght * shape.width
    default:
      const _defaultforshape: never = shape
      return _defaultforshape
  }
}