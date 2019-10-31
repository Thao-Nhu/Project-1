
  var memoryGame = new MemoryGame();
  var score = 0;

function startGame(){
  // reset  
  memoryGame.randomIndexTable=[];
    memoryGame.chooseRandomIndex();

    memoryGame.randomSquares.forEach(square => {
      square.classList.remove("pink");
      square.classList.add("grey");
    })
    memoryGame.randomSquares=[];
    memoryGame.chooseSquares();

    //Pour chacun des 3 carrés sélectionnés aléatoirement, ajouter une class pour lui faire changer de couleur pendant 3 secondes
    setTimeout(function() {
      memoryGame.randomSquares.forEach(function(el){
        el.classList.remove("grey");
        el.classList.add("pink");
      });

      setTimeout(function () {
        memoryGame.randomSquares.forEach(function(el){
          el.classList.add("grey");
          el.classList.remove("pink");
          });

        //setTimeout(function(){alert(`It's your turn`)},500);     
      }, 1500)
 
    }, 1000);  
}


document.getElementById("start-button").onclick = function() {
  startGame();
  
  var squareIdTable=[];
  document.querySelectorAll(".square").forEach(square => { 
    square.onclick = function () {
      var squareId=Number(square.getAttribute("square-id"));
      
      if (memoryGame.randomIndexTable.indexOf(squareId) != -1) {
      square.classList.remove("grey");
      square.classList.add("pink");
        if ((squareIdTable.indexOf(squareId)<0) && (squareIdTable.length<3)) {
        squareIdTable.push(squareId);
        }
        if (squareIdTable.length===3){
        alert ("You win");
        memoryGame.renderSquares();          
        }
        console.log("squareId",squareId);
        console.log("squareIdTable",squareIdTable);
        console.log(`Index of squareId in squareIdTable`,squareIdTable.indexOf(squareId));
        console.log(squareIdTable.length===3);
      } else {
      alert ("You got it wrong ! Do a new game");
      memoryGame.renderSquares();
      };
      } 
    }

  )
};



