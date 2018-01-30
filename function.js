var tasks = [];
function addTask(task) {
    tasks.push(task);
    console.log("Element " + task + " Added to Array");
    var count = tasks.length;
    return count;
}
function listAllTasks() {
    tasks.forEach(function (task) {
        console.log(task);
    });
}
addTask("test");
addTask("Hello");
listAllTasks();
