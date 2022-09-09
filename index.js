var randomNumber1 = Math.floor(Math.random()*6)+ 1; //1-6
// console.log(randomNumber1);
var randomDiceImage = "images/dice" + randomNumber1 + ".png"; //dice1-6.png
// console.log(randomDiceImage);
document.querySelectorAll("img")[0].setAttribute("src", randomDiceImage);


var randomNumber2 = Math.floor(Math.random()*6)+ 1;
// console.log(randomNumber2);
var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";
// console.log(randomDiceImage2);
document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage2);

if(randomNumber1 > randomNumber2){
    var one = document.querySelector("h1").innerHTML="Player 1 Wins!!🎉✨";
    //  console.log(one);
 }
 
 else if(randomNumber1 < randomNumber2){
   var two = document.querySelector("h1").innerHTML="Player 2 Wins!!🎉✨";
    //  console.log(two);
 }
 
//  if(randomNumber1==randomNumber2)
else{
    var draw = document.querySelector("h1").innerHTML="Draw!!";
    //  console.log(draw);
 }