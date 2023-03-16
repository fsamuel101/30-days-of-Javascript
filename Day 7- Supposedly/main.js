



// window.addEventListener('load', () =>{
//     const nameInput = document.querySelector('#name');

//     const username = localStorage.getItem('username') || '';

//     nameInput.value = username;

//     nameInput.addEventListener('change', e  => {
//         localStorage.setItem('usermame',e.target.value);
        

//     })


// })

// sorting algorthim

function binarySearch(array, x, first = 0, last = array.length -1){
    
    if(first > last || array[last] < x) return 'not available';
  
    let middle = Math.floor((last + first)/2);

    if(array[middle] === x) return middle;
    
    if(array[middle] > x){
        return binarySearch(array, x, first, middle-1);
    }else if(array[middle] < x){
        return binarySearch(array,x,middle+1, last)
    }
}

array = [1,2,3,4,5,6,7.5,8,9,10]
console.log(binarySearch(array, 12247));