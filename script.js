/* script.js */

const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");
const animationContainer = document.getElementById("animation-container");
const animationData = [
  {
    inputVal: 5,
    addElDelay: 1000
  },
  {
    inputVal: 2,
    addElDelay: 1500
  },
  {
    inputVal: 1,
    addElDelay: 2000
  }
];

// recursive function to convert decimal to binary
const decimalToBinary = (input) => {
  
  // base case - when the input is 0, the function will stop calling itself to avoid infinite loop
  if (input === 0 || input === 1) {

    // return the input value as a string using String() function
    return String(input); 
  } else {
    return decimalToBinary(Math.floor(input / 2)) + (input % 2);
  }
};

const showAnimation = () => {
  result.innerText = "Call Stack Animation";

  animationContainer.forEach((obj) => {
    setTimeout(() => {
      animationContainer.innerHTML += `
        <p id="${obj.inputVal}" class="animation-frame">
          decimalToBinary(${obj.inputVal})
        </p>
      `;
    }, obj.addElDelay);
  });
};


// test or check the input value when the convert button is clicked
const checkUserInput = () => {

  // store the input value as an integer using parseInt() function for better performance practices
  const inputInt = parseInt(numberInput.value);

  if (
    !numberInput.value ||
    isNaN(inputInt) ||
    inputInt < 0
  ) {
    alert("Please provide a decimal number greater than or equal to 0");
    return;
  }


  if ( inputInt === 5) {
    showAnimation();
    return;
  }


  result.textContent = decimalToBinary(inputInt);
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
