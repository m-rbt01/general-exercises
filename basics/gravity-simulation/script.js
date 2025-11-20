function getFinalState(board){
    const ROWS = board.length;
    const COLUMNS = board[0].length;
    const EMPTY = "-";
    const BOX = "#";
    const OBSTACLE = "*";

    for(let row = ROWS - 1; row > 0; row--){ //move up rows
        for(let col = 0; col < COLUMNS; col++){ //move across the columns of the current row
            let groundRowIndex = -1;
            for(let r = row; r >= 0; r--){ //search for moveable boxes up current row and column
                /*console.log(`On row: ${r} Column: ${col}`);
                console.table(board);*/
                if(groundRowIndex === -1 && board[r][col] === EMPTY) groundRowIndex = r; //found next empty cell
                else if(groundRowIndex !== -1 && board[r][col] === OBSTACLE) groundRowIndex = -1; //restart search after obstacle
                else if(groundRowIndex !== -1 && board[r][col] === BOX){ //found next box to move down
                    //console.log("SWAP");
                    [board[groundRowIndex][col], board[r][col]] = [BOX, EMPTY];
                    r = groundRowIndex; 
                    groundRowIndex = -1;
                }
            }
        }
    }
    return board;
}

module.exports = getFinalState;