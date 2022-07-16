const button = document.querySelector('button');

const b1 = document.getElementById("addSeven");
const b2 = document.getElementById("calc");
const b3 = document.getElementById("cappButton");
const b4 = document.getElementById("lastButton");
const text1 = document.getElementById("result");

const text2 = document.getElementById("capd");

//add7 function
function add7() {
    const inputNumber = prompt("Which number would you like to add 7 to?");
    const numberConv = Number(inputNumber);
    alert(`The number ${numberConv} + 7 equals: ${numberConv + 7}`)
}

b1.addEventListener('click', add7);

//multiply function
function multiply(uno, dos) {
    let first = document.getElementById("uno").value;
    let second = document.getElementById("dos").value;

    text1.textContent = Number(first) * Number(second);

}

b2.addEventListener('click', multiply);

//capitalize function
function capitalize(uncappedString) {
    let uncapString = document.getElementById("uncap").value;
    let slicedString = uncapString.slice(1, uncapString.length).toLowerCase();
    text2.textContent = uncapString.charAt(0).toUpperCase() + slicedString;

}

b3.addEventListener('click', capitalize);

//lastLetter function

function lastLetter() {
    let fullString = document.getElementById("fullStr").value;
    alert(`The last letter is: ${fullString.slice(-1)}`);
}

b4.addEventListener('click', lastLetter);

