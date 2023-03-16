const itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
const done = document.querySelector('.done');
const edit = document.querySelector('.edit');




const displayTime = () =>{
    let time = new Date();
    time = time.toString().split(" ");
    document.getElementById('time').innerText = time[4];

    setTimeout(displayTime, 1000);
}

const cancelAdd = () =>{
    document.querySelector('.form').classList.remove('show');
    document.querySelector('.inputTask').innerText = '';
    

}

const addTask = () =>{
    document.querySelector('.form').classList.add('show');
}



window.onload = function(){
    displayTime();
}