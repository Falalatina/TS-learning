var score = 33;
score = 44;
score = "66";
var kara = { name: "kara", id: 222 };
kara = { username: "hc", id: 222 };
// function getDBId(id: number|string){
//   console.log(`bd id is ${id}`);
// }
function getDBId(id) {
    if (typeof id === "string") {
        id.toUpperCase();
    }
}
getDBId(2);
getDBId("2");
//array
var data = [1, 2, 3, 4];
var data2 = ["1", "2", "3"];
var data3 = [1, 2, 3, "4"];
var pi = 3.14;
var seatAllotment;
seatAllotment = "sisle";
//seatAllotment = "crew"
