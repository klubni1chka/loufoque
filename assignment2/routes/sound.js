const relax= new Audio("routes/sounds/relax.mp3");

// function soundClick() {
//     $('#relax').click(function(){
//         if(relax.paused) {
//             relax.play();
//         }
//         else {
//             relax.pause();
//         }
//     });
// }
function soundClick() {
    $('#relax').click(function(){
        if(relax.paused) {
            relax.play();
        }
        else {
            relax.pause();
        }
    });
}

