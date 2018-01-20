
var word1 = "Beep!";
var word2 = "Boop!"
var word3 = "I'm sorry, Dave. I'm afraid I can't do that."


function numbersToConvert(inputNumber){
  if (typeof inputNumber !== "number" || inputNumber.length == 0){
    return;
  }
  var digits = inputNumber.toString().split("").map((item,index) => parseInt(item));
  for (var index = 0; index < digits.length; index++) {
    if(index===0){
      return word1;
    } else if (index===1){
      return word2;
    } else if (index%3===0){
      return word3;
    }

    }
    }

$(document).ready(function(){
  $("#number-converter").submit(function(event){
    event.preventDefault();
    // var digitsToConvert = $("#input-number").val();
    // var convertedDigit = numbersToConvert(digitsToConvert);
    // $("#output").text("");
    // if(convertedDigit){
    //   $("#output").append(digitsToConvert );
    //   $("#output").append(convertedDigit);
    // }else{
    //   $("#output").append("Please enter some valid number");
    // }
    // $("#input-number").val("")

  });
});
