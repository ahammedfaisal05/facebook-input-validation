// facebook input validation project..
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
