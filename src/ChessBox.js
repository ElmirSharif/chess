/** @jsxImportSource @emotion/react */
import tw from "twin.macro";
import React from 'react'

export default function ChessBox(props) {
    const colIndex = props.colIndex
    const rowIndex = props.rowIndex
    const potential = props.potential
    const possibleMoves = props.possibleMoves
    const piece = props.piece
    const color = props.color

    const selected = props.selected
    const movePiece = props.movePiece

    const boxColor = (!!(((rowIndex % 2) + (colIndex % 2)) % 2) ? "700" : "100")
    //make a new component which is a red circle and render if the move is an option

    function isClicked() {
        if(potential){
            movePiece(selected[0], selected[1], rowIndex, colIndex)


        }
        if(color !== 2) { //if not empty
            possibleMoves([rowIndex,colIndex], piece, color)
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
