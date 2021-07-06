// タスクを表示させるためのきっかけ(trigger)表示場所(target)値(value)を定義
const addTaskTrigger = document.getElementsByClassName("addTask-trigger")[0];
const addTaskTarget = document.getElementsByClassName("addTask-target")[0];
const addTaskValue = document.getElementsByClassName("addTask-value")[0];

//削除ボタンを押した時の挙動
const removeTask = (removeButton) => {
  const targetTask = removeButton.closest("li");
  addTaskTarget.removeChild(targetTask);
};

//完了ボタンを押したときの挙動
const completeTask = (completeButton) => {
  const targetTask = completeButton.closest("li");
  targetTask.classList.add("isComplete");
  targetTask.removeChild(completeButton);
};

//タスクを表示するための部材の情報
const addTask = (task) => {
  const listItem = document.createElement("li");
  const removeButton = document.createElement("button");
  const completeButton = document.createElement("button");

  removeButton.innerText = "消すで！";
  removeButton.style.marginLeft = "25px";
  removeButton.style.float = "right";
  removeButton.style.background = "red";
  removeButton.style.color = "white";
  removeButton.addEventListener("click", () => removeTask(removeButton));

  completeButton.innerText = "やったで！";
  completeButton.style.marginLeft = "15px";
  completeButton.style.float = "right";
  completeButton.style.background = "lawngreen";
  completeButton.style.color = "white";
  completeButton.addEventListener("click", () => completeTask(completeButton));

  listItem.innerText = task;
  listItem.style.height = "40px";
  listItem.style.fontSize = "x-large";
  listItem.appendChild(completeButton);
  listItem.appendChild(removeButton);
  addTaskTarget.appendChild(listItem);
};

//タスクをフォームに入力し保存ボタンを押したときの挙動
addTaskTrigger.addEventListener("click", (event) => {
  const task = addTaskValue.value;
  addTask(task);
  addTaskValue.value = "";
});
