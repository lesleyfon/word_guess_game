	/*generate a random letter for the computer,
		watch for user key press, save value of key press to a variable. check if user and computer letter are the same. if the user letter is the same than keep track of this in a variable, if the user guess is wrong check how many time the user has attempted if the user still has available guesses let the user guess again, else keep track that the user has lost. each time a user make a guess keep track of the letter guessed in an array, do not add th letter if it is already there. each win and lose reste the game and all number being track except the wins and losses*/




		var wins = 0;
		var losses = 0;
		var availableGuesses = 9;
		var lettersGuessed = [];
		var computerChoice;
		

		// letters available to choose
	var options = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u","v","w", "x", "y", "x", "z"];
// selecting a random letter from the string given

 function computerNum(){ 
	 computerChoice = options[Math.floor(Math.random()*26)+1];
	 console.log(computerChoice)
	 }
	// console.log(computerChoice)
	computerNum()

	document.onkeyup = function(){
		var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
		console.log(userGuess);

	
			// console.log(computerChoice);

		if (computerChoice===userGuess){
			alert("you won");
			wins++;
			lettersGuessed = []
			document.querySelector('#w').textContent = wins;
			computerNum()

		
			}
			else if (computerChoice!==userGuess){
				alert("you loss");
				losses++;
				// availableGuesses === availableGuesses--
				document.querySelector('#l').textContent = losses;
				computerNum()
		

			}
		
			else if (computerChoice!==userGuess || computerChoice===userGuess) {
				
			availableGuesses-1;
			 console.log("availableGuesses")
			// lettersGuessed = []
			document.querySelector("#gL").textContent = availableGuesses;
			computerNum()
			
			}

			var html = "<p>Your Guesses: "+ lettersGuessed +"</p>";
			document.querySelector("#game").innerHTML = html
    
		

		}
		
 