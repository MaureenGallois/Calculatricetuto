module.exports = {

  addition : (a, b) => {
     return a + b;
  },

  soustraire : (a, b) => {
    return a - b;
  },

  multiplication : (a, b) => {
    return a * b;
  },

  division : (a, b) => {
    let resul = 0;
    if( a === 0 || b === 0){
      throw new Error("Divide by zero not allowed")
    }
    return a/b;
  },

  pourcentage : (a, prct) => {
    let pourcen = CalculatriceService.multiplication(a,prct);
    pourcen = CalculatriceService.division(pourcen, 100);
    return pourcen;
  }

}
