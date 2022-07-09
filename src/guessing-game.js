class GuessingGame {
  constructor() {}

  setRange(min, max) {
    this.min = min;
    this.max = max;
  }

  guess() {
    return Math.ceil((this.min + this.max) / 2);
  }

  lower() {
    this.max = Math.ceil((this.min + this.max) / 2);
  }

  greater() {
    this.min = Math.ceil((this.min + this.max) / 2);
  }
}

// it('should guess number 517 with max value 941', () => {
//     const number = 517;
//     const game = new GuessingGame();
//     game.setRange(0, 941)

//     let result = game.guess(); 470
//     game.greater(); 471 - 941
//     result = game.guess(); 706
//     game.lower(); 471 - 705
//     result = game.guess(); 588
//     game.lower(); 471 - 587
//     result = game.guess(); 529
//     game.lower(); 471 - 528
//     result = game.guess(); 499
//     game.greater(); 500 - 528
//     result = game.guess(); 514
//     game.greater(); 515 - 528
//     result = game.guess(); 521
//     game.lower(); 515 - 520
//     result = game.guess(); 517
//     game.lower();
//     result = game.guess();
//     game.lower();
//     result = game.guess();

//     expect(result).to.equal(number);
// });

module.exports = GuessingGame;
