import React , {useState} from 'react';
import styles from './GameBoard.module.css';

//this is the main board of the game, which contains 64 cell
const Board = (props) =>{

    let table = []
    //creating 64 cell for the game board
    for (let i=0 ; i<64 ; i++) table.push(i)

    const [cellStatus , SetCellStatus] = useState()

    const [playerOne , SetPlayerOne] = useState({
        
    })
    const [playerTwo , SetPlayerTwo] = useState({
        
    })

    return (
    
        <div className={styles.body}>
            {console.log(table)}
            <div className={styles.Board_cell_container}>
                {/* usig the table variable that contains 64 blank div */}
                {table.map((e)=>{ 
                    
                    return ( <div 
                        key={e} 
                        className={styles.e} 
                        value={e}
                        onClick={(evt)=>{ evt.target.style.backgroundColor = 'black'
                            
                        }}></div>)
                })}
            </div>
        </div>
    )
}

export default Board;