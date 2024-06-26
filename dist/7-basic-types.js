"use strict";
//string
const a = '';
const b = '';
const c = ``; //템플릿 리터럴
let myName = 'Steve';
let message = `Hello ${myName}`;
//number
let n = 100;
let count = 10;
let price = 9.99;
let temperature = -15;
let distance = 3.4e-5;
let total = count * price;
let average = total / 2;
let infinity = Infinity;
let minusInfinity = -Infinity;
let iAmNotANumber = NaN;
//boolean
let isOpen = true;
let isCompleted = false;
if (isOpen) {
    console.log('hello we are open!');
}
if (!isCompleted) {
    console.log('job not complete');
}
let isAvailable = isOpen && !isCompleted;
//null
let user = null;
function login(userName) {
    user = userName;
}
function logout() {
    user = null;
}
login('Joey');
logout();
//any
let someValue;
someValue = false;
someValue.toFixed();
