function squareGrid(dimension){
    const cdiv = document.getElementById("divContainer");
    const total = (dimension *dimension) + dimension;
    const mod = dimension +1;

    for(let i =0; i<total; i++){
        const div = document.createElement("div");

        if(i % mod === 0){
            div.style.cssText = "border:0 , height:0, width:100%"
        }else{
            div.style.cssText = "border:1px solid black, height: 40px, width :40px";
        }
        cdiv.appendChild(div);
    }
}
squareGrid(16);



