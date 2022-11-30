const ToDosArr = [];

const inputUsername = document.getElementById("inputUsername");

const todoListItem = document.getElementById("todoListItem");

const usernameSuccessPara = document.getElementById("usernameSuccessPara");
const usernameFaliurePara = document.getElementById("usernameFaliurePara");

console.log(inputUsername);
// validating thr toDos
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

function handleclick() {
  ToDosArr.push(inputUsername.value);

  console.log("inputUsername.value");

  const li = document.createElement("li");
  li.innerHTML = inputUsername.value;
  document.getElementById("myToDosListContainer").appendChild(li);

  // Displaying the toDos

  // for (todo of ToDosArr) {
  //   const li = document.createElement("li");
  //   li.innerHTML = inputUsername.value;
  //   document.getElementById("myToDosListContainer").appendChild(li);
  // }

  inputUsername.value = "";
}
