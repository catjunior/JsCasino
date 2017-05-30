
describe('Testing filling decks', function () {
  it('should return N * 52', function() {
    var n = 2
    var len = makePacks(n);
    expect(len.length).toBe(104);
  });

});
