"use strict";

window.addEventListener("DOMContentLoaded", start);

const allStudents = [];

//making a prototype for student objects
const Student = {
    firstname: "",
    middlename: "",
    lastname: "",
    nickname: "",
    gender: "",
    house: "",
};

function start(){
    console.log("ready");

    loadJSON();
}

//fetching the json file
function loadJSON(){
fetch ("https://petlatkea.dk/2021/hogwarts/students.json")
.then(response => response.json())
.then( jsonData => {
    //When loaded, clean objects
    prepareObjects(jsonData);
});
console.log("loaded");
} 

function prepareObjects(jsonData) {
jsonData.forEach(jsonObject => {

//create student object
const aStudent = Object.create(Student);

//Finde navnene ved at definerer mellemrum
const firstSpace = jsonObject.fullname.trim().indexOf(" ");
const lastSpace = jsonObject.fullname.trim().lastIndexOf(" ");

//Definere navne / adskille dem ved mellemrum
aStudent.firstName = jsonObject.fullname.trim().substring (0,firstSpace);
aStudent.middleName = jsonObject.fullname.substring(firstSpace,lastSpace);

if (aStudent.middleName.includes('"')) {
    aStudent.nickName = aStudent.middleName;
    aStudent.middleName = "";
}

aStudent.lastName = jsonObject.fullname.trim().substring(lastSpace).trim();

//______________
//Gøre første bogstav stort - firstname
aStudent.firstNameCaptial = aStudent.firstName.substring(0, 1).toUpperCase() + aStudent.firstName.substring(1, firstSpace).toLowerCase();
// //Gøre første bogstav stort - middlename
aStudent.middleNameCaptial = aStudent.middleName.substring(0, 1).toUpperCase() + aStudent.middleName.substring(1, aStudent.middleName.length).toLowerCase(aStudent.middleName.length);
// //Gøre første bogstav stort - lastname 
aStudent.lastNameCaptial = aStudent.lastName.substring(0,1).toUpperCase() + aStudent.lastName.substring(1).toLowerCase(aStudent.middleName.length);
// //Gøre første bogstav stort - nickname
aStudent.middleNameCapital = aStudent.middleName.substring(0, 1).toUpperCase() + aStudent.middleName.substring(1).toLowerCase(aStudent.middleName.length);

// gender
aStudent.gender = jsonObject.gender.substring(0).trim();
    aStudent.genderCapital =
      aStudent.gender.substring(0, 1).toUpperCase() +
      aStudent.gender.substring(1).toLowerCase();

// house
aStudent.house = jsonObject.house.substring(0).trim();
aStudent.houseCapital =
  aStudent.house.substring(0, 1).toUpperCase() +
  aStudent.house.substring(1).toLowerCase();

//Adding all the objects into the array
aStudent.firstName = aStudent.firstNameCapital;
aStudent.middleName = aStudent.middleNameCapital;
aStudent.lastName = aStudent.lastNameCapital;
aStudent.nickName = aStudent.nickNameCapital;
aStudent.gender = aStudent.genderCapital;
aStudent.house = aStudent.houseCapital;
allStudents.push(aStudent);
console.log(aStudent);
});

displayList();
}

function displayList() {
    //clear the list
    document.querySelector("#list tbody").innerHTML = "";

    //build a new list
    allStudents.forEach(displayStudent);
}

function displayStudent (student) {
    //create clone
    const klon = document.querySelector("template#student").content.cloneNode(true);

    //set clone data
    klon.querySelector("[data-field=firstname]").textContent = student.firstName;
    klon.querySelector("[data-field=lastname]").textContent = student.lastName;
    klon.querySelector("[data-field=middlename]").textContent = student.middleName;
    klon.querySelector("[data-field=nickname]").textContent = student.nickName;
    klon.querySelector("[data-field=gender]").textContent = gender.house;
    klon.querySelector("[data-field=house]").textContent = student.house;

    // append clone to list
    document.querySelector("#list tbody").appendChild(klon);

}

