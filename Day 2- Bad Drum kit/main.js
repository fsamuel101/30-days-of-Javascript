
window.addEventListener('keydown', (e) =>{
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
})
// ! this code can be more good looking I'll go back here some other time
const button1 = document.querySelector('div[data-key="87"]');
const button2 = document.querySelector('div[data-key="88"]');
const button3 = document.querySelector('div[data-key="69"]');
const button4 = document.querySelector('div[data-key="82"]');
const button5 = document.querySelector('div[data-key="81"]');

const audio1 = document.querySelector('audio[data-key="87"]');
const audio2 = document.querySelector('audio[data-key="88"]');
const audio3 = document.querySelector('audio[data-key="69"]');
const audio4 = document.querySelector('audio[data-key="82"]');
const audio5 = document.querySelector('audio[data-key="81"]');

button1.addEventListener('click', () =>{
    audio1.currentTime = 0;
    audio1.play();
})

button2.addEventListener('click', () =>{
    audio2.currentTime = 0;
    audio2.play();
})
button3.addEventListener('click', () =>{
    audio3.currentTime = 0;
    audio3.play();
})
button4.addEventListener('click', () =>{
    audio4.currentTime = 0;
    audio4.play();
})
button5.addEventListener('click', () =>{
    audio5.currentTime = 0;
    audio5.play();
})