
/****************<<<<<<<<<<<<< Cards Function >>>>>>>>>>>>>********************/
//------------ Deck
function Card(value, suit) {
  this.value = value;
  this.suit = suit;
}

function Deck() {
  // Create an empty array of cards.
  this.newDecks = [];
  this.makeDecks = makeDecks;
  this.shuffle = shuffle;
  this.deal = deal;
}

//------------- Makes n Packs of Cards
function makeDecks(n) {
  var value = ['A', 'J', 'Q', 'K', 2,3,4,5,6,7,8,9,10];
  var suits = ["Spade", "Hart", "Club", "Diamond"];
  var d = value.length * suits.length;
  var i, j, k;
  //fill in the deck
  this.newDecks = [d * n];
  for (i = 0; i < n; i++)
    for (j = 0; j < suits.length; j++)
      for (k = 0; k < value.length; k++)
        this.newDecks[i * d + j * value.length + k] = new Card(value[k], suits[j]);
  return this.newDecks;
}

//-------------- Shuffle the Deck 'n' times.
function shuffle(n) {
  var i, j, k;
  var temp;
  for (i = 0; i < n; i++)
    for (j = 0; j < newDecks.length; j++) {
      k = Math.floor(Math.random() * newDecks.length);
      temp = newDecks[j];
      newDecks[j] = newDecks[k];
      newDecks[k] = temp;
    }
}

function newDeck() {
  deck.makeDeck(1);
  deck.shuffle(2);
}

function deal() {
  if (this.newDecks.length > 0)
    return this.newDecks.shift();
  else
    return null;
}

/**************************     Hands   ***************************************/
function Hand(playerOrDealer) {
  this.cards = [];
  this.reset = reset;
  this.addCard = addCard;
  this.getScore  = getScore;
  this.blackjack = true;
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
    if (this.cards[i].value == 'A')
      total++;
    else {
      if (this.cards[i].value == 'J' || this.cards[i].value == 'Q' || this.cards[i].value == 'K')
        total += 10;
      else
        total += this.cards[i].value;
    }
  // Change as many ace values to 11 as possible.
  for (i = 0; i < this.cards.length; i++)
    if (this.cards[i].value =='A' && total <= 11)
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
  deck = new Deck();
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
  firstRound();
}

function getNextCard() {
  return deck.deal();
}

/****************<<<<<<<<<<    Start Dealing     >>>>>>>>>>********************/

function firstRound(){
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
      secondRound();
      return;
      break;
  }
  //player got two face up card, so check if player is Blackjack now
  if (player.getScore() == 21) {
    player.blackjack = true;
  }
  dealRoundCounter++;
}

/****************<<<<<<<<<<    Second Round      >>>>>>>>>>********************/

function secondRound() {
  // Check for dealer blackjack.
  if (dealer.getScore() == 21) {
    dealer.blackjack = true;
  }
  // If player or dealer has blackjack, end the round.
  if (player.blackjack || dealer.blackjack) {
    endRound();
    return;
  }
}

/****************<<    End the Rounds Condition Mets    >>>********************/
function endRound() {
  var  d, p;
  // Show the dealer's down card and score.
  d = dealer.getScore();
  console.log("dealer score: "+ d);
  // Show result of each player hand and pay it off, if appropriate.
  p = player.getScore();
  console.log("player score: "+ p);
  if ((player.blackjack && !dealer.blackjack) ||
           (p <= 21 && d > 21) || (p <= 21 && p > d)) {
    console.log("Player Wins");
  }
  else if ((dealer.blackjack && !player.blackjack) ||
           p > 21 || p < d) {
    console.log("Player Loses");
  }
  else {
      console.log("Push");
  }
}
