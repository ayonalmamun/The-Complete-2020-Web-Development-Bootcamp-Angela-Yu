var p1 = Math.random() * 6;
p1 = p1 + 1;
p1 = Math.floor(p1);
//console.log(p1);
var p1Img = "images/dice" + p1 + ".png";
var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src", p1Img);

var p2 = Math.random() * 6;
p2 = p2 + 1;
p2 = Math.floor(p2);
//console.log(p2);
var p2Img = "images/dice" + p2 + ".png";
var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src", p2Img);

if(p1>p2){
    //console.log("Player 1 wins " + p1 + " " + p2);
    document.querySelector("h1").innerText = "Player 1 wins";
}
else if(p2>p1){
    //console.log("Player 2 wins " + p1 + " " + p2);
    document.querySelector("h1").innerText = "Player 2 wins";
}
else{
    //console.log("Draw " + p1 + " " + p2);
    document.querySelector("h1").innerText = "Draw";
}