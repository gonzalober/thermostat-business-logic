class Thermostat{

  constructor(){
    this.temperature = 20
    this.powersaving = false
  };

  increaseTemp() {
    if(this.powersaving === true && this.temperature === 25 ) {
      throw new Error('The temp cannot be increased due to PS mode ON')
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

  powerSaving( tempSetting = 'off') {
    if (tempSetting === 'on') {
      this.powersaving = true
    }
    else if (tempSetting === 'off') {
      this.powersaving = false
    }

  };


};
