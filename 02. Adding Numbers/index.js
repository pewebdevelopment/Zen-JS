const mybtn = document.getElementById("mybtn");

// const Number1 = document.getElementById("Num1");
// const Number2 = document.getElementById("Num2");

// const btn = document.querySelector("xyz");

console.log("JS Connected");

// let number1, number2, sum;

// number1 = Number(prompt("Enter Num 1"));
// number2 = Number(prompt("Enter Num 2"));

// number1 = Number(document.getElementById("Num1").value);
//number1 = Number1.value;
// number2 = Number(document.getElementById("Num2").value);

if (mybtn) {
  mybtn.addEventListener("click", function () {
    number1 = Number(document.getElementById("Num1").value);
    number2 = Number(document.getElementById("Num2").value);
    console.log("mybtn is clicked");
    console.log("Number1:", number1);
    console.log("Number2:", number2);
    sum = number1 + number2;
    console.log("Sum:", sum);
  });
}
