const container = document.querySelector("#container");

let numOfSquares = 5;
    
function getNumOfSquares() {
    numOfSquares = Number(prompt("How many squares should each side have? Enter a number between 1 and 100."));
    if ((typeof numOfSquares === "number") &&
        (numOfSquares > 0) &&
        (numOfSquares <= 100)) {
        return numOfSquares;
    } else if (numOfSquares === 0) {
        alert("It's OK to cancel. Goodbye!");
        container.textContent = " byeeeeeee";
    } else {
        alert("Hey, that doesn't meet my requirements! Please try again.");
        getNumOfSquares();
    }  
}

const getSquares = document.querySelector(".size");
getSquares.addEventListener("click", () => {
    container.replaceChildren();
    getNumOfSquares();
    drawGrid();
})

container.addEventListener("mouseover", (event) => {
    if (event.target.classList.contains("hover")) {
        const squareToColor = event.target;

        switch(choice) {
            case "normal": 
                squareToColor.style.backgroundColor = "azure";
                squareToColor.style.opacity = 1.0;
                break;
            case "random":
                squareToColor.style.backgroundColor = getRandomColor();
                squareToColor.style.opacity = 1.0;
                break;
            case "shading":
                let currentOpacity = squareToColor.style.opacity;
                let originalColor = squareToColor.style.backgroundColor;
                if (originalColor == "black") {
                    squareToColor.style.backgroundColor = "azure";
                }
                if ((currentOpacity - 0.1) < 0) {
                    squareToColor.style.opacity = 1.0;
                } else {
                    squareToColor.style.opacity = currentOpacity - 0.1;
                }
                break;
        }
    }
});

const colorChoice = document.querySelector("#colors");
let choice = colorChoice.value;
colorChoice.addEventListener("change", () => {
    choice = colorChoice.value;
});
    
function getRandomVal() {
    let randomVal = Math.floor(Math.random() * 256);
    return randomVal;
}

function getRandomColor() {
    let randomColor = "rgb(" + getRandomVal() + "," + getRandomVal() + "," + getRandomVal() + ")";
    return randomColor;
} 

function drawGrid() {
    for (let c = 1; c<=numOfSquares; c++) {
        const column = document.createElement("div");
        column.classList.add("hover");
        for (let i = 1; i<=numOfSquares; i++) {
            const square = document.createElement("div");
            square.style.backgroundColor = "black";
            square.style.border = "1px solid azure";
            square.classList.add("hover");
            column.appendChild(square);
        }
        container.appendChild(column);
    }
}

drawGrid();
