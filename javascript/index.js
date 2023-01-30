var yourName = document.getElementById("yourName");
var loversName = document.getElementById("loversName");
var message = document.getElementById("message");

function calculateLove() {
  let yourNameVal = yourName.value;
  let loversNameVal = loversName.value;
  if (yourNameVal == "" && loversNameVal == "") {
    alert("Enter the Given Field!");
  } else {
    var n = Math.floor(Math.random() * 100) + 1;
    if (n > 90) {
      message.innerHTML = `Your Love Score is ${n}%. This Love is Only Meant for You ❤️!`;
    } else if (n > 70) {
      message.innerHTML = `Your Love Score is ${n}%. You Love Each Other So Much 😍!`;
    } else if (n > 50) {
      message.innerHTML = `Your Love Score is ${n}%. You Have to Grow This Relationship a Little More Together 😊!`;
    } else if (n > 20) {
      message.innerHTML = `Your Love Score is ${n}%. You Love Each Other Thoda Thoda 😢!`;
    } else {
      message.innerHTML = `Your Love Score is ${n}%. I Think You Have to Change Your Partner 😓!`;
    }
  }
}
