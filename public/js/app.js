const texts = [
  '"You cannot acheive greatness with a small mind" - Unknown',
  "“Whatever you are, be a good one.” ― Abraham Lincoln",
  "“All our dreams can come true, if we have the courage to pursue them.” – Walt Disney",
  "“The secret of getting ahead is getting started.” – Mark Twain",
  "“It’s hard to beat a person who never gives up.” – Babe Ruth",
];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
  if (count === texts.length) {
    count = 0;
  }
  currentText = texts[count];
  letter = currentText.slice(0, ++index);

  document.querySelector(".typing").textContent = letter;
  if (letter.length === currentText.length) {
    count++;
    index = 0;
  }
  setTimeout(type, 300);
})();

// particlesJS.load("particles-js", "assets/particles.json", function () {
//   console.log("callback - particles.js config loaded");
// });
