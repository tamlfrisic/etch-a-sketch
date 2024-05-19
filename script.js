// 5/18: 
// - need to figure out how to create the divs without having to 
//      define the number of pixels.... 
// - also, use a prompt to assign a value to a variable in the 
//      nested loop (instead of the 16) a global var(?)
//
//

const container = document.querySelector("#container");

let numOfSquares;
let squareLength;
    
function getNumOfSquares() {
    // container.remove();
    numOfSquares = Number(prompt("How many squares do you wish?"));
    console.log("You chose: " + numOfSquares + " squares!");
    return numOfSquares;
}

const getSquares = document.querySelector(".size");
getSquares.addEventListener("click", () => {
    container.replaceChildren();
    getNumOfSquares();
    squareLength = 960 / numOfSquares;
    squareLength -=  (numOfSquares - 2);
    drawGrid();
})

// function removeGrid() {
    
//     if (container.hasChildNodes) { 
//     const oldGrid = container.querySelectorAll(".hover");
//     console.log(oldGrid);
//     // removeGrid();
//     oldGrid.forEach(square => {
//         container.remove(square);
//         console.log("hiii");
//     });  
//     } 
// };

// function clearGrid() {
//     if (container.hasChildNodes) { 
//         container.replaceChildren();
//         // console.log(container.childNodes);
//         // const oldGrid = container.querySelectorAll(".hover");
//         // // console.log(oldGrid);
//         // // removeGrid();
//         // oldGrid.forEach(function (square) {
//         //     container.remove(square);
//         //     // console.log("this should now be an empty nodelist: " + oldGrid);
//         // });  
//         } 
// }

function drawGrid() {
    console.log("it's drawing " + numOfSquares + " this many squares");
    
    
    
    // console.log(oldSquares);
   
    // if (oldSquares.hasChildNodes()) {
    //     oldSquares.removeChild(oldSquares.firstChild);
    //     console.log("it works");
    // }

    for (let c = 1; c<=numOfSquares; c++) {
        const column = document.createElement("div");
        for (let i = 1; i<=numOfSquares; i++) {
            const square = document.createElement("div");
            square.textContent = i;
            square.style.textAlign = "center";
            square.style.height = squareLength + "px";
            square.style.width = squareLength + "px";
            square.style.backgroundColor = "black";
            square.style.border = "1px solid azure";
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
    
    // use math random to generate a random RGB value (this should probably be a function??)
    
    let randomColor;
    
    function getRandomVal() {
        let randomVal = Math.floor(Math.random() * 256);
        console.log(randomVal);
        return randomVal;
    
    }
    
    function getRandomColor() {
        randomColor = "rgb(" + getRandomVal() + "," + getRandomVal() + "," + getRandomVal() + ")";
        console.log(randomColor);
        return randomColor;
    } 
    
    let opacidad = 1.0;
    container.addEventListener("mouseover", (event) => {
        const squareToColor = event.target;
            squareToColor.style.backgroundColor = getRandomColor();
            squareToColor.style.opacity = opacidad - 0.1;
            console.log("opacity = " + opacidad);
    });
    
    // allow the grid to return to its original color (cool but against prompt)
    // container.addEventListener("mouseout", (event) => {
    //     const squareToColor = event.target;
    //         squareToColor.style.backgroundColor = "blue";
    // });
}



