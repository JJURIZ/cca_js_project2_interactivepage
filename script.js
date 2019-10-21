let textBox = document.getElementById("text-to-display");
let printButton = document.getElementById("print-button");
let clearButton = document.getElementById("clear-button");
let printArea = document.getElementById("print-area");

printButton.addEventListener("click", function(){
    let text = textBox.value;
    printArea.innerText += "\n" + text;
});

clearButton.addEventListener("click", function(){
    let text = textBox.value;
    printArea.innerText = "";
})