var person={
    firstName:"Tito ",
    lastName:"Joel ",
    age:" 30 years old",
    eyeColor:"Blue"
};

document.getElementById("azaboi").innerHTML=person.firstName + person.lastName + " is" + person.age +" and has " + person.eyeColor +" eye color";

const car={
    brand: " BMW",
    color: "Red ",
    yearOfProduction:2025,
    country:"German"
};

document.getElementById('mchumba').innerHTML= "Hamisi owns a "+car.color + " " + car.brand + ' from '+car.country + 
    " that has been manufactured on "+car.yearOfProduction;