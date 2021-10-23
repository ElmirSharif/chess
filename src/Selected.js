import React from 'react'

export default function Selected(props) {
    const selected = props.selected
    return (
         <span tw="bg-red-700 rounded-full w-10 h-10">
             {props.children}
        </span>
    )
    }