class Thermostat{

  constructor(){
    this.temperature = 20
    this.powersaving = true
  };

  getCurrentTemperature() {
    console.log(this.temperature)
  };

  increaseTemp( num = 1) {
    if(this.powersaving === true && (this.temperature + num) >= 25 ) {
      throw new Error('The temp cannot be increased due to PS mode ON')
    } else if(this.powersaving === false && this.temperature >= 32 ) {
      throw new Error('The temp cannot be increased more than 32 degrees while PS mode OFF')
    } else {
      this.temperature += num
    }
  };

  decreaseTemp(num = 1) {
    if (this.temperature <= 10) {
      throw new Error('Minimum temp is 10')
  } else {
      this.temperature -= num
    }
  };

  powerSaveOff() {
    this.powersaving = false;
    this.temperature <= 32;
  };

  powerSaveOn() {
    this.powersaving = true;
    this.temperature <= 25;
  };

  reset() {
    this.temperature = 20
    this.powersaving = true
  };

  usage() {
    if(this.temperature <= 18) {
      return 'low-usage'
    }
    else if(this.temperature >= 19 && this.temperature <= 25) {
      return 'medium-usage'
    }
    else {
      return 'high-usage'
    }
  };

};


