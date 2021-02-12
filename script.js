"use strict";

window.addEventListener("DOMContentLoaded", start);

const allStudents = [];

//making a prototype for student objects
const Student = {
    firstname: "",
    middlename: "unknown",
    lastname: "",
    nickname: "unknown",
    photofilename: "",
    house: "",
}

function start(){
    console.log("ready");

    loadJSON();
}

//fetching the json file
function loadJSON(){
fetch ("students.json")
.then( response => response.json() )
.then( jsonData => {
    //When loaded, clean objects
    cleanObjects(jsonData);
});
} 

function cleanObjects(jsonData) {
jsonData.forEach( jsonObject => {

//create object
const student = Object.create(Student);
//splitting fullname by spaces
let studentData = jsonObject.fullname.split(" ");
console.log(studentData);

// firstname
let studentFirstName = studentData[0];
console.log(studentFirstName);
student.firstname = studentFirstName;

// middlename
let studentMiddleName = studentData[1];
console.log(studentMiddleName);
student.middlename = studentMiddleName;

// lastname
let studentLastName = studentData[2];
console.log(studentLastName);
student.lastname = studentLastName;

// house
let studentHouse = jsonObject.house;
console.log(studentHouse);
student.house = studentHouse;

//Adding all the objects into the array
allStudents.push(student);
});
}