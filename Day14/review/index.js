const [boxCount, width, height, bg, column, gap] = prompt(
  "박스갯수, 넓이, 높이, 배경색, 몇컬럼, 갭"
).split(" ");

const container = document.createElement("section");
container.style.display = "grid";
container.style.gridTemplateColumns = `repeat(${Number(column)},1fr)`;
container.style.gap = gap + "px";

Array(Number(boxCount))
  .fill()
  .forEach((x) => {
    const box = document.createElement("div");
    box.style.width = width + "px";
    box.style.height = height + "px";
    box.style.backgroundColor = bg;
    container.appendChild(box);
  });

document.body.appendChild(container);
