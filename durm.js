

for (let i = 0; i < 26; i++) {
    document.querySelectorAll('.letter')[i].addEventListener("click",myfun);      //mouse click listener
    
}

function myfun()
{   
        audio= new Audio(`./lettersound/${this.innerHTML.toLocaleLowerCase()}.mp3`);
        audio.play();
        buttonanimation(this.innerHTML.toLocaleLowerCase())
}

document.addEventListener('keypress',myfunkey)                              ///keyboard listener     

function myfunkey(e)
{   

        audio= new Audio(`./lettersound/${e.key}.mp3`);
        audio.play();
        buttonanimation(e.key)

}                              
function buttonanimation(key)
{       
      
   document.querySelector(`.${key}`).classList.add("pressed");
   setTimeout(()=>{ document.querySelector(`.${key}`).classList.remove("pressed");},200);
   
}


