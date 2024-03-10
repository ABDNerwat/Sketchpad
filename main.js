let sid = document.getElementById("side").value;
const sketch = document.querySelector("#sketch")

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
    console.log(sketch.querySelectorAll("div").length);
}

