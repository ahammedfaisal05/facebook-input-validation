//Get elements
/*
const h2 = document.querySelector('h2');
const input = document.querySelector('input');
const button = document.querySelector('button');
*/
/* form control country select....
const select = document.querySelector('select');
select.onchange = () => {
    h2.innerHTML = select.value;
}
*/

/* gender choose portion...
const gender = document.querySelectorAll('input[name ="gender"]');
gender.forEach(item =>{
    item.onchange = () =>{
        h2.innerHTML = item.value;
    }
})
*/

// facebook input validation project

const search = document.querySelector('.search');
const input = document.querySelector('input');
const icon = document.querySelector('i');
const tw = document.querySelector('.tol-wraper');


let count = 0;
input.onblur = ()=> {
    if(input.value == ''){
        search.style.borderColor = 'red';
        icon.style.display = 'block';
    }else{
        search.style.borderColor = 'black';
        icon.style.display = 'none';
    }
    tw.style.display = 'none';
    count++;
}
input.onfocus = ()=> {
    //tw.style.display = 'none';
    search.style.borderColor = 'black';
    icon.style.display = 'none';
    
    if(input.value == '' && count > 0){
        tw.style.display = 'block';
    }else{
        tw.style.display = 'none';
    }
}

input.onkeyup = ()=>{
    if(input.value == ''){
        tw.style.display = 'block';
    }else{
        tw.style.display = 'none';
    }
}

/*button.onclick = ()=>{
    h1.innerHTML = input.value;
}
----------
Keyboard event..
input.onkeyup = () =>{
    h1.innerHTML = input.value
}
input.onkeydown = () =>{
    h1.innerHTML = input.value
}
input.onfocus = ()=>{
    console.log('focus event');
}

input.onblur = ()=>{
    console.log('blur event');
}
input.onchange = ()=>{
    console.log('change event');
}
*/