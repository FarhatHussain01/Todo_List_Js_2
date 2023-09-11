const inputEL = document.querySelector("#inputEL");
const addTodoBtn = document.querySelector("#addBtn");
const removeAllTodoBtn = document.querySelector("#RemoveAll--TodoBtn");
const todoListContainer = document.querySelector("#todo---List");

let buttonIdCounter = 1;

const creatingList = function (e) {
  e.preventDefault();
  const inputValue = inputEL.value;

  if (inputValue !== "") {
    const removeButtonId = `removeTodo--Btn-${buttonIdCounter}`;
    const updateButtonId = `updateTodo--Btn-${buttonIdCounter}`;

    buttonIdCounter++;

    const listItem = document.createElement("li");
    listItem.classList.add(
      "flex",
      "w-full",
      "bg-slate-300",
      "justify-between",
      "m-auto",
      "my-1",
      "px-3",
      "py-2"
    );

    listItem.innerHTML += `<span
        class="items-start"
        class="text-xl text-white font-semibold inline-block"
        >${inputValue}</span
      >
      <div class="flex uppercase font-semibold text-white text-xl gap-3">
        <button id='${removeButtonId}' class="bg-red-500 px-2">
          Remove Todo
        </button>
        <button id='${updateButtonId}'  class="bg-blue-500 px-2">
          Update Todo
        </button>
      </div>
    `;

    todoListContainer.appendChild(listItem);

    //   To select elements by their dynamically generated IDs, you should use template literals to build the IDs and then select them with document.querySelector.

    const removeTodoBtn = document.querySelector(`#${removeButtonId}`);
    const updateTodoBtn = document.querySelector(`#${updateButtonId}`);

    removeTodoBtn.addEventListener("click", () =>
      removeSpecificTodo(removeButtonId)
    );
    updateTodoBtn.addEventListener("click", () =>
      updateSpecificTodo(updateButtonId)
    );
  } else {
    alert("first add the discription");
  }
};

function removeSpecificTodo(id) {
  let toRemoveTodo = document.querySelector(`#${id}`);
  //   toRemoveTodo.parentNode.parentNode.remove();

  // if toRemoveTodo is present
  if (toRemoveTodo) {
    // selecet the item and remove the grandparent of it which is li
    toRemoveTodo.parentNode.parentNode.remove();
  }
}

function updateSpecificTodo(id) {
  let toupdateTodo = document.querySelector(`#${id}`);
  //   to update the value using prompt
  //   let inputUpdateVal = prompt("update you discription");

  let inputUpdateVal = inputEL.value;

  if (toupdateTodo) {
    // toupdateTodo.parentNode.parentNode.firstChild.textContent =inputUpdateVal
    toupdateTodo.parentNode.parentNode.firstChild.textContent = inputUpdateVal;
  }
}

removeAllTodoBtn.addEventListener("click", (e) => {
  e.preventDefault();
  todoListContainer.innerHTML = " ";
});
addTodoBtn.addEventListener("click", creatingList);
