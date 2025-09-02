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


const friend={
    firstName:"Reyan ",
    lastName:"Hatun ",
    age: 30,
    hobby:" hypocricy",
    fullname:function(){
        return "My friend name is "+ this.firstName + this.lastName +" with "+ this.age + " years Old and she preferss "+ this.hobby;
    }
};

document.getElementById('raya').textContent=friend.fullname();

const str= "Hellow\tWorld";
const str1= "Hellow \" Raya Juma \"";
const str2="Hellow \\ Raya Juma\\";
const str3 ="Hellow\n Tamim";

document.getElementById('output').innerHTML= 
"String 1: "+str + "<br>" +
"String 2: "+ str1 + "<br>" +
"String 3: " + str2 + "<br>"+
"String 4: "+ str3 + "<br>";


const raya="ASDFGHHJJKJHZXCVBNMPOIUYTREWW";
document.getElementById('length').innerHTML="The string has " + raya.length + " characters";

const cars=["BMW"," Volvo "," Nissan"];
document.getElementById('isike').innerHTML=cars;


const house=["NHC", "NHIF","NPD", "POLISI"];
document.getElementById('mach').innerHTML=house[2];

document.getElementById('mach').innerHTML=house[0];


const mcharo=["JBL","Sundar","Hisense","Zec","Samsung"];
mcharo[1]="Bontel";
document.getElementById('isike').innerHTML=mcharo[1];

//1. Push Method in Arrays
const newArray=["Mangoes " , " banana " , " Tomato "];
newArray.push(" Avocado");
document.getElementById('isike1').innerHTML=newArray;

//2. Pop methods in Arrays
const buses=["Mallessas ", " Machame ", " Marangu ", " Kimbwe "];
buses.pop();
document.getElementById('isike2').textContent=buses;

//3. Unshift method in Arrays
const tribe=["Maasai ", " Meru ", " Chaga "];
tribe.unshift("Sukuma Gang");
document.getElementById('isike3').textContent=tribe;