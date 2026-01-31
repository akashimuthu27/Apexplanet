let list = document.getElementById("list");

function loadTasks() {
    list.innerHTML = localStorage.getItem("tasks") || "";
}
loadTasks();

function addTask() {
    let task = document.getElementById("task").value;
    if (task === "") return;

    let li = `<li>${task} <button onclick="remove(this)">X</button></li>`;
    list.innerHTML += li;

    localStorage.setItem("tasks", list.innerHTML);
    document.getElementById("task").value = "";
}

function remove(btn) {
    btn.parentElement.remove();
    localStorage.setItem("tasks", list.innerHTML);
}
