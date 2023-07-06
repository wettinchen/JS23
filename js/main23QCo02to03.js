// Web Storage API

// Not part of the DOM - refers to Window API
// Available to JS via the global variable: window

// We do not have to type window. It is implied:

const myObject = {
    name: "Dave",
    logName: function () {
        console.log(this.name);
    }
};

const myArray = ["eat", "sleep", "code"];
myObject.logName();