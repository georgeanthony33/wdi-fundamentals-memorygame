var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
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
var score = 0

function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		score++;
		alert("You found a match!");
		if (score===5) {
			alert("You win!");
			document.querySelector('h3').textContent = "You win!";
		} else {
			document.querySelector('h3').textContent = "Score: " + score;
		}
	} else {
		score--;
		alert("Sorry, try again.");
		document.querySelector('h3').textContent = "Score: " + score;
	};
};

function flipCard() {

	var cardId = this.getAttribute('data-id');

	console.log("User flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);

	this.setAttribute('src', cards[cardId].cardImage);

	if (cardsInPlay.length === 2) {
		checkForMatch();
	}
}

function createBoard () {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', "images/back.png");
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
}

createBoard();

function reset () {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.querySelector('img');
		cardElement.remove();
	}
	cardsInPlay.length = 0;
	createBoard();
}

document.getElementsByTagName('button')[0].addEventListener('click',reset);

