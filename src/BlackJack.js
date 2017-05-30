
/****************<<<<<<<<<<<<< Cards Function >>>>>>>>>>>>>********************/
//------------ Deck
function Stack() {
  // Create an empty array of cards.
  this.newCards = [];
  this.makePacks = makePacks;
  this.shuffle = shuffle;
  this.deal = deal;
}

function Card(value, suit) {
  this.value = value;
  this.suit = suit;
}

//------------- Makes n Packs of Cards
function makePacks(n) {
  var value = ['A', 'J', 'Q', 'K', 2,3,4,5,6,7,8,9,10];
  var suits = ["Spade", "Hart", "Club", "Diamond"];
  var d = value.length * suits.length;
  var i, j, k;
  //fill in the deck
  this.newCards = [d * n];
  for (i = 0; i < n; i++)
    for (j = 0; j < suits.length; j++)
      for (k = 0; k < value.length; k++)
        this.newCards[i * d + j * value.length + k] = new Card(value[k], suits[j]);
  return this.newCards;
}

//-------------- Shuffle the Deck 'n' times.
function shuffle(n) {
  var i, j, k;
  var temp;
  for (i = 0; i < n; i++)
    for (j = 0; j < newCards.length; j++) {
      k = Math.floor(Math.random() * newCards.length);
      temp = newCards[j];
      newCards[j] = newCards[k];
      newCards[k] = temp;
    }
}

function newDeck() {
  deck.makeDeck(1);
  deck.shuffle(2);
}

function deal() {
  if (this.newCards.length > 0)
    return this.newCards.shift();
  else
    return null;
}

/**************************     Hands   ***************************************/
function Hand(id) {
  this.cards = [];
  this.reset = reset;
  this.addCard  = addCard;
  this.getScore  = getScore;
  // Initialize as an empty hand.
  this.reset();
}

function reset() {
  this.cards = [];
  //this.blackjack = false;
}

function addCard(card) {
  var n;
  // Add the given card to the hand.
  n = this.cards.length;
  this.cards[n] = card;
}

function getScore() {
  var i, total;
  total = 0;
  // add al Aces as one first.
  for (i = 0; i < this.cards.length; i++)
    if (this.cards[i].value === 'A')
      total++;
    else {
      if (this.cards[i].value === 'J' || this.cards[i].value === 'Q' || this.cards[i].value === 'K')
        total += 10;
      else
        total += this.cards[i].value;
    }
  // Change as many ace values to 11 as possible.
  for (i = 0; i < this.cards.length; i++)
    if (this.cards[i].value === 'A' && total <= 11)
      total += 10;
  return total;
}


/****************<<<<<<<<<<< BLACKJACK Initialize>>>>>>>>>>********************/

var initCredit = 1000;
var initBet = 10;
var defaultBet = 10;
var deck;
var dealer;
var player;
var dealRoundCounter;

function startBlackJack(){
  deck = new Stack();
  newDeck();
  deck.makeDeck();
  deck.shuffle();
  // Create dealer and player hand.
  dealer = new Hand("dealer");
  player= new Hand("player");
}

function startRound() {
  player.reset();
  dealer.reset();

  dealRoundCounter = 1;
  dealRound();
}

function getNextCard() {
  return deck.deal();
}

/****************<<<<<<<<<<    Start Dealing     >>>>>>>>>>********************/

function dealRound(){
  // Deal a card to the player or the dealer based on the counter.
  switch(dealRoundCounter){
    case 1:
      player.addCard(getNextCard());
      break;
    case 2:
      dealer.addCard(getNextCard());
      break;
    case 3:
      player.addCard(getNextCard());
      break;
    case 4:
      dealer.addCard(getNextCard());
      break;
    default:
      // No more cards to deal, play the round.
      playRound();
      return;
      break;
  }
  if (player.getScore() == 21) {
  player.blackjack = true;
}

// Set a timer for the next call.
dealRoundCounter++;
setTimeout(dealRound, 1);
}
