// Web Storage API

const myObject = {
    name: "Dave",
    logName: function () {
        console.log(this.name);
    }
};

const myArray = ["eat", "sleep", "code"];

sessionStorage.setItem("mySessionStore", myArray);
const mySessionData = sessionStorage.getItem("mySessionStore");
console.log(mySessionData);