let taskList = document.getElementById('taskList')
let taskInput = document.getElementById('taskInput')

function add(){
    if(taskInput.value === ""){
        alert('Enter your Task')
    }
    else{
        let task = document.createElement('li')
        task.textContent = taskInput.value
        taskList.appendChild(task)
        
        let span = document.createElement('span');
        span.textContent = '\u00d7';
        task.appendChild(span)
    }
     taskInput.value = ''
     saveData()
}
taskList.addEventListener('click',(el)=>{
    if(el.target.tagName == 'LI'){
        el.target.classList.toggle('checked')
        saveData()
    }
    else if(el.target.tagName == 'SPAN'){
        el.target.parentElement.remove()
        saveData()
    }
})
function saveData(){
    localStorage.setItem("tasks",taskList.innerHTML)
}
function showData(){
    taskList.innerHTML = localStorage.getItem('tasks')
}
saveData()
