const container = document.createElement("div");
container.style.display = "flex";
container.style.flexDirection = "column";
//0123456789ABCDEF
["#1abc9c", "#16a085", "#f1c40f", "#f39c12"].forEach((x) => {
  const box = document.createElement("div");
  box.style.width = "100px";
  box.style.height = "100px";
  box.style.backgroundColor = x;
  container.appendChild(box);
});

document.body.appendChild(container);
