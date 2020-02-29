"use strict";
let board = ["", "", "", "", "", "", "", "", ""];
let board_container = document.querySelector(".play-area");
let boardContainer = document.querySelector(".play-area");
const render_board = () => {
    let table = document.createElement('table');
    board.forEach((i) => {
        let tableBody = table.createTBody();
        table.appendChild(tableBody);
    });
    boardContainer.appendChild(table);
};
render_board();
