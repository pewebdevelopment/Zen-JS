const ToDosArr = [];

const inputUsername = document.getElementById("inputUsername");

const todoListItem = document.getElementById("todoListItem");

const usernameSuccessPara = document.getElementById("usernameSuccessPara");
const usernameFaliurePara = document.getElementById("usernameFaliurePara");

let myToDosListContainer = document.getElementById("myToDosListContainer");

console.log(inputUsername);
// validating thr toDos
function keyupFunc() {
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

  console.log(inputUsername.value);

  const li = document.createElement("li");
  li.innerHTML =
    `<span class = p-3 text-xl>` +
    inputUsername.value +
    `</span>` +
    `<div class="buttonscontainer">
     <button class="bg-gray-900 text-white p-3 rounded-md">Edit</button>
     <button class="bg-gray-900 text-white p-3 rounded-md">Mark Completed</button>
     <button class="bg-gray-900 text-white p-3 rounded-md">Delete</button>
     </div>`;

  li.classList.add(
    "py-2",
    "px-4",
    "w-full",
    "rounded-t-lg",
    "border-b",
    "border-gray-200",
    "dark:border-gray-600",
    "hover:bg-gray-600",
    "overflow-hidden"
  );
  myToDosListContainer.appendChild(li);

  // create a new li node
  // let todoListItem = document.createElement("li");
  // todoListItem.textContent = inputUsername.value;

  // insert a new node after the last list item
  // insertAfter(todoListItem, myToDosListContainer.lastElementChild);

  // Displaying the toDos

  // for (todo of ToDosArr) {
  //   const li = document.createElement("li");
  //   li.innerHTML = inputUsername.value;
  //   document.getElementById("myToDosListContainer").appendChild(li);
  // }

  inputUsername.value = "";
}
