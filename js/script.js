$(document).keypress(function(event){
    if(event.key == "a" || event.key == "A"){
        let counter = 4;
        let seq = [];
        for(let i=1;i<=counter;i++){
            startGame();
        }
    }
});

function playSound(key){
    switch (key) 
    {
        case "green":
            new Audio('sounds/green.mp3').play();
            break;
        case "red":
            new Audio('sounds/red.mp3').play();
            break;
        case "blue":
            new Audio('sounds/blue.mp3').play();
            break;
        case "yellow":
            new Audio('sounds/yellow.mp3').play();
            break;
        default:
            console.log(key);
            break;
    }
}

function animate(key){
    buttonToAnimate = document.querySelector("#"+key);
    buttonToAnimate.classList.add("pressed");
    setTimeout(function (){
        buttonToAnimate.classList.remove("pressed");
      }, 100);
}

function randomNoGenerator(min,max){
    // min = Math.ceil(min);
    // max = Math.floor(max);
    // Generate a random number between 0 and 1
  const randomValue = Math.random();

  // Scale the random value to the desired range
  const scaledValue = randomValue * (max - min + 1) + min;

  // Round down to the nearest integer to include both min and max
  const randomNumber = Math.floor(scaledValue);

  return randomNumber;
}

function assignColor(randomNo){
    let randomColor = "";
    switch (randomNo) 
    {
        case 1:
            randomColor = "green";
            break;
        case 2:
            randomColor = "red";
            break;
        case 3:
            randomColor = "blue";
            break;
        case 4:
            randomColor = "yellow";
            break;
        default:
            console.log(randomNo);
            break;
    }
    return randomColor;
}

function startGame(){
        let randomColor = assignColor(randomNoGenerator(1,4));
        setTimeout(function (){
            playSound(randomColor);
            animate(randomColor);
            console.log(randomColor);
          }, 2000);
        
}