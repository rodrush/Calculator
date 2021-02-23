let div = document.querySelector(".divide");
let multi = document.querySelector(".multiply");
let subtract = document.querySelector(".subtract");
let add = document.querySelector(".addition");
let input = document.querySelector("#info");
let onOff = document.querySelector("#on");
let remove = document.querySelector(".clear");
let seven = document.querySelector(".seven");
let eight = document.querySelector(".eight");
let nine = document.querySelector(".nine");
let four = document.querySelector(".four");
let five = document.querySelector(".five");
let six = document.querySelector(".six");
let one = document.querySelector(".one");
let two = document.querySelector(".two");
let three = document.querySelector(".three");
let zero = document.querySelector(".zero");
let deci = document.querySelector(".decimal");
let final = document.querySelector(".equals");

remove.addEventListener("click", () => {
	input.value = "";
});
onOff.addEventListener("click", () => {
	if ((onOff.id = "on")) {
		input.disabled = false;
	} else {
		onOff.id = "off";
		input.disabled = true;
	}
});
///** += append to **///
div.addEventListener("click", () => {
	input.value += "/";
});
multi.addEventListener("click", () => {
	input.value += "*";
});
subtract.addEventListener("click", () => {
	input.value += "-";
});
add.addEventListener("click", () => {
	input.value += "+";
});

seven.addEventListener("click", () => {
	input.value += "7";
});
eight.addEventListener("click", () => {
	input.value += "8";
});
nine.addEventListener("click", () => {
	input.value += "9";
});
four.addEventListener("click", () => {
	input.value += "4";
});
five.addEventListener("click", () => {
	input.value += "5";
});
six.addEventListener("click", () => {
	input.value += "6";
});
one.addEventListener("click", () => {
	input.value += "1";
});
two.addEventListener("click", () => {
	input.value += "2";
});
three.addEventListener("click", () => {
	input.value += "3";
});
zero.addEventListener("click", () => {
	input.value += "0";
});
deci.addEventListener("click", () => {
	input.value += ".";
});

final.addEventListener("click", () => {
	let a = eval(input.value);
	input.value = Math.round((a + Number.EPSILON) * 100) / 100;
});
