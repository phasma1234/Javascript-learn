let userName='Izella Malinya';
const profileNmae='Tito Linti';

console.log(userName);
console.log(profileNmae);
let age=23;

console.log(age);

if (age>18) {
    console.log('The person is Adult');

};

let password = 12345;
console.log(password==123);

console.log(5<=6);


let dbPassword= 123456;

let enteredPassword= 123456;

let enteredUsername=" Harry Kapinga";

//if statement 

if (dbPassword==enteredPassword) {

    console.log("Welcome "+ enteredUsername);

//else statement
} else {
  console.log("Sorry you password is incorrect");  
};

// else if condition

let language ="German";

if(language=="English"){
console.log("Welcome and feel comfortable to use English language");
}
else if(language == "Spanish"){
    console.log("Feel free to use spanish language");
}

else if(language=="German"){
    console.log("Welcome and feel free to use German language");
}
else(
    window.alert("Sorry we fail to identify such kind of " + language + " language." )
);


// While loop condition

let counter = 1;
while(counter>=-10){
    console.log(counter);
    counter--;
}

//for loop

for (let i= 0; i < 30 ; i++) {
    console.log(i);
}
// Function lesson
function sayHellow() {
    console.log('Hellow Mr Phasma');
    console.log(239+234);  
}
sayHellow();

//Paremeters and Arguments

function addNumbers(num1, num2){
    console.log(num1+num2);
}

function substractNumbers(num1, num2) {
    console.log(num1-num2);
}

function multiplyNumbers(num1, num2) {
    console.log(num1*num2);
}

function divideNumbers(num1, num2) {
    console.log(num1/num2);
}

addNumbers(12,19);
substractNumbers(452,149);
multiplyNumbers(12,19);
divideNumbers(42,149);

function myNames(firstName, secondName){
    console.log(firstName, secondName);
}
myNames('Tito ', 'Linti');
myNames('Martin ', 'Linti');

// Check the Legal driving age

        let drivingAge=13;
        if (drivingAge<18) {
            console.log('Sorry, you dont meet the age requirements');   
        }else{
            console.log('Congraturation you meet the minimal age requirement');
        }

// Scissor paper effects

        document.getElementById('rock').onclick= function (){
            alert('This is rock effect')
        };

        document.getElementById('scissor').onclick= function(){
            alert('This is sciccor effect')
        }
        document.getElementById('paper').onclick=function() {
            alert('This is paper effect')
        }

// Events in Javascript
        const mkoa=document.getElementById('mikoa');
        mkoa.addEventListener('change',function(){
        document.getElementById('demo').textContent=this.value;
        });

        const myButton =document.getElementById('mouse').addEventListener('mouseover', function () {
        alert('You have mouseOver');
        });


// MouseOver event
        const myHoverEffect = document.getElementById('demos');
        myHoverEffect.addEventListener('mouseover', function(){
            myHoverEffect.innerHTML='You have succesfully hover Me'
        });

// Keypress events
const myAge=document.getElementById('age');
myAge.addEventListener('keypress', function(){
    document.getElementById('myage').innerHTML=myAge.value;
});

const myFocus=document.getElementById('foc1');
myFocus.addEventListener('focus', function(){
    myFocus,this.style.background= 'darkblue';
});



        
