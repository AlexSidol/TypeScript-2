var button = document.querySelector("button");
var input1 = document.getElementById("num1");
var input2 = document.getElementById("num2");
function add(num1, num2) {
    return num1 + num2;
}
button.addEventListener("click", function () {
    console.log(add(+input1.value, +input2.value));
});
var age;
var nameV;
var toggle;
var empty;
var notInitialize;
var callback = function (a) {
    return 100 + a;
};
var anything;
anything = "Text";
anything = {};
// let anything = -20;
// anything = 'Text';
// anything = {};
age = 50;
nameV = "Max";
toggle = true;
empty = null;
notInitialize = undefined;
callback = function (a) {
    return 100 + a;
};
var some;
some = "Text";
var str;
if (typeof some === "string") {
    str = some;
}
// Незмінний масив (tuple)
var person;
person = ["Max", 21];
// Enum
var Status;
(function (Status) {
    Status[Status["LOADING"] = 0] = "LOADING";
    Status[Status["READY"] = 1] = "READY";
})(Status || (Status = {}));
// Union Type або або
var union;
// Literal Type тільки одне з двох тип однаковий
var literal;
// Типи для функцій
function showMessage(message) {
    console.log(message);
}
function calc(num1, num2) {
    return num1 + num2;
}
function customError() {
    throw new Error("Error");
}
var page2 = {
    title: "Python or Js",
    likes: 5,
    accounts: ["Alex"],
    status: "close"
};
var page1 = {
    title: "The awesome page",
    likes: 100,
    accounts: ["Max", "Anton", "Nikita"],
    status: "open",
    details: {
        createAt: "2021-01-01",
        updateAt: "2021-05-01"
    }
};
