const text = "IT Support | Data Analyst | Junior Developer";
let i = 0;

function typingEffect() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typingEffect, 50);
  }
}

typingEffect();