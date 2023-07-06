// Web Storage API

const myArray = ["eat", "sleep", "code"];
const myObject = {
    name: "Dave",
    hobbies: ["eat", "sleep", "code"],
    logName: function () {
        console.log(this.name);
    }
};

localStorage.setItem("myLocalStore", JSON.stringify(myArray));
const key = localStorage.key(0);
const myLocalData = JSON.parse(localStorage.getItem("myLocalStore"));
console.log(key);