const addToDO = () =>{
    let todo = document.querySelector('#add-item');
    if(todo.value == 0){
        alert("Please add text?")
    }
    else{
        document.querySelector('.todo-list').innerHTML += `
        <p class="todo-item">${todo.value}</p>
        <button class="delete-button" onclick="deleteEntry()">Delete</button>
    `;
    }

}
const deleteEntry = () =>{
    let curr = document.querySelector('.todo-item');
    let dbutt = document.querySelector('.delete-button')

    curr.remove();
    dbutt.remove();
}
