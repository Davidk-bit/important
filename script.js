const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

let count = 0;

noBtn.addEventListener("click", () => {
  count++;

  noBtn.style.transform = `scale(${Math.max(0.5, 1 - count * 0.1)})`;
  yesBtn.style.transform = `scale(${1 + count * 0.15})`;

  if (count === 1) noBtn.innerText = "LAH BWANG?";
  if (count === 2) noBtn.innerText = "KENAPA BWANG 😭";
  if (count === 3) noBtn.innerText = "PLISHH BWANGG 😭😭";
  if (count === 4) noBtn.innerText = "KLIK YES GA TYL";
});

yesBtn.addEventListener("click", () => {
  document.body.innerHTML = `
    <h1 style="text-align:center;">OKE DE LESH GOOOO MAMITO!!!! 💕</h1>
    <img src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExdmxnenZnYWd6NGVvajVpYzcydHVidnYzbmhjZm9xMnF6YzR0Mjh1aCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/U2nN0ridM4lXy/giphy.gif"
         style="display:block;margin:auto;">
  `;
});
