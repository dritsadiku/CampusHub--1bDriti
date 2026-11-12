// // document.getElementById("message").innerHTML = "Welcome to Camous Hub";
// // document.getElementById("message").textContent = "Hello World";
// // document.write("Hello JS");

// let name = "Arta";
// let age = 12;

// console.log(name);
// console.log(age);

// /* ky eshte nje koment i gjate */

// let participants = 25;
// // participants = 30;
// console.log(participants);

// const eventName = "PG Club";

// var university = "Uni PR";
// university = "UKZ";
// console.log(university);

// if(true){
//     let greeting = "Hello";
//     const number = 10;
//     var xy=false
// }

// // console.log(greeting);
// // console.log(number);
// console.log(xy);

// let eventLocation;
// let description = null;

// console.log(typeof eventname); //string
// console.log(typeof participants); //number
// console.log(typeof xy); //boolean
// console.log(typeof eventLocation); //undefined
// console.log(typeof description); //object

// console.log(10+5);
// console.log(10/5); //...

// console.log(5 == "5"); //true - vlera
// console.log(5 === "5"); //false - tipi

// function changeMessage(){
//     document.getElementById("message").style.color = "red";
// }




function changeDescription(){
    document.getElementById("eventDescription").innerHTML = "Ndrrimi i tekstit";

}
function changeTextSize(){
    document.getElementById("eventDescription").style.fontSize = "24px";

}
function hideInformation(){
    document.getElementById("eventDescription").innerHTML = " ";

}
function showInformation(){
    document.getElementById("eventDescription").innerHTML = "Join us to learn more about modern web development.";

}
let registrationOpen = true;

function showMessage(){
 if (registrationOpen == true){
    alert("Registration is open!");
 }
 else{
    alert("Registration is closed!");
 }
}

