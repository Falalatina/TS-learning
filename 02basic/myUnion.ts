let score: number | string = 33

score = 44
score = "66"
type UseR = {
  name: string,
  id: number
}

type Admin = {
  username: string,
  id: number
}

let kara: UseR | Admin = {name: "kara", id: 222}

kara = {username: "hc", id: 222}

// function getDBId(id: number|string){
//   console.log(`bd id is ${id}`);
// }

function getDBId(id: number|string){
    if(typeof id ==="string"){
      id.toUpperCase();
    }
  }
getDBId(2);
getDBId("2");

//array

const data: number[] = [1,2,3,4]
const data2: string[] = ["1","2","3"]
const data3: (string | number)[] = [1,2,3,"4"]

let pi: 3.14 = 3.14

let seatAllotment: "sisle"|"middle"|"window";
seatAllotment = "sisle"
//seatAllotment = "crew"