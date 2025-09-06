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

//4. Shift method in arrays
const brands=["Gucci", "Adidas", "Puma", "African Boy"];
brands.shift();
document.getElementById('isike4').textContent=brands;

//5. Length method in arrays
const mama=["Mjomba"," kaka ", " Dada ", " Shangazi "];
document.getElementById("isike5").textContent=mama.length;

//6. indexof method in arrays
const baba=["Shangazi ", "Mjomba "," Bibi", " Babu"];
document.getElementById("isike6").textContent=baba.indexOf("Shangazi ");

//7. Include methods in arrays
const bibi=["Mjukuu ", " Shangazi", " Mjomba", " Mpwa"];
document.getElementById("isike4").textContent=bibi.includes("Mjukuu ");

//8. slice methods in arrays
const linti=["Tito ","Ruth ","Joseph ","Msangi"];
let newLinti=linti.slice(2);
document.getElementById("isike4").textContent=newLinti;

//9. Splice methods in arrays
// Replace element on the array
const mjukuu=["Babu ", "Bibi","Mama","Baba"];
mjukuu.splice(1,1,"Mjomba");
document.getElementById("isike7").textContent=mjukuu;

//addition of Element on the array
const shangazi=["Mtoto","Mkubwa"];
shangazi.splice(1,0,"Mjomba","Kaka");
document.getElementById("isike8").textContent=shangazi;

//Remove an element on the array
let iaa=["dar","Arusha","dodoma","mwanza","geita"];
iaa.splice(1,2);
document.getElementById("isike9").textContent=iaa;

//ARRAY SORTING.
//1. String Sorting
const fruits=["Maembe ", "Machungwa ", "Mapapai "];
fruits.sort();
document.getElementById('isike7').textContent=fruits;

//2. Numeric Sorting
// Ascending order
const classes=[100,23,42,1234,564,3,2];
classes.sort(function(a,b)
{
    return a-b
}
);
document.getElementById('isike9').textContent=classes;

// Descending order
const room=[2,432,45,4,3,43432,56,765,42,12,2];
room.sort(function(a,b) {
    return b-a;
});
document.getElementById("raya1").textContent=room;

const numbers=[2,65746,36473,3647,0,2,313,21,1];
document.getElementById("raya2").innerHTML=numbers;

function myFunction1(){
    numbers.sort(function(a,b){
        return a-b;
    })
document.getElementById("raya2").textContent=numbers;

};

function myFunction2(){
    numbers.sort(function(a,b){
        return b-a;
    })
    document.getElementById("raya2").textContent=numbers;
};


// Finding the Lowest value in an Array
const Values=[45636,7584738,5625,123,286373,25,345,453];

document.getElementById('raya3').textContent=Values;

function lowerValue(){
    Values.sort(function(a,b){
        return a-b;
    })
    document.getElementById('raya4').textContent=Values[0];
};

// Finding the Highest value in an Array

function highValue(){
    Values.sort(function(a,b){
        return b-a;
    })
    document.getElementById('raya4').textContent=Values[0];
};

const bura=["21344", "758474","8484","748382"];

document.getElementById("raya5").innerHTML=bura;

function bura1(){
    bura.sort(function(a,b){
        return a-b;
    })
document.getElementById('raya6').innerHTML=bura[0];
};

function bura2(){
    bura.sort(function(a,b){
        return b-a;
    })
document.getElementById('raya6').innerHTML=bura[0];
};
    
//Sorting an Array of Objects.
const student=[
    {name: "Majaliwa", age: 8, street: "Kalangalala"},
    {name: "Josephat", age:32, street:"Engutototo"},
    {name:"Mwakipesile", age:27, street:"Makambako"}
];

// Comparing Street
student.sort(function(a,b){
    return a.street.localeCompare(b.street);
});

let output="";
student.forEach(function(stu){
    output+=stu.name + " " + stu.age + " " + stu.street + "<br>";
})

document.getElementById('raya7').innerHTML=output;

// Comparing as per age
student.sort(function(a,b){
    return a.age-b.age;
});

for (let i=0;i<student.length;i++ )
document.getElementById("raya8").innerHTML+= "<p>Name: "+ student[i].name + " Age: " + student[i].age + " Street: "+ student[i].street + "<br>";


const test=["math", "english","kiswahili"];
test.reverse();
document.getElementById("raya9").innerHTML=test;

// javascript Array Iteration
// For loop

const fruit=["Mangoes", "Oranges","Cucumber", "Avocado"];
for(let i=0; i<fruit.length; i++){
    document.getElementById("mary").innerHTML+=fruit[i] + "<br>";
}