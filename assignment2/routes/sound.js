const relax= new Audio("routes/sounds/relax.mp3");
    document.querySelector('#relax').addEventListener("click",function(){
        if(relax.paused) {
            relax.play().then(r => relax.play()) }
        else {
            relax.pause();
        }
    });

