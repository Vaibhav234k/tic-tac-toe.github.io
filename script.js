var turn = Math.floor(Math.random() * 2); // O = 1 and X = 0
var turntext = document.getElementById("turn");
if (turn) turntext.innerText = "Player O's Turn";
else turntext.innerHTML = "Player X's Turn";
console.log(turn);

function onReset() {
  turn = Math.floor(Math.random() * 2);
  if (turn) turntext.innerText = "Player O's Turn";
  else turntext.innerHTML = "Player X's Turn";
  for (let i = 1; i < 10; i++) {
    var box = (document.getElementById("box" + i).innerText = "-");
  }
}
function onInput(number) {
  var box = document.getElementById("box" + number);
  if (!checkResult())
    if (box.innerHTML == "-") {
      if (turn == 1) {
        box.innerHTML = "O";
        turntext.innerText = "Player X's Turn";
        turn = 0;
      } else {
        box.innerHTML = "X";
        turntext.innerText = "Player O's Turn";
        turn = 1;
      }
    }
  if (checkResult()) {
    if (turn) turntext.innerText = "Player X won";
    else turntext.innerText = "Player O won";
  }
}
function checkResult() {
  var boxvalue = [null, null, null, null, null, null, null, null, null];
  const check_line = (a, b, c) => {
    return (
      boxvalue[a] == boxvalue[b] &&
      boxvalue[b] == boxvalue[c] &&
      (boxvalue[a] == 0 || boxvalue[a] == 1)
    );
  };
  for (var i = 1; i < 10; i++) {
    if (document.getElementById("box" + i).innerHTML == "O")
      boxvalue[i - 1] = 1;
    else if (document.getElementById("box" + i).innerHTML == "X")
      boxvalue[i - 1] = 0;
  }
  for (i = 0; i < 9; i += 3) {
    if (check_line(i, i + 1, i + 2)) {
      return true;
    }
  }
  for (i = 0; i < 3; i++) {
    if (check_line(i, i + 3, i + 6)) {
      return true;
    }
  }
  if (check_line(0, 4, 8)) {
    return true;
  }
  if (check_line(2, 4, 6)) {
    return true;
  }
}
