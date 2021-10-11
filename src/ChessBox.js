/** @jsxImportSource @emotion/react */
import tw from "twin.macro";
import React from 'react'

export default function ChessBox(props) {
    const colIndex = props.colIndex
    const rowIndex = props.rowIndex
    const selected = props.selected

    const color = !!(((rowIndex % 2) + (colIndex % 2)) % 2)
    //make a new component which is a red circle and render if the move is an option
    return (
        <span>
            
        {color ? <td tw="w-10 h-10 bg-yellow-900 text-center ">
        <span tw="bg-red-700 rounded-full w-10 h-10">
            
            {props.children}

            </span>
        </td>: <td tw="w-10 h-10 bg-yellow-100 text-center z-20">
            {props.children}
        </td>}
    
        </span>
    )
}
