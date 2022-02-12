import React from 'react'
import possibleMoves from './functions/possibleMoves'

export default function ChessBox(props) {
    const movePiece = props.movePiece
    const col = props.col
    const colIndex = props.colIndex
    const rowIndex = props.rowIndex
    const potential = col[2]
    const piece = col[1] //int value associated with a type of piece that we are about to capture(except for en passant)
    const color = col[0] //color of the piece
    const board = props.board
    const setBoard = props.setBoard
    const setSelected = props.setSelected
    const selected = props.selected
    const moveHistory = props.moveHistory
    const boxColor = (!!(((rowIndex % 2) + (colIndex % 2)) % 2) ? "700" : "100")
    //make a new component which is a red circle and render if the move is an option
    //row-updown
    //coloumn-rightleft
    //selected-from
    //colIndex, rowIndex- to
    function isClicked() {
        if(potential){ //if the place is a potental move of a piece
            movePiece(selected[0], selected[1], rowIndex, colIndex)
        } else if(color !== 2) { //if not empty
            
            const [newBoard, newSelected] = possibleMoves([rowIndex,colIndex], piece, color, board, moveHistory)
            setBoard(newBoard)
            setSelected(newSelected)
            //save to state
        }
    }
    return (
        <>
    
        <td className={"w-10 h-10 bg-yellow-"+ boxColor +" text-center"}>
        <span className={potential && "bg-red-700 rounded-full w-10 h-10"}>
        <button onClick={isClicked}>
            {props.children}
            </button>

            </span>
        </td>
        
        </>
    )
}
