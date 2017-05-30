" use strict ";

var display = document.getElementById("display");

function oneToTen(){
    var result = "oneToTen()<br>*** Output ***";
    for (var i = 1; i <= 10; i ++) {
        result += "<br>" + i;
    }
    display.innerHTML = result;
}

function oddNumb(){
  var result = "oddNumbers()<br>*** Output ***";
  for (var i =1; i < 20; i++) {
      if (i % 2 != 0) {
          result += "<br>" +i;
      }
  }
  display.innerHTML = result;
}

function squares(){
  var result = "squares()<br>*** Output ***";
  for (var i = 1; i <= 10; i++) {
      result += "<br>" + i*i;
  }
  display.innerHTML = result;
}

function random4Num(){
    var result = "random4()<br>*** Output ***";
    for (var i = 0; i < 4; i++ ){
        result += "<br>" + (Math.floor(Math.random() * 10 + 1));
    }
    display.innerHTML = result;
}

function evenNum(){
    var n = prompt("Enter your number");
    var result = "even(" + n + ")<br>*** Output ***";
    for (var i = 1; i < n; i++) {
        if (i % 2 == 0) {
            result += "<br>" + i;
        }
    }
    display.innerHTML = result;
}

function powersOf2(){
    var n = prompt("Enter your number");
    var result = "powersof2(" + n + ")<br>*** Output ***";
    for (var i = 1; i <= n; i++){
        result += "<br>" + Math.pow(2, i);
    }
    display.innerHTML = result;
}

function areWeThereYet(){
    do {var n = prompt("Are we there yet?");}
    while (n.toLowerCase()  !== "yes");
    display.innerHTML = "Good!";
}

function triangle() {
    var result = "triangle()<br>*** Output ***<br>";
    for (var i = 0; i < 5; i++) {
        for (var j = 0; j <= i; j++) {
            result += "*";
        }
        result += "<br>";
    }
    display.innerHTML = result;
}

function tableSquare(){
    var result = "tableSquare()<br>*** Output ***<br>A4*4tablesquare<br>";
    outerloop: // for rows
    var multiplier  = 4;
    for(var i = 1; i <= 16; i++){
      if (i%4 == 0){
        result += "| " + i + " |<br>";
      } else {
        result += "| " + i + " ";
      }
    }
    display.innerHTML = result;
}

function tableSquares(){
    var n = prompt("Enter your number");
    var result = "tableSquare<br>*** Output ***<br>A"+n+"*"+n+"tablesquare<br >";
    outerloop: // for rows
    for(var i = 1; i <= n*n; i++){
      if (i%n == 0){
        result += "| " + i + " |<br>";
      } else {
        result += "| " + i + " ";
      }
    }
    display.innerHTML = result;
}
