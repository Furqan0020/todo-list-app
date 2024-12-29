let taskList = JSON.parse(localStorage.getItem("toDo_list")) || [];

let renderTasks = () =>{
    let todoListHtml = ''
    for(let i = 0; i<taskList.length ; i++){
        const todo = taskList[i]
        const html = `
        <p>
            <span>${i+1}</span>
            <span>${todo.text}</span> 
            <span>${todo.date}</span>
            
            <button class='del' onclick="
                taskList.splice(${i},1)
                renderTasks()
            ">Delete</button>
        </p>`
        todoListHtml+=html
    }
    document.querySelector('.container').innerHTML = todoListHtml
    //console.log(todoListHtml)
}

renderTasks()

let todo = () =>{
    let text = document.getElementById('text')
    let date = document.getElementById('date')
    let task  = text.value
    let taskDate  = date.value
    if(task.value === '' || date.value === ''){
        alert("please fill both inputs fleid name and date")
        return
    }
    else{
        taskList.push({
            'text':task,
            'date' : taskDate
        })
        localStorage.setItem('toDo_list',JSON.stringify(taskList)) 
    }
    
    console.log(taskList)
    text.value = ''
    date.value = ''
    renderTasks()
}


