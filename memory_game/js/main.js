var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamons",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];
var cardsInPlay = [];
var records = [0,0,0];


function flipCard () {
	var cardId = this.getAttribute('data-id');
	this.setAttribute('src',cards[cardId].cardImage)
	cardsInPlay.push(cards[cardId].rank);

	if (cardsInPlay.length===2) {
		if (cardsInPlay[0]===cardsInPlay[1]) {
			records[0]+=1;
			records[2]+=1;
			alert("You found a match!");
		} else {
			records[1]+=1;
			records[2]+=1;
			alert("Sorry, try again");
		}
	}

}

function createBoard (){
	for (i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', "images/back.png");
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click',flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	


};
}


function resetButton (){
	var redButton = document.getElementsByTagName('button')[0];
	redButton.addEventListener('click',reGame);
}

function reGame (){
	cardsInPlay=[];
	createBoard()
}

createBoard();
resetButton();












