//selecting the button using its class selector
const button = document.querySelector(".popup");
//Adding  text content to the button
button.textContent = "Click here";
/*create a function for the prompts
Add an event listener that looks out for the click*/

const userAns = ()=>{
    let ans1 = prompt("Please enter the number of squares for one  side", "Grid dimensions for one side");
    let firstSide = parseInt(ans1);
    let ans2  = prompt("Please enter the number of squares for the other side", "Grid dimensions for the other side");
    let secondSide = parseInt(ans2);
    }

button.addEventListener("click", userAns)

//creating a sqaue grid
var n = 16;
//selecting the div container which holds the entire grid
const cDiv = document.querySelector(".divContainer");

//creating the div
for(let i =1; i<n; i++){
    cDiv.innerHTML+= '<div class = "row">';

    for(j=0; j<n ; j++){
    cDiv.innerHTML += '<div class = "smallBox">';
    }
};
//setting up a hover effect on the div

const smallBoxes = document.querySelectorAll(".smallBox");
[...smallBoxes].forEach(smallBox=>{
    smallBox.addEventListener("mouseover", ()=> {
        smallBox.classList.add("permahover");
    });
});













