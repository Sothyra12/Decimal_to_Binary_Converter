/* script.js */

const callStack = [
  'a(): returns "freeCodeCamp " + b()',
  'b(): returns "is " + c()',
  'c(): returns "awesome!"'
];

const a = () => {
  return "freeCodeCamp " + b();
};

const b = () => {
  return "is " + c();
};

const c = () => {
  return "awesome!";
};

console.log(a());


const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");

const decimalToBinary = (input) => {
  
  let binary = "";

  if (binary === 0) { 
    binary = "0";
  }
  
  while (input > 0) {
    binary = (input % 2) + binary;
    input = Math.floor(input / 2);
  }

  result.innerText = binary;
};

// test or check the input value when the convert button is clicked
const checkUserInput = () => {
  if (
    !numberInput.value ||
    isNaN(parseInt(numberInput.value)) ||
    parseInt(numberInput.value) < 0
  ) {
    alert("Please provide a decimal number greater than or equal to 0");
    return;
  }

  decimalToBinary(parseInt(numberInput.value));
  // clear the input field after conversion so that user can enter another number without deleting the previous one
  numberInput.value = "";
};

// the click event takes a reference to checkUserInput function - reference is not called with ()
convertBtn.addEventListener("click", checkUserInput);

// check the input value when the enter key is pressed using keydown event
numberInput.addEventListener("keydown", (e) => {
  // use key property which can give to string value of the key pressed and Enter key has a value of "Enter"
  if (e.key === "Enter") {
    checkUserInput();
  }
});
