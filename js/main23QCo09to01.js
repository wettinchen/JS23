// Web Storage API

const myArray = ["eat", "sleep", "code"];
const myObject = {
    name: "Dave",
    hobbies: ["eat", "sleep", "code"],
    logName: function () {
        console.log(this.name);
    }
};

sessionStorage.setItem("mySessionStore", JSON.stringify(myObject));
const mySessionData = JSON.parse(sessionStorage.getItem("mySessionStore"));
console.log(mySessionData);