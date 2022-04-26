let result = document.querySelector('.value');
let buttons = document.querySelectorAll('span');

// add a click event on all calculator buttons
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', calc);
}

// declare a global variable to use it every time the user clicks on =
let count = 0;
function calc(e) {
  // it checks if the count = 1, which means the user clicked '='
  // it resets the calculator and counter to '0'
  // in order to avoid the result number to the next calculation
  if (count === 1) {
    result.value = '0';
    count = 0;
  }
  // checks if the number already has a '.', and it doesn't do anything
  if (e.target.textContent.match(/[.]/) && result.value.match(/[.]/)) {
    // checks if the user clicked on one of '+ = - /'  and the last character in the input is one of the also
    // this to avoid adding two mathematical symbols like '**'
    // it gets replaced by the new one
  } else if (
    e.target.textContent.match(/[*/+-]/) &&
    result.value[result.value.length - 1].match(/[*/+-]/)
  ) {
    result.value = result.value.replace(
      result.value[result.value.length - 1],
      e.target.textContent
    );
  }
  // if the user clicks '=', it displays the result, and increment the counter
  else if (e.target.textContent === '=') {
    result.value = eval(result.value) || 0;
    count++;
  }
  // if the calculator displays '0' and th user clicks on any number, the '0' is replaced by the number
  else if (result.value === '0' && !e.target.textContent.match(/[*/+-]/)) {
    result.value = e.target.textContent;
  }
  // if not, it concat the existing value with the clicked one
  else {
    result.value += e.target.textContent;
  }
  // if 'c' is clicked it resets the calculator back to '0'
  if (e.target.textContent === 'C') {
    result.value = '0';
  }
}
