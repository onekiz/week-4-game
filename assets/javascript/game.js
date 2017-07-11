


$(document).ready(function() {

  	var totalValue = 0;
  	var randomNumbers = [];
  	var TargetNumber = Math.floor(Math.random()*81+19);
  	var win =0;
    var lose = 0;
    var LoseWin = $("<h3>");

  	
  	for (var i = 0; i<4; i++){
  	 randomNumbers.push(Math.floor(Math.random()*8+2));
  	}

  	$("#randomTargetNumber").html(TargetNumber);



  	$("#crys1").on("click", function() {
      $(".Display").hide();
  		totalValue = randomNumbers[0] + totalValue;
  		$("#total").html(totalValue);
  		reset();
   	});

  	$("#crys2").on("click", function() {
      $(".Display").hide();
  		totalValue = randomNumbers[1] + totalValue;
  		$("#total").html(totalValue);
  		reset();
  	});

  	$("#crys3").on("click", function() {
      $(".Display").hide();
  		totalValue = randomNumbers[2] + totalValue;
  		$("#total").html(totalValue);
      reset();
  	});

   $("#crys4").on("click", function() {
      $(".Display").hide();
  		totalValue = randomNumbers[3] + totalValue;
  		$("#total").html(totalValue);
  		reset();
  	});

function reset (){

      if((TargetNumber-totalValue)===0){
        win++;
        $("#Winz").html(win);
        LoseWin.addClass("Display WinDisplay");
        LoseWin.html("You Win!!");
        $(".display").prepend(LoseWin);
        $(".Display").show();
      }
      else if((TargetNumber-totalValue)<0){ 
        lose++;
        $("#Loze").html(lose);
        LoseWin.addClass("Display LoseDisplay");
        LoseWin.html("You Lost!!");
        $(".display").prepend(LoseWin);
        $(".Display").show();
      }

  if((TargetNumber-totalValue)<=0){
    totalValue = 0;
    randomNumbers = [];
    TargetNumber = Math.floor(Math.random()*100+1);
    $("#randomTargetNumber").html(TargetNumber);
    $("#total").html(totalValue);
    
    for (var i = 0; i<4; i++){
         randomNumbers.push(Math.floor(Math.random()*10+1));
    }

  }
}

});
