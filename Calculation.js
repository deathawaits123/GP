function calculate() {
    var inputNumbers = document.getElementById("numbers").value;
    var numbersArray = inputNumbers.split(",").map(Number);
  
    var sum = numbersArray.reduce(function (a, b) {
      return a + b;
    }, 0);
  
    var average = sum / numbersArray.length;
  
    var resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "The sum is: " + sum + "<br>The cumulative GPA is: " + average;
  }

