const container = document.querySelector("#container");

for (let c = 1; c<=16; c++) {
    const column = document.createElement("div");
    for (let i = 1; i<=16; i++) {
        const square = document.createElement("div");
        square.textContent = i;
        square.style.textAlign = "center";
        square.style.height = "49px";
        square.style.width = "49px";
        square.style.backgroundColor = "blue";
        square.style.border = "1px solid white";
        square.classList.add("hover");
        column.appendChild(square);
        
    }
    container.appendChild(column);
}

const hoverC = document.querySelectorAll(".hover");
hoverC.forEach((squareToColor) => {
    squareToColor.addEventListener("mouseover", () => {
        squareToColor.style.backgroundColor = "lightblue";
    });
});