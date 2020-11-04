describe('Thermostat', function() {
  
  beforeEach(function() {
    thermostat = new Thermostat;
  });

  it('checks current temperature output 20', function(){
    expect(thermostat.temperature).toEqual(20)
  });


});