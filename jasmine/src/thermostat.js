class Thermostat{

  constructor(){
    this.temperature = 20
    this.powersaving = true
  };

  increaseTemp() {
    if(this.powersaving === true && this.temperature === 25 ) {
      throw new Error('The temp cannot be increased due to PS mode ON')
    } else if(this.powersaving === false && this.temperature === 32 ) {
      throw new Error('The temp cannot be increased more than 32 degrees while PS mode OFF')
    } else {
    this.temperature ++
    }
  };

  decreaseTemp() {
    if (this.temperature === 10) {
      throw new Error('Minimum temp is 10')
  } else {
      this.temperature --
    }
  };

  powerSaving( tempSetting = 'on') {
    if (tempSetting === 'on') {
      this.powersaving = true
    }
    else if (tempSetting === 'off') {
      this.powersaving = false
    }
  };
};


