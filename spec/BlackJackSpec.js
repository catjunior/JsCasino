
describe('Create New Decks', function () {
  beforeEach(function() {
      deck = new Deck();
  });

  it('makeDecks(1): should create a new Deck with 1 pack of cards', function() {
    var len = deck.makeDecks(1);
    expect(len.length).toBe(52);
  });

  it('makePacks(2): should create a new Deck with 2 packs of cards', function() {
    var len = deck.makeDecks(2);
    expect(len.length).toBe(104);
  });

  it("deal(): should get the botton index of the deck (newCards)", function(){
    var newCards = deck.makeDecks(1);
    var theCardDealed = newCards[0];
    expect(deck.deal()).toBe(theCardDealed);
  });

  it("deal(): once a car is dealed, the length of the deck should reduce by 1", function(){
    var newCards = deck.makeDecks(1);
    var oriLength = newCards.length;
    deck.deal();
    expect(newCards.length).toBe(oriLength-1);
  });

});

describe('FirstRound', function () {
  beforeEach(function() {
    deck = new Deck();
    player = new Hand();
  });

  it('reset(): should reset the hands, lenght of cars in hand = 0', function() {
    player.reset();
    expect(player.cards.length).toBe(0);
  });

  it('addCard(): should add a card to hand', function(){
    var oriLength = player.cards.length
    player.addCard();
    var newLengthAfterAddCard = player.cards.length;
    expect(newLengthAfterAddCard).toBe(oriLength+1);
  });

  it('getScore(): 8, K; should return 18', function(){
    player.cards[0] = new Card(8, 'Spade');
    player.cards[1] = new Card('K', 'Heart');
    expect(player.getScore()).toBe(18);
  });

  it('getScore(): J, Q; should return 20', function(){
    player.cards[0] = new Card('J', 'Spade');
    player.cards[1] = new Card('Q', 'Club');
    expect(player.getScore()).toBe(20);
  });

  it('getScore(): 2, 9; should return 11', function(){
    player.cards[0] = new Card(2, 'Spade');
    player.cards[1] = new Card(9, 'Spade');
    expect(player.getScore()).toBe(11);
  });

  it('getScore(): A, K; should return 21', function(){
    player.cards[0] = new Card('A', 'Spade');
    player.cards[1] = new Card('K', 'Diamond');
    expect(player.getScore()).toBe(21);
  });

  it('getScore(): A, 2; should return 13', function(){
    player.cards[0] = new Card('A', 'Spade');
    player.cards[1] = new Card(2, 'Diamond');
    expect(player.getScore()).toBe(13);
  });

  it('getScore(): A, A, 2; should return 14', function(){
    player.cards[0] = new Card('A', 'Spade');
    player.cards[1] = new Card('A', 'Heart');
    player.cards[2] = new Card(2, 'Spade');
    expect(player.getScore()).toBe(14);
  });

  it('getScore(): A, A, K; should return 12', function(){
    player.cards[0] = new Card('A', 'Spade');
    player.cards[1] = new Card('A', 'Heart');
    player.cards[2] = new Card('K', 'Club');
    expect(player.getScore()).toBe(12);
  });

  it('getScore(): A, A, A, A, K; should return 14', function(){
    player.cards[0] = new Card('A', 'Spade');
    player.cards[1] = new Card('A', 'Heart');
    player.cards[2] = new Card('A', 'Club');
    player.cards[3] = new Card('A', 'Diamond');
    player.cards[4] = new Card('K', 'Club');
    expect(player.getScore()).toBe(14);
  });

});
