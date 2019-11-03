
document.getElementById("new-game-button").addEventListener("click", function(event) { 
  document.querySelector(".bigsquare").innerHTML =`
  <div class="row">
  <div class="square grey" square-id="0"></div>
  <div class="square grey" square-id="1"></div>
  <div class="square grey" square-id="2"></div>
  </div>

  <div class="row">
  <div class="square grey" square-id="3"></div>
  <div class="square grey" square-id="4"></div>
  <div class="square grey" square-id="5"></div>
  </div>

  <div class="row">
  <div class="square grey" square-id="6"></div>
  <div class="square grey" square-id="7"></div>
  <div class="square grey" square-id="8"></div>
  </div>`;

  //reset message at each game start
  document.querySelector(".message").innerHTML=`
  <ul>
  <li>The squares will appear during 2 seconds</li>
  <li>Memorize their positions</li>
  <li>With your excellent memory, click on their positions once they disappear</li>
  </ul>`
  
  //add start button
  var startBtn=document.createElement("BUTTON");
  startBtn.innerHTML="Start Game";
  startBtn.setAttribute("id","start-button");
  document.querySelector(".buttons").appendChild(startBtn);

  //when the button start appears, the button new game temporarily not visible
  document.getElementById("new-game-button").style.display="none";

  var allSquares=document.querySelectorAll(".square");
  var memoryGame = new MemoryGame();
  
  function startGame(){
      // reset table of random Index
      memoryGame.randomIndexTable=[];
      // before choosing new random Index
      memoryGame.chooseRandomIndex();
      
      // reset format of squares randomly selected
      memoryGame.randomSquares.forEach(square => {
        square.classList.remove("pink");
        square.classList.add("grey");
      })
      memoryGame.randomSquares=[];
      // before choosing new random Squares
      memoryGame.chooseSquares(allSquares);

      //For each of 3 squares randomly selected, add a class to chnage its color from grey to pink during 1.5 secs
      setTimeout(function() {
        memoryGame.randomSquares.forEach(function(square){
          square.classList.remove("grey");
          square.classList.add("pink");
          document.querySelector(".message").innerHTML="GET READY";
        });
  
        setTimeout(function () {
          memoryGame.randomSquares.forEach(function(square){
            square.classList.add("grey");
            square.classList.remove("pink");
            document.querySelector(".message").innerHTML="IT'S YOUR TURN";
            });
    
        }, 2000)
   
      }, 1000);  
  }
  
  
  document.getElementById("start-button").onclick = function() {
    startGame();

    //Ater the game starts, the start button will be removed
    document.getElementById("start-button").parentNode.removeChild(document.getElementById("start-button"));

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
          document.querySelector(".message").innerHTML="YOU WIN !";
          document.querySelector(".bigsquare").innerHTML=`<div class="congrats"> <img src="congrats.gif"> </div>`;
          //The button new game appears again as an option
          document.getElementById("new-game-button").style.display="";
          }
        } else {
        document.querySelector(".message").innerHTML="You got it wrong ! Do a new game";
        memoryGame.renderSquares(allSquares);
        //The button new game appears again as an option
        document.getElementById("new-game-button").style.display="";
        };
        } 
      }
  
    )
  };
});





