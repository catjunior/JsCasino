
/****************<<<<<<<<<<<<< Cards Function >>>>>>>>>>>>>********************/
//------------- Single Card Face Value
function Stack() {
  // Create an empty array of cards.
  this.newCards = [];
  this.makePacks = makePacks;
  this.shuffle = shuffle;
  this.deal = stackDeal;
}

function Card(value, suit) {
  this.value = value;
  this.suit = suit;
}

//------------- Makes n Packs of Cards
function makePacks(n) {
  var value = ['A', '2', '3', '4', '5', '6', '7', '8', '9','10', 'J', 'Q', 'K'];
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

function stackDeal() {
  if (this.newCards.length > 0)
    return this.newCards.shift();
  else
    return null;
}

function getScore() {
var i, total;
total = 0;
// count Aces as one
for (i = 0; i < newCards.length; i++)
  if (newCards[i].value == 'A')
    total++;
  else {
    if (newCards[i].value == 'J' || newCards[i].value == 'Q' ||
        newCards[i].value == 'K')
      total += 10;
    else
      total += parseInt(newCards[i].value, 10);
  }
// count aces to 11 as possible
for (i = 0; i < newCards.length; i++)
  if (newCards[i].value == 'A' && total <= 11)
    total += 10;
return total;
}

/****************<<<<<<<<<<< BLACKJACK Started >>>>>>>>>>>>********************/

var initCredit = 1000;
var initBet = 10;
var defaultBet = 10;

function startBlackJack(){
  deck = new Stack();
  newDeck();

}
