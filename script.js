// 飘爱心
function createHeart() {
  const h = document.createElement("div");
  h.style.cssText = `
    position:absolute;
    width:16px;
    height:16px;
    background:#ff5a8c;
    transform:rotate(45deg);
    left:${Math.random()*100}vw;
    animation:float ${Math.random()*3+4}s linear forwards;
    z-index:1;
  `;
  document.querySelector(".heart-bg").appendChild(h);
  setTimeout(() => h.remove(), 7000);
}
setInterval(createHeart, 150);

// 飘心动画
const style = document.createElement("style");
style.innerHTML = `
  @keyframes float {
    0%{bottom:0;opacity:1;transform:rotate(45deg) scale(1);}
    100%{bottom:100vh;opacity:0;transform:rotate(45deg) scale(0.5);}
  }
`;
document.head.appendChild(style);

// 打字机效果
const txt = "裴洋，我喜欢你很久了，我的世界因为你而发光。我想牵着你的手，走过每一个春夏秋冬。你愿意做我的女朋友吗？";
const dom = document.getElementById("text");
let i = 0;
function write() {
  if (i < txt.length) {
    dom.innerHTML += txt[i];
    i++;
    setTimeout(write, 80);
  }
}
write();

// 愿意按钮
document.querySelector(".yes").onclick = () => {
  document.querySelector(".success").style.display = "flex";
  for (let n = 0; n < 40; n++) fire();
};

// 不愿意按钮乱跑
document.querySelector(".no").onmouseover = () => {
  document.querySelector(".no").style.position = "absolute";
  document.querySelector(".no").style.left = Math.random() * 80 + "%";
  document.querySelector(".no").style.top = Math.random() * 80 + "%";
};

// 烟花
function fire() {
  const f = document.createElement("div");
  f.style.cssText = `
    position:absolute;
    width:8px;
    height:8px;
    background:#fff;
    border-radius:50%;
    left:${Math.random()*100}vw;
    top:${Math.random()*100}vh;
    animation:boom 1s linear forwards;
    z-index:998;
  `;
  document.getElementById("fireworks").appendChild(f);
  setTimeout(() => f.remove(), 1000);
}
const boom = document.createElement("style");
boom.innerHTML = `
  @keyframes boom{0%{transform:scale(1);opacity:1;}100%{transform:scale(3);opacity:0;}}
`;
document.head.appendChild(boom);