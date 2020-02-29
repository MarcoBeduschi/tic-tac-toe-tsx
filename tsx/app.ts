let rowsSize = 3;
let columnsSize = 3;

const renderBoard = () => {
  let boardContainer = document.querySelector(".play-area");
  let table = document.createElement('table');
  let tableBody = table.createTBody();

  for (let i = 0; i < rowsSize; i++) {
    let tableRow = document.createElement('tr');

    for (let j = 0; j < columnsSize; j++) {
      let tableData = document.createElement('td');

      tableRow.appendChild(tableData);;
      tableBody.appendChild(tableRow);
    }
  }

  table.appendChild(tableBody);
  boardContainer!.appendChild(table);
};

renderBoard();
