// console.log("test");

const inputBox = document.querySelector("#input-box");
const listGroup = document.querySelector("#list-group");
const addTaskBtn = document.querySelector("#addTask");

// console.log(inputBox);
// console.log(listGroup);
// console.log(addTaskBtn);
let i = 0;
const addTask = () => {
  // console.log("Succes");

  let alertText = document.querySelector("h5");

  let li = document.createElement("li");
  if (inputBox.value === "") {
    alertText.innerHTML = "You need to type something!";
    return;
  } else {
    if (alertText) {
      alertText.remove();
    }
    i++;
    li.innerHTML = `Task ${i} : ${inputBox.value}`;
    listGroup.appendChild(li);
  }
  inputBox.value = "";
};

addTaskBtn.addEventListener("click", addTask);
