let whoToGreet = document.getElementById("who-to-greet");
let greetingArea = document.getElementById("greeting-area");
let greetingButton = document.getElementById("greetings-button");
let helloButton = document.getElementById("hello-button");
let howdyButton = document.getElementById("howdy-button");
let backAtYaButton = document.getElementById("back-at-ya-button");
let clearButton = document.getElementById("clear-button");

let greet = function greet(button) {
    let text = whoToGreet.value;

    greetingArea.innerHTML = button.value + " " + text;
};


greetingButton.addEventListener("click", function(){
    greet(greetingButton); 
});

helloButton.addEventListener("click", function(){
    greet(helloButton);
});

howdyButton.addEventListener("click", function(){
    greet(howdyButton);
});

backAtYaButton.addEventListener("click", function(){
    greet(backAtYaButton);

})

clearButton.addEventListener("click", function(){
    var text = whoToGreet.value;

    greetingArea.innerHTML = " ";
});
