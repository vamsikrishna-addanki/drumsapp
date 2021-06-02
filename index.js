var numberOfDrum = document.querySelectorAll(".cell").length;
for(var i=0; i<numberOfDrum; i++){

document.querySelectorAll(".cell")[i].addEventListener("click", function(){
	var drum = this.innerHTML;
	makeSound(drum);
});
}
document.addEventListener("keypress", function(event){
	makeSound(event.key);
})

function makeSound(key){
	switch(key){
		case "q": var tom1 = new Audio("sounds/1.mp3");
		          tom1.play();
		          break;
		case "w": var tom2 = new Audio("sounds/2.mp3");
		          tom2.play();
		          break;
		case "e": var tom3 = new Audio("sounds/3.mp3");
		          tom3.play();
		          break;
		case "a": var tom4 = new Audio("sounds/4.mp3");
		          tom4.play();
		          break; 
		case "s": var snare = new Audio("sounds/5.mp3");
		          snare.play();
		          break;
		case "d": var crash = new Audio("sounds/6.mp3");
		          crash.play();
		          break;          
		case "z": var kick = new Audio("sounds/7.mp3");
		          kick.play();
		          break;    
                  
                  case "x": var crash = new Audio("sounds/8.mp3");
		          crash.play();
		          break;       
                  case "c": var crash = new Audio("sounds/9.mp3");
		          crash.play();
		          break;       
	}
}