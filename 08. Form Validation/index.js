const inputUsername = document.getElementById("inputUsername");
const inputEmail = document.getElementById("inputEmail");

const usernameSuccessPara = document.getElementById("usernameSuccessPara");
const usernameFaliurePara = document.getElementById("usernameFaliurePara");
const emailSuccessPara = document.getElementById("emailSuccessPara");
const emailFaliurePara = document.getElementById("emailFaliurePara");

console.log(inputUsername);
console.log(inputEmail);

let greenclass =
  "bg-green-50 border border-green-500 text-green-900 placeholder-green-700  focus:ring-green-500 focus:border-green-500";

let redclass;

redclass = String(
  "bg-red-50 border-red-500 text-red-900 placeholder-red-700 focus:ring-red-500 focus:border-red-500 dark:bg-red-100 dark:border-red-400"
);

function keyupFunc() {
  console.log("keyup");
  console.log(inputUsername.value);
  if (inputUsername.value.length >= 8) {
    inputUsername.classList.add("greenclass");
    usernameSuccessPara.classList.remove("hidden");
    usernameFaliurePara.classList.add("hidden");
  } else {
    inputUsername.classList.add("redclass");
    usernameFaliurePara.classList.remove("hidden");
    usernameSuccessPara.classList.add("hidden");
  }
}

inputUsername.addEventListener("keyup", keyupFunc);

inputEmail.addEventListener("keyup", () => {
  console.log("keyup");
  if (inputEmail.value.length >= 8) {
    inputEmail.classList.add();
    emailSuccessPara.classList.remove("hidden");
    emailFaliurePara.classList.add("hidden");
  } else {
    inputEmail.classList.add();
    emailFaliurePara.classList.remove("hidden");
    emailSuccessPara.classList.add("hidden");
  }
});

function handleclick() {
  console.log("yolo");
}
