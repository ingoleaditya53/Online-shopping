const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');

if(bar){
    bar.addEventListener('click',()=>{
        nav.classList.add('active');
    })
}

if(close){
    close.addEventListener('click',()=>{
        nav.classList.remove('active');
    })
}


                                             // changing images in products details section

let mainImg = document.getElementById('main-image');
let smallImg = document.getElementsByClassName('small-image');

smallImg[0].onclick = function(){
    mainImg.src = smallImg[0].src;
}
smallImg[1].onclick = function(){
    mainImg.src = smallImg[1].src;
}
smallImg[2].onclick = ()=>{
    mainImg.src = smallImg[2].src;
}
smallImg[3].onclick = ()=>{
    mainImg.src = smallImg[3].src;
}