function addToDO(){
    let todo = document.querySelector('#add-item');
    if(todo.value == 0){
        alert("Please add text?")
    }
    else{
        document.querySelector('.title').innerHTML += `
        <p>${todo.value}</p>
    `;
    }
}