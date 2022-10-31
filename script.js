const container = document.getElementById("container");

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "item";
  };
  const items = document.getElementsByClassName("item");
  let length=items.length;

  for (i=0; i<length; i++) {
    let cell=items.item(i);
    cell.addEventListener("mouseover", function change() { 
    cell.style.backgroundColor='green'})
}
};

makeRows(16, 16)

function enterNumber() {
  let userRows = prompt ("Please enter number of squares per row of grid");
  let userCols =  prompt ("Please enter number of squares per collumn of grid");
  makeRows(userRows, userCols)
}

document.querySelector("#chooseSizeButton").addEventListener('click', function() {
  let userRows = prompt ("Please enter number of squares per row of grid");
  let userCols =  prompt ("Please enter number of squares per collumn of grid");
  let targetItems=document.getElementsByClassName("item");
  for (let i=0; i<targetItems.length; i++) {
    container.removeChild(targetItems[i])
  }
  makeRows(userRows, userCols);
})


