const text =
  "Tenho 18 anos e sou programador FullStack, fascinado por JavaScript. Amo trabalhar com desenvolvimento Frontend, Backend e Mobile.";

function typeWriter(element) {
  const textArray = text.split("");
  element.innerHTML = "";

  textArray.forEach((letter, i) => {
    setTimeout(() => {
      element.innerHTML += letter;
    }, 50 * i);
  });
}

const title = document.getElementById("text");
typeWriter(title);
