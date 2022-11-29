const factorialPara = document.getElementById("factorial");
const input = document.getElementById("inputbox");

function findfactorial(n) {
  let factorial = 1;

  for (i = 1; i <= n; i++) {
    factorial = i * factorial;
  }
  console.log(factorial);
  factorialPara.innerText = factorial;
}

function handleclick() {
  let x = input.value;
  console.log(x);
  if (isNaN(x)) {
    console.log("Please enter a valid number");
    window.alert("Please enter a valid number");
    input.value = "";
  } else {
    findfactorial(x);
  }
}
