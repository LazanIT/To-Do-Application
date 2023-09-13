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
    // console.log(event);
    // Proveravamo da je tagName li
    if (event.target.tagName === "LI") {
      event.target.classList.toggle("checked"); // Ako jeste dodajemo mu klasu "checked"
      storageData();
    } // Proveravamo da li je tagName span
    else if (event.target.tagName === "SPAN") {
      event.target.parentElement.remove(); // Ako jeste na X sklanjamo zavrseni zadatak
      storageData();
    }
  },
  false // Pomocu false omogucavamo da se unutrasnji elementi sire ka spoljasnjim
);

const storageData = () => {
  //                      name      value
  localStorage.setItem("data", listGroup.innerHTML);
};
const showData = () => {
  listGroup.innerHTML = localStorage.getItem("data");
};

showData();
