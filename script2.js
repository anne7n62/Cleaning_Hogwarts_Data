"use strict";

window.addEventListener("DOMContentLoaded", start);

const allStudents = [];

//Creating prototype for animal objects
const Student = {
    firstname: "",
    middlename: "",
    lastname: "",
    nickname: "",
    gender: "",
    house: ""
};


function start( ) {
    console.log("ready");

    loadJSON();
}


function loadJSON() {
    fetch("https://petlatkea.dk/2021/hogwarts/students.json")
    .then( response => response.json() )
    .then( jsonData => {
        // when loaded, prepare objects
        prepareObjects( jsonData );
    });
}

function prepareObjects( jsonData ) {
    jsonData.forEach( jsonObject => {
        // TODO: Create new object with cleaned data - and store that in the allAnimals array
        
        
        //Splitting the string by the spaces
        const student = Object.create(Student);
        let studentData = jsonObject.fullname.split(" ");
        console.log(studentData);

        //Firstname - making variable
        let firstName = studentData[0];
        console.log(firstName);
        student.firstname = firstName;

        //Middlename
        let lastName = studentData[2];
        console.log(lastName);
        student.lastname = lastName;

        //Type
        // let animalType = studentData[3];
        // console.log(animalType);
        // animal.type = animalType;

        //gender
        let gender = jsonObject.gender;
        console.log(gender);
        student.gender = gender;

        //house
        let house = jsonObject.house;
        console.log(house);
        student.house = house;

    //Adding all the objects into the array
    allStudents.push(student);
    });

    displayList();
}

function displayList() {
    // clear the list
    document.querySelector("#list tbody").innerHTML = "";

    // build a new list
    allStudents.forEach( displayStudent );
}

function displayStudent( student ) {
    // create clone
    const clone = document.querySelector("template#hogwarts_student").content.cloneNode(true);

    // set clone data
    clone.querySelector("[data-field=firstname]").textContent = student.firstName;
    clone.querySelector("[data-field=fullname]").textContent = student.fullName;
    clone.querySelector("[data-field=gender]").textContent = student.gender;
    // clone.querySelector("[data-field=age]").textContent = animal.age;

    // append clone to list
    document.querySelector("#list tbody").appendChild( clone );
}