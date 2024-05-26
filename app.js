


function addTodo() {
    var todoParent = document.getElementById("todoParent")
    // 1.get input
    var todoinput = document.getElementById("todoinput")
    if (todoinput.value.length < 3) {
        alert("Enter correct todo value")
        return
    }
    // 2.create Li

    var li = document.createElement("li")

    // 3.set li value
    li.innerHTML = todoinput.value
    
    // create Edit or delete btn

    var editBtn = document.createElement("button")
    editBtn.innerHTML = "EDIT"

    var deleteBtn = document.createElement("button")
    deleteBtn.innerHTML = "DELETE"
    deleteBtn.setAttribute("onClick", "delTodo(this)")
    // // deleteBtn.onClick = "delTodo()"
    console.log("deleteBtn", deleteBtn)
    li.appendChild(editBtn)
    li.appendChild(deleteBtn)
    todoParent.appendChild(li)
    todoinput.value = ""
}

function deleteAll() {
    var todoParent = document.getElementById("todoParent")
    console.log(todoParent.innerHTML)
    todoParent.innerHTML = ""
}

function delTodo(ele) {
    console.log("delTodo", ele.parentNode)

    ele.parentNode.remove()
}   