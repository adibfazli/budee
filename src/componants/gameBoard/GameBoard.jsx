import React , {useState} from 'react';
import styles from './GameBoard.module.css';

//this is the main board of the game, which contains 64 cell
const Board = (props) =>{

    let table = []
    //creating 64 cell for the game board
    for (let i=0 ; i<64 ; i++) table.push(i)
    // variable for players turn / and players units
    const [ turn ,setTurn] = useState(-1);
    const [cellStatus , setCellStatus] = useState(true);
    const [movingCell , setMovingCell] = useState();
    const [playerOne , setPlayerOne] = useState([1,3,5,7,8,10,12,14,17,19,21,23]);
    const [playerTwo , setPlayerTwo] = useState([62,60,58,56,55,53,51,49,46,44,42,40]);

    return (
    
        <div className={styles.body}>
            {console.log(table)}
            <div className={styles.Board_cell_container}>
                {/* usig the table variable that contains 64 blank div */}
                {table.map((e)=>{ 
                    
                    return ( <div 
                        key={e} 
                        className={playerOne.includes(e) ? styles.player1 : playerTwo.includes(e) ? styles.player2 : styles.e} 
                        value={e}
                        onClick={(evt)=>{ 
                            if(cellStatus){ 
                                !playerOne.includes(e) && !playerTwo.includes(e) && playerOne.splice( playerOne.findIndex(e) , 1 , movingCell )
                                setTurn(turn * -1)
                                setMovingCell(null)
                                setCellStatus(false)
                            }else {
                                playerOne.includes(e) && playerTwo.includes(e) && playerOne.splice(playerOne.findIndex(e),1)
                                setMovingCell(e)
                                setCellStatus(true)
                            }
                        }}></div>)
                })}
            </div>
        </div>
    )
}

export default Board;