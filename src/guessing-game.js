class GuessingGame {
  constructor() {
    this.min = 0
    this.max = 0
    this.average = 0
  }

  setRange(min, max) {
    this.min = min - 1
    this.max = max
  }

  guess() {
    this.average = Math.ceil((this.max + this.min) / 2)
    console.log(1, this.average)
    return this.average
  }

  lower() {
    this.max = this.average + 1
    console.log(2, this.max)
  }

  greater() {
    this.min = this.average - 1
    console.log(3, this.min)
  }
}

module.exports = GuessingGame
