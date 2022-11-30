const inputUsername = document.getElementById("inputUsername");
const inputEmail = document.getElementById("inputEmail");

const usernameSuccessPara = document.getElementById("usernameSuccessPara");
const usernameFaliurePara = document.getElementById("usernameFaliurePara");
const emailSuccessPara = document.getElementById("emailSuccessPara");
const emailFaliurePara = document.getElementById("emailFaliurePara");

let greenclass =
  "bg-green-50 border border-green-500 text-green-900 placeholder-green-700  focus:ring-green-500 focus:border-green-500";

let redclass;

redclass = String(
  "bg-red-50 border-red-500 text-red-900 placeholder-red-700 focus:ring-red-500 focus:border-red-500 dark:bg-red-100 dark:border-red-400"
);

inputUsername.addEventListener("onkeyup", () => {
  console.log(inputUsername.value);
  if (inputUsername.value.length >= 8) {
    inputUsername.classList.add();
    usernameSuccessPara.classList.remove("hidden");
  } else {
    inputUsername.classList.add(redclass);
    usernameFaliurePara.classList.remove("hidden");
  }
});

inputEmail.addEventListener("onkeyup", () => {
  console.log("keyup");
  if (inputEmail.value.length >= 8) {
    inputEmail.classList.add();
    emailSuccessPara.classList.remove("hidden");
  } else {
    inputEmail.classList.add();
    emailFaliurePara.classList.remove("hidden");
  }
});
