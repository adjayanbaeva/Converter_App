function numbersToConvert(inputNumber) {
  var result = [];
  var numbersInString=inputNumber.toString()
  if(inputNumber%3===0) {
    result += "I'm sorry, Dave";
  }
  else if (numbersInString.includes("1")) {
    result += "Boop!";
  }
  else if (numbersInString.includes("0")) {
    result += "Beep!";
  }

  return result;
};


$(document).ready(function(){
  $("form#number-converter").submit(function(event){
    event.preventDefault();
     var digitsToConvert = $("#inputNumber").val();
    //  var convertedDigit = digit(inputNumber);
     $("#output").text(numbersToConvert(digitsToConvert));
   });
 });
