let inputBox = document.querySelector("#input");

document.querySelector("#memoryClear").disabled = true;
document.querySelector("#memoryPlus").disabled = true;
document.querySelector("#memoryMinus").disabled = true;
document.querySelector("#memoryRecall").disabled = true;

function input(n) {
  inputBox.value += n;
}

function back() {
  inputBox.value = inputBox.value.slice(0, -1);
}

function clearAll() {
  inputBox.value = "";
}

function calcEqual() {
  inputBox.value = eval(inputBox.value);
}

function memoryStore() {
  localStorage.setItem("number", inputBox.value);
  document.querySelector("#memoryStore").disabled = true;
  document.querySelector("#memoryClear").disabled = false;
  document.querySelector("#memoryPlus").disabled = false;
  document.querySelector("#memoryMinus").disabled = false;
  document.querySelector("#memoryRecall").disabled = false;
}

function memoryRecall() {
  let number = localStorage.getItem("number");
  if (number) {
    inputBox.value = number;
  }
}

function memoryClear() {
  localStorage.removeItem("number");
  document.querySelector("#memoryStore").disabled = false;
  document.querySelector("#memoryClear").disabled = true;
  document.querySelector("#memoryPlus").disabled = true;
  document.querySelector("#memoryMinus").disabled = true;
  document.querySelector("#memoryRecall").disabled = true;
}

function memoryPlus() {
  inputBox.value = eval(localStorage.getItem("number") + "+" + inputBox.value);
  localStorage.setItem("number", inputBox.value);
}

function memoryMinus() {
  inputBox.value = eval(localStorage.getItem("number") + "-" + inputBox.value);
  localStorage.setItem("number", inputBox.value);
}

function deg() {
  inputBox.value = ((180 / Math.PI) * inputBox.value).toFixed(2);
}
function fe() {
  inputBox.value = Number.parseFloat(inputBox.value).toExponential();
}

function showDropdown1() {
  let myDropdown1 = document.querySelector("#myDropdown1");
  if (myDropdown1.style.display == "block") {
    myDropdown1.style.display = "none";
  } else {
    myDropdown1.style.display = "block";
  }
}

function showDropdown2() {
  let myDropdown2 = document.querySelector("#myDropdown2");
  if (myDropdown2.style.display == "block") {
    myDropdown2.style.display = "none";
  } else {
    myDropdown2.style.display = "block";
  }
}

function sin() {
  inputBox.value = Math.sin((inputBox.value * Math.PI) / 180).toFixed(2);
}
function cos() {
  inputBox.value = Math.cos((inputBox.value * Math.PI) / 180).toFixed(2);
}
function tan() {
  inputBox = Math.tan((inputBox.value * Math.PI) / 180).toFixed(2);
}

function abs() {
  inputBox.value = Math.abs(inputBox.value).toFixed(2);
}
function floor() {
  inputBox.value = Math.floor(inputBox.value);
}
function ceil() {
  inputBox.value = Math.ceil(inputBox.value);
}

function changeSign() {
  if (inputBox.value.startsWith("-")) {
    inputBox.value = inputBox.value.substring(1);
  } else {
    inputBox.value = "-" + inputBox.value;
  }
}

function factorial() {
  let num = Number(inputBox.value);
  let fact = 1;
  for (let i = 2; i <= num; i++) {
    fact = fact * i;
  }
  inputBox.value = fact;
}

function toPower() {
  let num = Number(inputBox.value);
  let ans = 1;
  for (let i = 1; i <= num; i++) {
    ans = ans * 2;
  }
  inputBox.value = ans;
}

function pi() {
  inputBox.value = Math.PI.toFixed(2);
}

function e() {
  let val = Math.exp(1);
  if (inputBox.value.length === 0) {
    inputBox.value = Math.exp(1).toFixed(2);
  } else {
    inputBox.value = (eval(inputBox.value) * val).toFixed(2);
  }
}

function square() {
  let num = Number(inputBox.value);
  num *= num;
  inputBox.value = num;
}

function fraction() {
  let num = Number(inputBox.value);
  num = 1 / num;
  inputBox.value = num.toFixed(2);
}

function modulus() {
  if (inputBox.value.startsWith("-")) {
    inputBox.value = inputBox.value.substring(1);
  }
}

function exp() {
  inputBox.value = Math.exp(inputBox.value).toFixed(2);
}

function sqrt() {
  inputBox.value = Math.sqrt(inputBox.value).toFixed(2);
}

function log() {
  inputBox.value = Math.log10(inputBox.value).toFixed(4);
}
function ln() {
  inputBox.value = Math.log(inputBox.value).toFixed(4);
}

function pow() {
  let power = inputBox.value;
  inputBox.value = Math.pow(10, power);
}
