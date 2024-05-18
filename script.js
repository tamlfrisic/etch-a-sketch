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


// hover/color method 1:
// addEventListener is only able to add an event to 1 DOM element
// we need to loop through the nodelist to add ELs to every element

// const hoverC = document.querySelectorAll(".hover");
// hoverC.forEach((squareToColor) => {
//     squareToColor.addEventListener("mouseover", () => {
//         squareToColor.style.backgroundColor = "lightblue";
//     });
// });

// hover/color method 2:
// //event delegation
// it doesn't need the if statement, because it's already "checking" 
// the conditions with the event listener 
container.addEventListener("mouseover", (event) => {
    const squareToColor = event.target;
        squareToColor.style.backgroundColor = "lightgreen";
});
