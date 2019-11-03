class MemoryGame {
  constructor(){
    this.randomSquares=[];
    this.randomIndexTable=[];
    this.index=0;
  }

  chooseRandomIndex () {
    while (this.randomIndexTable.length<3){      
      this.index=Math.floor(Math.random()*9);
      if (this.randomIndexTable.indexOf(this.index) < 0) {     
        this.randomIndexTable.push(this.index);
      }
    }
      return this.randomIndexTable;
    }
  
  chooseSquares(allSquares) {
    this.randomIndexTable.forEach(randomIndex => {this.randomSquares.push(allSquares[randomIndex]);})
    return this.randomSquares;
  }

  renderSquares(allSquares) {
    allSquares.forEach(square => {
      square.classList.add("grey");
      square.classList.remove("pink");
    })
  }

}