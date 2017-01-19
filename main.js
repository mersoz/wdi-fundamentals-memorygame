console.log("JS file is connected to HTML! Woo!");

var cards = ["queen", "queen", "king", "king"];

/* Function for appending cards to game board*/
var dealCards = function(){
	for ( var i = 0; i < cards.length; i++){
		var cardElement = document.createElement("div");
		cardElement.className = "card";
		cardElement.setAttribute('data-card', cards[i]);

	    cardElement.addEventListener('click', isTwoCards);
		document.getElementById("game-board").appendChild(cardElement);
	};
};

/* Deal cards when game is started */
var clickToStart = document.getElementById("startGame");
clickToStart.addEventListener( 'click', dealCards );

var cardsInPlay = [];
var cardElement = " ";

var isTwoCards = function(){	
	cardClicked = this.getAttribute('data-card');
	cardsInPlay.push(cardClicked);

	/* Add image of card */
	var image = document.createElement("img");
	if ( this.getAttribute('data-card') === "king"){
		image.src = "spades_king.png";
		image.alt = 'King of Spades';
	} else if (	this.getAttribute('data-card') === "queen"){
		image.src = "clubs_queen.png";
		image.alt = 'Queen of Clubs';
	};
	image.style.cssText = 'height:200px; width: 150px;';
	this.appendChild(image);

	if (cardsInPlay.length === 2 ) {
    	if( isMatch(cardsInPlay) ){
	    	console.log("it's a match!");
	    };
    	cardsInPlay = [];
	};
};

var isMatch = function(cardsInPlay){
	if (cardsInPlay[0] === cardsInPlay[1]){
		return true;
	};
};
