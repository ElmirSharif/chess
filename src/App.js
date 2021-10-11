/** @jsxImportSource @emotion/react */
import tw from "twin.macro";
import React, {useState, useEffect} from 'react'
import ChessBox from './ChessBox'
import knight from './pieceMoves/knight'
import pawn from './pieceMoves/pawn'
import bishop from './pieceMoves/bishop'
import rook from './pieceMoves/rook'
import queen from './pieceMoves/queen'

export default function App() {
  /*
  1: pawn
  2: knight
  3: bishop
  4: rook
  5: queen
  6: king
*/
  //const [board, setBoard] =
  const lookUpTable = [
    ["blank","blank", "blank"],
    ["w-pawn","b-pawn"],
    ["w-knight","b-knight"],
    ["w-bishop","b-bishop"],
    ["w-rook","b-rook"],
    ["w-queen","b-queen"],
    ["w-king","b-king"]

  ]
  const [pos, setPos] = useState("")
  
  const [board, setBoard] = useState([
    [ [1,4, false],[1,2, false],[1,3 , false],[1,5 , false],[1,6 , false],[1,3 , false],[1,2 , false],[1,4 , false]],

    [ [1,1 , false],[1,1, false],[1,1, false],[1,1, false],[1,1, false],[1,1, false],[1,1, false],[1,1 , false]],

    [[2, 0, false],[2, 0, false],[2, 0, false],[2, 0, false],[2, 0, false],[2, 0, false],[2, 0, false],[2, 0, false]],

    [[2, 0, false],[2, 0, false],[2, 0, false],[2, 0, false],[2, 0, false],[2, 0, false],[2, 0, false],[2, 0, false]],

    [[2, 0, false],[2, 0, false],[2, 0, false],[2, 0, false],[2, 0, false],[2, 0, false],[2, 0, false],[2, 0, false]],

    [[2, 0, false],[2, 0, false],[2, 0, false],[2, 0, false],[2, 0, false],[2, 0, false],[2, 0, false],[2, 0, false]],

    [ [0, 1, false],[0, 1, false],[0, 1, false],[0, 1, false],[0, 1, false],[0, 1, false],[0, 1, false],[0, 1, false] ],

    [ [0, 4, false],[0, 2, false],[0, 3, false],[0,5 , false],[0,6 , false],[0, 3, false],[0, 2, false],[0, 4, false] ]
    ])



    function renderPiece(col) {
      
      if (col[0] === 2) {
        return <span  style={col[2] ? {"backgroundColor": "red"} : {"backgroundColor": ""}}>{"\u00A0\u00A0\u00A0\u00A0\u00A0"}</span>
      } else {
        return <span  style={col[2] ? {"backgroundColor": "red"} : {"backgroundColor": ""}}> {lookUpTable[col[1]][col[0]]}</span>
      }
    }

    function movePiece(fromA, fromB, toA, toB) {
      let temp = board
      temp[toA][toB] = temp[fromA][fromB] //moving piece to new place
      temp[fromA][fromB] = [2,0] ///setting the old place as empty
      console.log(temp)
      setBoard([...temp])
    }

   function handleInput(e) {
     setPos(e.target.value)
   }

  function runMove() {
    movePiece(pos[0],pos[1],pos[2],pos[3])
  }
    

function test() {
  //0 = white
  //1 = black
  possibleMoves([5,3], 3, 0)
}
  function possibleMoves(pos, piece, color) {
    let pieceColor = color
    let possiblePos = []
    const xpos = pos[0]
    const ypos = pos[1]
    let tempBoard = board
    let prevPos = pos
    let goOutOfLoop = false
    /*
  1: pawn      DONE
  2: knight    DONE
  3: bishop    DONE
  4: rook      DONE
  5: queen     
  6: king      DONE

*/
    switch (piece) {
      case 1:
        pawn(pieceColor, board, prevPos, possiblePos)
        break;
      case 2:
        
        knight(pieceColor, board, prevPos, possiblePos)
        
        break;
      case 3:
        bishop(pieceColor, board, prevPos, possiblePos, goOutOfLoop, pos)
        break;
      case 4:
        rook(pieceColor, board, prevPos, possiblePos, goOutOfLoop)
        
      
        break;
      case 5:
        queen(pieceColor, board, prevPos, possiblePos, goOutOfLoop, pos)
        break;
      case 6:
        
      default:
        break;
    }
    for (let i = 0; i < possiblePos.length; i++) {
      const element = possiblePos[i];
      console.log(element)
      //tempBoard[element[0]][element[1]][2] = true       
    }
    setBoard([...tempBoard])
  }


  return (
    <div>
      <table tw="table-auto">
      {
        
      board.map((row, rowIndex) => {
        return(
        <tr>{row.map((col, colIndex) => {
          return(
             <ChessBox rowIndex={rowIndex} colIndex={colIndex} selected={col[2]}>
            {

          <img src={"/chessicons/" + lookUpTable[col[1]][col[0]] +".png"}/>
          }
          </ChessBox>)
        })
      }
        </tr>
        )
      })

      }
      </table>
      <button onClick={runMove}>Move</button>
      <input value={pos} onChange={handleInput}></input>
      <button onClick={test}>TEST BUTTON</button>
    </div>
  )
}
