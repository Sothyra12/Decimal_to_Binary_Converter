/* script.js */

const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");

// test or check the input value when the convert button is clicked
const checkUserInput = () => {
  console.log(numberInput.value);
};

// the click event takes a reference to checkUserInput function - reference is not called with ()
convertBtn.addEventListener("click", checkUserInput);