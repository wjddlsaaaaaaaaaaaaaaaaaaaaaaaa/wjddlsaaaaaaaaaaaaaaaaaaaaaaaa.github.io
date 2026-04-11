const phrases = [
  "this is not a portfolio",
  "or maybe it is",
  "click something",
  "nothing is stable",
  "why are you here",
  "look closer",
  "this will move",
  "don't trust this",
  "try again",
  "hover me"
];

const container = document.getElementById("container");

// CREATE FLOATING TEXT
for (let i = 0; i < phrases.length; i++) {
  let el = document.createElement("div");
  el.className = "floating-text";
  el.innerText = phrases[i];

  // random position
  el.style.top = Math.random() * 100 + "vh";
  el.style.left = Math.random() * 100 + "vw";

  // click interaction
  el.onclick = () => {
    el.innerText = "…";
    el.style.transform = "scale(2)";
  };

  container.appendChild(el);

  drift(el);
}

// DRIFT FUNCTION
function drift(el) {
  let x = Math.random() * 2 - 1;
  let y = Math.random() * 2 - 1;

  setInterval(() => {
    let top = parseFloat(el.style.top);
    let left = parseFloat(el.style.left);

    el.style.top = (top + y) + "vh";
    el.style.left = (left + x) + "vw";
  }, 100);
}

// CURSOR REACTION
document.addEventListener("mousemove", (e) => {
  const texts = document.querySelectorAll(".floating-text");

  texts.forEach(t => {
    let rect = t.getBoundingClientRect();
    let dx = rect.x - e.clientX;
    let dy = rect.y - e.clientY;
    let dist = Math.sqrt(dx * dx + dy * dy);

    if (dist < 100) {
      t.style.transform = "scale(1.8)";
    } else {
      t.style.transform = "scale(1)";
    }
  });
});
