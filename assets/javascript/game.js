	/*generate a random letter for the computer,
		watch for user key press, save value of key press to a variable. check if user and computer letter are the same. if the user letter is the same than keep track of this in a variable, if the user guess is wrong check how many time the user has attempted if the user still has available guesses let the user guess again, else keep track that the user has lost. each time a user make a guess keep track of the letter guessed in an array, do not add th letter if it is already there. each win and lose reste the game and all number being track except the wins and losses*/




		var wins = 0;
		var losses = 0;
		var availableGuesses = 9;
		var lettersGuessed = [];
		var computerChoice;
		var userGuess = [];
		var wordsUsed = []

		// letters available to choose
	var options = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u","v","w", "x", "y", "x", "z"];
// selecting a random letter from the string given

 function computerNum(){ 
	 computerChoice = options[Math.floor(Math.random()*26)+1];
	 console.log(computerChoice)
	 }

computerNum();
	document.onkeyup = function(){
			userGuess = String.fromCharCode(event.keyCode).toLowerCase();
			console.log(userGuess);

	
		if (computerChoice === userGuess){
			// alert("you gain a point");
			wins++;
			lettersGuessed = [];
			document.querySelector('#w').textContent =  wins;
			computerNum();
			restartGame();
			wordsUsed = [];
			userGuess = [];
		
			}
			else {
				availableGuesses--;
				// availableGuesses === availableGuesses--
				document.querySelector('#gL').textContent = availableGuesses;
				// availableGuesses === availableGuesses--
			}

			if(availableGuesses ===0){
				losses ++
				document.querySelector('#l').textContent = losses;
				restartGame();
				computerNum();
				wordsUsed = [];
				userGuess = [];
			}

			function restartGame(){
				lettersGuessed=[];
				availableGuesses = 9;
				document.querySelector('#gL').textContent = availableGuesses;
				wordsUsed = [];
				userGuess = [];
				
			}

			wordsUsed = wordsUsed + userGuess + ","
			document.querySelector('#yG').textContent =  wordsUsed;
			// else if (computerChoice!==userGuess || computerChoice==userGuess) {
            //     console.log()
			// availableGuesses--;
			// document.querySelector("#gL").textContent = availableGuesses;
			// computerNum()
			
			// }
			// if(availableGuesses >= 0){
			// 	// alert("you lost a ppoint");
			// 	losses++;
			// 	document.querySelector('#l').textContent = losses;
			// 	losses ++
			// 	document.querySelector('#l').textContent = losses;
			// }
			// alert("you lost a ppoint");
			
		

        }
    // var html = "<p>"
		
 