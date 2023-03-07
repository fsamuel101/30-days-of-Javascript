const name1 = document.querySelector('.name');
const letters =  "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

//split returns the array of character of string
//map calls a function once for each element in an array
//join joins all the element in an array
//setInterval calls a function at specific interval in milliseconds
//setInterval will continue to call a function until clearInterval is called

name1.onmouseover = event =>{
    let iterations = 0;
    const interval = setInterval(() => {

    event.target.innerText = event.target.innerText.split("")
    .map((letter, index) => {
        if(index < iterations){
            return event.target.dataset.value[index];
        }else{
            return letters[Math.floor(Math.random()*26)]
        }

       }).join("");

    if(iterations >= event.target.dataset.value.length) clearInterval(interval);

    iterations += 1 / 3;

    },30)
}