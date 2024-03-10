let sid = document.getElementById("side").value;
let cells = document.querySelectorAll(".cell");
let erase = false;
console.log(cells);
let drawState=false;

side.addEventListener("keydown", (e) => {
    if (e.keyCode === 13){
        let erase = false;
        const sketch = document.querySelector("#sketch");
        for (let i = 0; i < sid; i++){
            sketch.removeChild(sketch.lastElementChild);
        }
        sid = document.getElementById("side").value;
        console.log(sid);
        for (let i = 0; i < sid; i++){
            const grid = document.createElement("div");
            grid.classList.add("grid");
            grid.setAttribute("style", "display:flex; flex:1");
            for (let j = 0; j < sid; j++){
                const cell = document.createElement("div");
                cell.classList.add("cell");
                cell.setAttribute("style", "flex:1; background-color:white");
                grid.appendChild(cell);
            }
            sketch.appendChild(grid);
        }
        cells = document.querySelectorAll(".cell");
        cells.forEach((item) => {
            item.addEventListener("mouseenter", () =>{
                if (!erase && drawState){ 
                    item.setAttribute("style", "background-color:black");
                }
                else if (drawState){
                    item.setAttribute("style", "background-color:white");
                }
            });
            item.addEventListener("mousedown", () => {
                if (!erase){ 
                    item.setAttribute("style", "background-color:black");
                }
                else{
                    item.setAttribute("style", "background-color:white");
                }
            })
        });
    }
})

sketch.addEventListener("mousedown", () => {
    drawState = true;
});

sketch.addEventListener("mouseup", () =>{
    drawState = false;
});

sketch.addEventListener("mouseenter", () => {drawState = false;});

cells.forEach((item) => {
    item.addEventListener("mouseenter", () =>{
        if (!erase && drawState){ 
            item.setAttribute("style", "background-color:black");
        }
        else if (drawState){
            item.setAttribute("style", "background-color:white");
        }
    });
    item.addEventListener("mousedown", () => {
        if (!erase){ 
            item.setAttribute("style", "background-color:black");
        }
        else{
            item.setAttribute("style", "background-color:white");
        }
    })
});

clear.addEventListener("click", () =>{
    let erase = false;
        const sketch = document.querySelector("#sketch");
        for (let i = 0; i < sid; i++){
            sketch.removeChild(sketch.lastElementChild);
        }
        sid = document.getElementById("side").value;
        console.log(sid);
        for (let i = 0; i < sid; i++){
            const grid = document.createElement("div");
            grid.classList.add("grid");
            grid.setAttribute("style", "display:flex; flex:1");
            for (let j = 0; j < sid; j++){
                const cell = document.createElement("div");
                cell.classList.add("cell");
                cell.setAttribute("style", "flex:1; background-color:white");
                grid.appendChild(cell);
            }
            sketch.appendChild(grid);
        }
        cells = document.querySelectorAll(".cell");
        cells.forEach((item) => {
            item.addEventListener("mouseenter", () =>{
                if (!erase && drawState){ 
                    item.setAttribute("style", "background-color:black");
                }
                else if (drawState){
                    item.setAttribute("style", "background-color:white");
                }
            });
            item.addEventListener("mousedown", () => {
                if (!erase){ 
                    item.setAttribute("style", "background-color:black");
                }
                else{
                    item.setAttribute("style", "background-color:white");
                }
            })
        });
})