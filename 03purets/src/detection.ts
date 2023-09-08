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
//   if (val) {
//     if (typeof val === "object") {
//       for( const s of val){
//         console.log(s);  
//       }  
//     } else if (typeof val === "string"){
//       console.log(val);   
//     }
//   }
// }