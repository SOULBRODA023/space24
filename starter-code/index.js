let hamburger = document.getElementById('hamburger');
let close= document.getElementById('close');
let menu= document.getElementById('menu');
function openmenu(){
    if(menu.style.right=='100%'){
        menu.style.right='0%'
    }
    else{
        menu.style.right= '100%'
    }
}
hamburger.addEventListener('click', openmenu);

function closemenu(){
    if(menu.style.right=='0%'){
     menu.style.right= '100%'
}
else{
    menu.style.right = '0%'
}
}
close.addEventListener('click', closemenu);



    













