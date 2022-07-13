function addToDO(){
    let todo = document.querySelector('#add-item');
    if(todo.value == 0){
        alert("Please add text?")
    }
    else{
        document.querySelector('.todo-list').innerHTML += `
        <p class="todo-item">${todo.value}</p>
        <button class="delete-button">Delete</button>
    `;
        //TODO: Create delete function
    }
}