// back-end logic

function numbersToConvert(digitsToConvert) {
  var result = [];
  var numbersInString = digitsToConvert.toString();
  for (var i = 0; i < numbersInString.length; i++) {
    result.push(+numbersInString.charAt(i));
  };
  if(digitsToConvert % 3 === 0) {
    $("#output").append("I'm sorry, Dave. I'm afraid I can't do that.");
  } else if (result.includes(1)) {
    $("#output").append("Boop!");
  } else if (result.includes(0)) {
    $("#output").append("Beep!");
    } else {
      for (var d = 0; d <= digitsToConvert; d++){
        $("#output").append("<li>" + d + "</li>");
      };
    };

    return result;
};


// front-end logic

$(document).ready(function(){
  $("form#number-converter").submit(function(event){
    event.preventDefault();
      var digitsToConvert = parseInt($("#inputNumber").val());

     numbersToConvert(digitsToConvert);
   });
 });
