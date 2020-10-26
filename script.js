let hiddenSection = document.querySelectorAll('.hidden');
let downBtn = document.querySelectorAll('.btn');

downBtn.forEach((element, index) => {
    element.addEventListener('click', ()=>{
        expand(index);
    });
});


function expand(theindex){
    if(hiddenSection[theindex].classList.contains('hidden')){
        hiddenSection[theindex].classList.remove('hidden');
    }
    else{
        hiddenSection[theindex].classList.add('hidden');
    }
}
