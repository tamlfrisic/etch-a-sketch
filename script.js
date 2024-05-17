const container = document.querySelector("#container");
//const line

for (let c = 1; c<=16; c++) {
    const column = document.createElement("div");
    // column.textContent = "1";
    // column.style.height = "49px";
    // column.style.width = "49px";
    // column.style.border = "1px solid white";
    for (let i = 1; i<=16; i++) {
        const square = document.createElement("div");
        square.textContent = i;
        square.style.textAlign = "center";
        square.style.height = "49px";
        square.style.width = "49px";
        square.style.backgroundColor = "blue";
        square.style.border = "1px solid white";
        column.appendChild(square);
        
    }
    container.appendChild(column);
}
