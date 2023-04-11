function squareGrid(dimension){
    const cdiv = document.querySelector(".divContainer");
    const total = (dimension * dimension) + dimension;
    const mod = dimension +1;

    for(let i =1; i<total; i++){
        const div = document.createElement("div");

        if(i % mod === 0){
            div.style.cssText = "border:0 , height:0, width:100%"
        }else{
            div.style.cssText = "border:1px solid black, height: 25px, width :25px";
        }
        cdiv.appendChild(div);
    }
}
squareGrid(16);



