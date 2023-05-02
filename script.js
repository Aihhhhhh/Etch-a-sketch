//creating a sqaue grid
var n = 16;

const cDiv = document.querySelector(".divContainer");


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
    })
});























