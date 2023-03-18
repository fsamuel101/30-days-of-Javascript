const itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
const inputTask = document.querySelector('.inputTask');


// *this is to display the time
const displayTime = () => {
    let time = new Date();
    time = time.toString().split(" ");
    document.getElementById('time').innerText = time[4];

    setTimeout(displayTime, 1000);
}

//* to show the form that add task
const addTask = () => {
    topFunction();
    document.querySelector('.form').classList.add('show');
}

//*to autoscroll to top when the above button is pressed
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// *Cancel and ADD operation in creating a new task
const cancelAdd = () => {
    document.querySelector('.form').classList.remove('show');
    inputTask.innerText = '';
}

document.querySelector('.add').addEventListener('click', () => {
    addItem(inputTask);
})

function addItem(item) {
    if(item.value < 5){
        window.alert('Put a proper task')
    }else{
        itemsArray.push(inputTask.value);
        localStorage.setItem('items', JSON.stringify(itemsArray));
        location.reload();
    }
    
}

// * To show the added items in screen

function displayItems() {
    let items = ""
    for (let i = 0; i < itemsArray.length; i++) {
        items += `<div class="task-container">
        <div>
        <p class = 'taskSaved'>${itemsArray[i]}</p>
        </div>

        <div>
            <span class=" icon edit material-symbols-outlined">
                edit
            </span>
            <span class=" icon done material-symbols-outlined">
                done
            </span>
        </div>

        <div class="edit-prompt">
            <textarea class = "savedTask" cols="30" rows="10"></textarea>
            <button class="saveEdit">Save</button>
            <button class="cancelEdit">Cancel</button>
        </div>

    </div>`
    }

    document.querySelector('.task').innerHTML = items;
   
    doneListener();
    editListener();
    saveListener();
    cancelListener();
}

//* FUNCTION WHEN YOU ARE DONE WITH THE TASK
function doneListener() {
    let done = document.querySelectorAll('.done');
    done.forEach((button, index) => {
        button.addEventListener('click', () => {
            itemsArray.splice(index, 1);
            localStorage.setItem('items', JSON.stringify(itemsArray));
            location.reload();
        })
    })
}

// function deleteItem(i) {
//     itemsArray.splice(index, 1);
//     localStorage.setItem('items', JSON.stringify(itemsArray));
//     location.reload();
// }



// *FUNCTION WHEN YOU WANT TO EDIT THE TASK

function editListener(){
    let editButton = document.querySelectorAll('.edit');
    let editPrompt = document.querySelectorAll('.edit-prompt');
    let editField = document.querySelectorAll('.savedTask');

    editButton.forEach((button, index) =>{
        button.addEventListener('click', () =>{
            editField[index].value = itemsArray[index];
            editPrompt[index].style.display = 'block';
            
        })
    })
}

//*  TO SAVE THE CHANGES
function saveListener(){
    let saveButton = document.querySelectorAll('.saveEdit');
    let editPrompt = document.querySelectorAll('.edit-prompt');
    let editField = document.querySelectorAll('.savedTask');

    saveButton.forEach((button, index) =>{
        button.addEventListener('click', () =>{
            itemsArray[index] = editField[index].value;
            localStorage.setItem('items', JSON.stringify(itemsArray));
            location.reload();
            editPrompt[index].style.display = 'none';
        })
    }
    )

}

// *    TO CANCEL THE CHANGES

function cancelListener(){
    let cancelButton  = document.querySelectorAll('.cancelEdit');
    let editPrompt = document.querySelectorAll('.edit-prompt');
    let editField = document.querySelectorAll('.savedTask');

    cancelButton.forEach((button, index) =>{
        button.addEventListener('click', () => {
            editField[index].innerText = '';
            editPrompt[index].style.display = 'none';

        })
    })
}

window.onload = function () {
    displayTime();
    displayItems();
}

console.log(itemsArray)