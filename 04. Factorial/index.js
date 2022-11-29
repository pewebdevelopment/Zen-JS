const factorialPara = document.getElementById("factorial");

function findfactorial(n) {
  let factorial = 1;

  for (i = 1; i <= n; i++) {
    factorial *= factorial;
  }
  console.log(factorial);
  factorialPara.innerText = factorial;
}

function handleclick() {
  findfactorial(Number(document.getElementById("number").value));
}
