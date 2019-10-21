let checkAmountText = document.getElementById("check-amount");
let tipPercentageText = document.getElementById("tip-percentage");
let calculateTipButton = document.getElementById("calculate-tip");
let totalToPayDiv = document.getElementById("total-to-pay");

calculateTipButton.addEventListener("click", function(){
    let checkAmount = parseFloat(checkAmountText.value);
    let tipPercentage = parseFloat(tipPercentageText.value)/100;
    
    if (isNaN(checkAmount) || isNaN(tipPercentage)){
        alert("That ain't a number, pal!");
        return;
    }

    let tipAmount = checkAmount * tipPercentage;
    let totalAmount = checkAmount + tipAmount; 

    totalToPayDiv.innerHTML = "<strong>Check Amount:</strong> $" +
    checkAmount + "<br>" + 
    "<strong>Tip Amount:</strong> $" + tipAmount + "<br>" +
    "<strong>Total to Pay:</strong> $" + totalAmount; 
});