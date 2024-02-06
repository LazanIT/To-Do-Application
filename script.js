const inputBox = document.querySelector("#input-box");
const listGroup = document.querySelector("#list-group");
const addTaskBtn = document.querySelector("#addTask");

let i = 0;
const addTask = () => {
  let alertText = document.querySelector("h5");

  let li = document.createElement("li");
  let span = document.createElement("span");
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
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  storageData();
};

addTaskBtn.addEventListener("click", addTask);

listGroup.addEventListener(
  "click",
  (event) => {
    if (event.target.tagName === "LI") {
      event.target.classList.toggle("checked");
      storageData();
    } else if (event.target.tagName === "SPAN") {
      event.target.parentElement.remove();
      storageData();
      i--;
    }
  },
  false
);

const storageData = () => {
  localStorage.setItem("data", listGroup.innerHTML);
};
const showData = () => {
  listGroup.innerHTML = localStorage.getItem("data");
};

showData();
