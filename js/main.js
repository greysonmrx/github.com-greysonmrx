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

function makeRandom(length) {
  let result = "";
  let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@$&*:;?=+-";
  let charactersLength = characters.length;

  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}

function generateNames() {
  let names = [];
  let rounds = 18;

  for (let i = 0; i <= rounds - 1; i++) {
    names.push(makeRandom(7));
  }

  for (let i = 0; i <= rounds - 1; i++) {
    names.push(`g${makeRandom(6)}`);
  }

  for (let i = 0; i <= rounds - 1; i++) {
    names.push(`gr${makeRandom(5)}`);
  }

  for (let i = 0; i <= rounds - 1; i++) {
    names.push(`gre${makeRandom(4)}`);
  }

  for (let i = 0; i <= rounds - 1; i++) {
    names.push(`grey${makeRandom(3)}`);
  }

  for (let i = 0; i <= rounds - 1; i++) {
    names.push(`greys${makeRandom(2)}`);
  }

  for (let i = 0; i <= rounds - 1; i++) {
    names.push(`greyso${makeRandom(1)}`);
  }

  names.push("greyson");

  return names;
}

const arrayNames = generateNames();

var index = 0;

const decodeEffect = setInterval(() => {
  const name = document.getElementById("name");

  name.setAttribute("name", arrayNames[index]);
  name.innerHTML = arrayNames[index];

  index === arrayNames.length - 1 ? clearInterval(decodeEffect) : index++;
}, 50);

const title = document.getElementById("text");
typeWriter(title);
