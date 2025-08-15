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
let counter=1;
while(counter<=10){
    console.log(counter);
    counter++;
}