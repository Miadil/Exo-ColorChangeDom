console.log("on est la !!! ");
const body = document.querySelector("body");
const btn = document.getElementById("pouletBtn");
const sentence = document.getElementById("sentenceChange");

console.log("sentence : ", sentence);
const colors = [
  "yellow", //0
  "violet", //1
  "orange", //2
  "green", //3
  "red",
  "purple",
  "cyan",
  "blue",
  "grey",
];
const superSentence = [
  "I'm beautiful",
  "I'm queen of Tokyo, is back",
  "I don't think so",
  "Just do it",
  "i want to die",
  " i love chicken",
];
btn.addEventListener("click", () => {
  const ramdomColor = Math.floor(Math.random() * colors.length);
  const ramdomColorText = Math.floor(Math.random() * colors.length);
  console.log("aie !!!", colors[ramdomColor]);
  const ramdomSentence = Math.floor(Math.random() * superSentence.length);

  body.style.backgroundColor = colors[ramdomColor];
  sentence.innerText = superSentence[ramdomSentence];
  sentence.style.color = colors[ramdomColorText];
});
