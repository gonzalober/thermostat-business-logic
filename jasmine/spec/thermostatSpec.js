describe('Thermostat', function() {

  beforeEach(function() {
    thermostat = new Thermostat;
  });

  it('checks current temperature output 20', function(){
    expect(thermostat.temperature).toEqual(20)
  });

  it('Checks that the increaseTemp function increases temperature by 1', function(){
    thermostat.increaseTemp()
    expect(thermostat.temperature).toEqual(21)
  });

  it('check that the descreaseTemp function decreases temperature by 1', function(){
    thermostat.decreaseTemp()
    expect(thermostat.temperature).toEqual(19)
  });

  it('checks that temperature is never below 10', function(){
    thermostat.temperature = 10
    expect(function() {thermostat.decreaseTemp()}).toThrowError('Minimum temp is 10')
  });

  it('checks when power saving mode is on, the temp cannot be increased beyond 25 degrees', function(){
    thermostat.temperature = 25
    thermostat.powerSaveOn()
    expect(function() {thermostat.increaseTemp()}).toThrowError('The temp cannot be increased due to PS mode ON')
  });

  it('checks when power saving mode is off, the temp can be increased up to 32 degrees', function(){
    thermostat.temperature = 32
    thermostat.powerSaveOff()
    expect(function() {thermostat.increaseTemp()}).toThrowError('The temp cannot be increased more than 32 degrees while PS mode OFF')
  });

  it('check power saving is on by default', function(){
    expect(thermostat.powersaving).toEqual(true)
  });

  it('reset the thermostat back to 20 degrees', function(){
    thermostat.increaseTemp();
    thermostat.reset();
    expect(thermostat.temperature).toEqual(20);
    expect(thermostat.powersaving).toEqual(true);
  });

  it('energy usage is low-usage', function () {
    thermostat.decreaseTemp(2)
    expect(thermostat.usage()).toEqual('low-usage');
  });

  it('energy usage is between 19 and 25 is medium-usage', function () {
    expect(thermostat.usage()).toEqual('medium-usage');
  });

  it('energy usage is higher than 25', function () {
    thermostat.increaseTemp(6);
    expect(thermostat.usage()).toEqual('high-usage');
  });

});
