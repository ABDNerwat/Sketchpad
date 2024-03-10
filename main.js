let sid = document.getElementById("side").value;
let cells = document.querySelectorAll(".cell");
let erase = false;
console.log(cells);
let drawState=false;
let sketch_color = document.getElementById("sketch_col").value;
let back_color = document.getElementById("back_col").value;

side.addEventListener("keydown", (e) => {
    if (e.keyCode === 13){
        let temp = document.getElementById("side").value;
        if (temp > 80){
            alert("The value must be less than or equal to 80");
            return;
        }
        let sketch_color = document.getElementById("sketch_col").value;
        let back_color = document.getElementById("back_col").value;
        let erase = false;
        const sketch = document.querySelector("#sketch");
        for (let i = 0; i < sid; i++){
            sketch.removeChild(sketch.lastElementChild);
        }
        sid = temp;
        console.log(sid);
        for (let i = 0; i < sid; i++){
            const grid = document.createElement("div");
            grid.classList.add("grid");
            grid.setAttribute("style", "display:flex; flex:1");
            for (let j = 0; j < sid; j++){
                const cell = document.createElement("div");
                cell.classList.add("cell");
                cell.setAttribute("style", `flex:1; background-color:${back_color}`);
                grid.appendChild(cell);
            }
            sketch.appendChild(grid);
        }
        cells = document.querySelectorAll(".cell");
        cells.forEach((item) => {
            item.addEventListener("mouseenter", () =>{
                if (!erase && drawState){ 
                    item.setAttribute("style", `background-color:${sketch_color}`);
                }
                else if (drawState){
                    item.setAttribute("style", `background-color:${back_color}`);
                }
            });
            item.addEventListener("mousedown", () => {
                if (!erase){ 
                    item.setAttribute("style", `background-color:${sketch_color}`);
                }
                else{
                    item.setAttribute("style", `background-color:${back_color}`);
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
            item.setAttribute("style", `background-color:${sketch_color}`);
        }
        else if (drawState){
            item.setAttribute("style", `background-color:${back_color}`);
        }
    });
    item.addEventListener("mousedown", () => {
        if (!erase){ 
            item.setAttribute("style", `background-color:${sketch_color}`);
        }
        else{
            item.setAttribute("style", `background-color:${back_color}`);
        }
    })
});

clear.addEventListener("click", () =>{
    let sketch_color = document.getElementById("sketch_col").value;
    let back_color = document.getElementById("back_col").value;
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
                cell.setAttribute("style", `flex:1; background-color:${back_color}`);
                grid.appendChild(cell);
            }
            sketch.appendChild(grid);
        }
        cells = document.querySelectorAll(".cell");
        cells.forEach((item) => {
            item.addEventListener("mouseenter", () =>{
                if (!erase && drawState){ 
                    item.setAttribute("style", `background-color:${sketch_color}`);
                }
                else if (drawState){
                    item.setAttribute("style", `background-color:${back_color}`);
                }
            });
            item.addEventListener("mousedown", () => {
                if (!erase){ 
                    item.setAttribute("style", `background-color:${sketch_color}`);
                }
                else{
                    item.setAttribute("style", `background-color:${back_color}`);
                }
            })
        });
})

sketch_col.addEventListener("change", () =>{
    let sketch_color = document.getElementById("sketch_col").value;
    let back_color = document.getElementById("back_col").value;
    cells = document.querySelectorAll(".cell");
    cells.forEach((item) => {
        item.addEventListener("mouseenter", () =>{
            if (!erase && drawState){ 
                item.setAttribute("style", `background-color:${sketch_color}`);
            }
            else if (drawState){
                item.setAttribute("style", `background-color:${back_color}`);
            }
        });
        item.addEventListener("mousedown", () => {
            if (!erase){ 
                item.setAttribute("style", `background-color:${sketch_color}`);
            }
            else{
                item.setAttribute("style", `background-color:${back_color}`);
            }
        })
    });
})

back_col.addEventListener("change", () =>{
    let sketch_color = document.getElementById("sketch_col").value;
        let back_color = document.getElementById("back_col").value;
        let erase = false;
        const sketch = document.querySelector("#sketch");
        for (let i = 0; i < sid; i++){
            sketch.removeChild(sketch.lastElementChild);
        }
        sid = document.getElementById("side").value;;
        console.log(sid);
        for (let i = 0; i < sid; i++){
            const grid = document.createElement("div");
            grid.classList.add("grid");
            grid.setAttribute("style", "display:flex; flex:1");
            for (let j = 0; j < sid; j++){
                const cell = document.createElement("div");
                cell.classList.add("cell");
                cell.setAttribute("style", `flex:1; background-color:${back_color}`);
                grid.appendChild(cell);
            }
            sketch.appendChild(grid);
        }
        cells = document.querySelectorAll(".cell");
        cells.forEach((item) => {
            item.addEventListener("mouseenter", () =>{
                if (!erase && drawState){ 
                    item.setAttribute("style", `background-color:${sketch_color}`);
                }
                else if (drawState){
                    item.setAttribute("style", `background-color:${back_color}`);
                }
            });
            item.addEventListener("mousedown", () => {
                if (!erase){ 
                    item.setAttribute("style", `background-color:${sketch_color}`);
                }
                else{
                    item.setAttribute("style", `background-color:${back_color}`);
                }
            })
        });
})