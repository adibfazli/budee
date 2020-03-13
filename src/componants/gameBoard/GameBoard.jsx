import React from 'react';
import styles from './GameBoard.module.css';

//this is the main board of the game, which contains 64 cell
const Board = (props) =>{
    let table = []
    for (let i=0 ; i<64 ; i++) table.push(<div></div>)
    
    return (
        <div className={styles.body}>
            <div className={styles.Board_cell_container}>
                {table}
            </div>
        </div>
    )
}

export default Board;