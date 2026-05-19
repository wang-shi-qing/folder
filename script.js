// 生成粽子
function makeZongzi() {
  const z = document.createElement("div");
  z.className = "zongzi";
  z.innerText = "🫔";
  z.style.left = Math.random() * 100 + "vw";
  z.style.animationDuration = Math.random() * 4 + 5 + "s";
  document.getElementById("zongzi").appendChild(z);
  setTimeout(() => z.remove(), 7000);
}
setInterval(makeZongzi, 300);

// 生成灯笼
function makeLight() {
  const l = document.createElement("div");
  l.className = "light";
  l.innerText = "🏮";
  l.style.left = Math.random() * 90 + "vw";
  document.getElementById("lights").appendChild(l);
  setTimeout(() => l.remove(), 5000);
}
for (let i = 0; i < 8; i++) makeLight();

// 打字机效果
const str = "祝王馨悦端午安康，平安喜乐，万事顺意，岁岁无忧";
const t = document.getElementById("text");
let idx = 0;
function write() {
  if (idx < str.length) {
    t.innerHTML += str[idx];
    idx++;
    setTimeout(write, 100);
  }
}
write();

// 点击出现烟花+祝福
document.getElementById("btn").onclick = () => {
  document.getElementById("modal").style.display = "flex";
  for (let i = 0; i < 40; i++) fire();
};

// 烟花
function fire() {
  const f = document.createElement("div");
  f.style.cssText = `
    position:absolute;
    width:8px;
    height:8px;
    background:#ffaa33;
    border-radius:50%;
    left:${Math.random()*100}vw;
    top:${Math.random()*100}vh;
    animation: boom 1.2s linear forwards;
    z-index:99;
  `;
  document.getElementById("fireworks").appendChild(f);
  setTimeout(() => f.remove(), 1200);
}

const style = document.createElement("style");
style.innerHTML = `
  @keyframes boom {
    0%{transform:scale(1);opacity:1;}
    100%{transform:scale(3);opacity:0;}
  }
`;
document.head.appendChild(style);