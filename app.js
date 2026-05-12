// 1. Grab all three elements
const input = document.querySelector(".input");
const button = document.querySelector(".button");
const output = document.querySelector(".output");
// 2. Add event listener to the button
button.addEventListener("click", function () {
  // 3. Get the value of the input
  const inputValue = input.value;
  // 4. Set the value of the output
  output.value = inputValue;
});

