/** @jsxImportSource @emotion/react */
import tw from "twin.macro";
import React from 'react'

export default function ChessBox(props) {
    const colIndex = props.colIndex
    const rowIndex = props.rowIndex
    const selected = props.selected
    const possibleMoves = props.possibleMoves
    const piece = props.piece
    const color = props.color

    const boxColor = (!!(((rowIndex % 2) + (colIndex % 2)) % 2) ? "900" : "100")
    //make a new component which is a red circle and render if the move is an option

    function test() {
        if(color !== 2) {
            possibleMoves([rowIndex,colIndex], piece, color)
        }
    }
    return (
        <>
    
        <td className={"w-10 h-10 bg-yellow-"+ boxColor +" text-center"}>
        <span className={selected && "bg-red-700 rounded-full w-80 h-80"}>
        <button onClick={test}>
            {props.children}
            </button>

            </span>
        </td>
        
        </>
    )
}
