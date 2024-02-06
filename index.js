// detect button press 
var i = 0;
while(i<document.getElementsByClassName("drum").length) {

document.getElementsByClassName("drum")[i].addEventListener("click", function() {
  
    sound(this.innerHTML);

    buttonAnimation(this.innerHTML);


    });

i++;
}



// detect key press
addEventListener("keydown", function(e) {
    
    sound(e.key);

    buttonAnimation(e.key);

});





function sound(key) {


    switch (key) {
        case "w":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            $("h1").css("color","violet");

        break;

        case "a":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            $("h1").css("color","indigo");

        break;

        case "s":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            $("h1").css("color","blue");

        break;

        case "d":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            $("h1").css("color","green");

        break;

        case "j":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            $("h1").css("color","yellow");

        break;

        case "k":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            $("h1").css("color","orange");

        break;

        case "l":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            $("h1").css("color","red");

        break;

        default:
            console.log(this.innerHTML);
            $("h1").css("color","black");
            
    }



}



function buttonAnimation(currentKey) {

    var activeButton = document.querySelector("."+currentKey);
    
    activeButton.classList.add("pressed");

    setTimeout(function() {activeButton.classList.remove("pressed");}, 100);

}



