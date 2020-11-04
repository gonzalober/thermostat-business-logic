class Thermostat{

  constructor(){
    this.temperature = 20
  };

  increaseTemp() {
    this.temperature ++
  }

  decreaseTemp() {
    if (this.temperature === 10) {
       throw new Error('Minimum temp is 10')
  } else {
    this.temperature --
  }
}

};
