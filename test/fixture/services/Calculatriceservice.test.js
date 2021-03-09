const assert = require('assert');
var sinon = require('sinon');

describe('CalculatriceService', function () {
  describe('#addition', function () {
    it('should add values', function (){
      let result = CalculatriceService.addition(1,5);
      assert.equal(result, 6);
    })


  })

  describe('#soustraction', function () {
    it('should sub values', function (){
      let result = CalculatriceService.soustraire(1,5);
      assert.equal(result, -4);
    })

  })

  describe('#multiplication', function () {
    it('should multiplie values', function (){
      let result = CalculatriceService.multiplication(1,5);
      assert.equal(result, 5);
    })

  })

  describe('#division', function () {
    it('should sub values', function (){
      try {
        let result = CalculatriceService.division(25,0);
      }catch(e) {
        assert.equal(e.message, "Divide by zero not allowed");
        return
      }
      assert(false);
    })

  })

  describe('#pourcentage', function () {
    it('should pourcentage values', function (){
      var stub1 = sinon.stub(CalculatriceService, 'multiplication').callsFake(function(a,b) {return 5})
      var stub2 = sinon.stub(CalculatriceService, 'division').callsFake(function(a,b) {return 20})

      var result = CalculatriceService.pourcentage(100,25);

      assert.equal(result, 20);

      CalculatriceService.multiplication.restore();
      CalculatriceService.division.restore();

    })

    it("should calls div and mul when calculating a percentage", function(){
      const spymul = sinon.spy(CalculatriceService, "multiplication");
      const spydiv = sinon.spy(CalculatriceService, "division");

    })

  })
})
