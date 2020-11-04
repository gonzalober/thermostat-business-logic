describe('Thermostat', function() {

  beforeEach(function() {
    thermostat = new Thermostat;
    // powersaving = on;
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
    thermostat.powerSaving('on')
    expect(function() {thermostat.increaseTemp()}).toThrowError('The temp cannot be increased due to PS mode ON')
  });


});
