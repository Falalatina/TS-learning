class Dog{


  constructor(name,breed,age){
    this.name = name;
    this.breed = breed;
    this.age = age;
  }

  set whatDoggo(breedX){
    this.breed = breedX.toUpperCase();
  }
  
  snoring(){
    console.log(`${this.name} is snoring`);
  }
  get judge(){
    console.log(`${this.breed} is judging you!`);
  }
}

let doggo1 = new Dog('Brutus', 'Mops', 15);

doggo1.judge;
doggo1.snoring();

doggo1.whatDoggo = "Doberman";

doggo1.judge;