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
    `<div id="toDoItemContainer" class="inline-flex gap-2 justify-end items-center">` +
    `<input checked id="teal-checkbox" type="checkbox" value="" class="w-4 h-4 text-teal-600 bg-gray-100 rounded border-gray-300 focus:ring-teal-500 dark:focus:ring-teal-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">` +
    `<span class = "w-3/4 mx-0">` +
    inputUsername.value +
    `</span>` +
    `<div id="buttonscontainer" class="inline-flex gap-2">
     <button class="bg-gray-900 text-white p-3 rounded-md">Edit</button>
     <button class="bg-gray-900 text-white p-3 rounded-md">Delete</button>
     </div>` +
    `</div>`;

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
