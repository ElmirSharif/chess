import React, {useState, useEffect} from 'react'
import ChessBox from './ChessBox'

import isKingAttacked from './functions/isKingAttacked'
import clearPossible from './functions/clearPossible'
import tempMove from './functions/tempMove'
import compareArray from './functions/compareArray'
import checkForCheckmate from './functions/checkForCheckmate'
import checkForStalemate from './functions/checkForStalemate'

export default function App() {
  /*
  1: pawn
  2: knight
  3: bishop
  4: rook
  5: queen
  6: king
*/



  const lookUpTable = [
    ["blank","blank", "blank"],
    ["w-pawn","b-pawn"],
    ["w-knight","b-knight"],
    ["w-bishop","b-bishop"],
    ["w-rook","b-rook"],
    ["w-queen","b-queen"],
    ["w-king","b-king"]

  ]
  const [moveHistory, setMoveHistory] = useState([])
  const [emptyMoves, setEmptyMoves] = useState(0)
  const [boardHistory, setBoardHistory] = useState([])

  // function Fibonacci(remLength, numArray) {
  //   if (numArray.length===1) {
  //     return Fibonacci(remLength-1,[numArray[0],numArray[0]])
  //   }
  //   else if (remLength===1) {
  //     return numArray
      
  //   } else{
  //     console.log(numArray)
  //     numArray.push(numArray[numArray.length-1]+numArray[numArray.length-2])
  //     return Fibonacci(remLength-1,numArray)
  //   }
  // }


  useEffect(() => {
    let counter = 0
    
    for (let i = boardHistory.length-1; i > 0; i=i-1) {
      if(compareArray(boardHistory[i],boardHistory[boardHistory.length-1])){
        counter++
        
        if (counter===3) {
          console.log("draw")
        }
      }
    }
  }, [boardHistory])
  useEffect(() => { //50 move draw rule
    if(emptyMoves === 50) {
      console.log("DRAW")
    }
  }, [emptyMoves])

  
  const [board, setBoard] = useState([
    [ [1,4, false, "rb1"],[1,2, false, "nb1"],[1,3 , false, "bb1"],[1,5 , false, "qb1"],[1,6 , false, "kb1"],[1,3 , false, "bb2"],[1,2 , false, "nb2"],[1,4 , false, "rb2"]],

    [ [1,1 , false, "pb1"],[1,1, false, "pb2"],[1,1, false, "pb3"],[1,1, false, "pb4"],[1,1, false, "pb5"],[1,1, false, "pb6"],[1,1, false, "pb7"],[1,1 , false, "pb8"]],

    [[2, 0, false],[2, 0, false],[2, 0, false],[2, 0, false],[2, 0, false],[2, 0, false],[2, 0, false],[2, 0, false]],

    [[2, 0, false],[2, 0, false],[2, 0, false],[2, 0, false],[2, 0, false],[2, 0, false],[2, 0, false],[2, 0, false]],

    [[2, 0, false],[2, 0, false],[2, 0, false],[2, 0, false],[2, 0, false],[2, 0, false],[2, 0, false],[2, 0, false]],

    [[2, 0, false],[2, 0, false],[2, 0, false],[2, 0, false],[2, 0, false],[2, 0, false],[2, 0, false],[2, 0, false]],

    [[2, 0, false],[2, 0, false],[2, 0, false],[2, 0, false],[0,6 , false, "kw1"],[2, 0, false],[2, 0, false],[2, 0, false]],

    [[2, 0, false],[2, 0, false],[2, 0, false],[2, 0, false],[2, 0, false],[2, 0, false],[2, 0, false],[2, 0, false]]
    ])


    /*  
  const [board, setBoard] = useState([
    [ [1,4, false, "rb1"],[1,2, false, "nb1"],[1,3 , false, "bb1"],[1,5 , false, "qb1"],[1,6 , false, "kb1"],[1,3 , false, "bb2"],[1,2 , false, "nb2"],[1,4 , false, "rb2"]],

    [ [1,1 , false, "pb1"],[1,1, false, "pb2"],[1,1, false, "pb3"],[1,1, false, "pb4"],[1,1, false, "pb5"],[1,1, false, "pb6"],[1,1, false, "pb7"],[1,1 , false, "pb8"]],

    [[2, 0, false],[2, 0, false],[2, 0, false],[2, 0, false],[2, 0, false],[2, 0, false],[2, 0, false],[2, 0, false]],

    [[2, 0, false],[2, 0, false],[2, 0, false],[2, 0, false],[2, 0, false],[2, 0, false],[2, 0, false],[2, 0, false]],

    [[2, 0, false],[2, 0, false],[2, 0, false],[2, 0, false],[2, 0, false],[2, 0, false],[2, 0, false],[2, 0, false]],

    [[2, 0, false],[2, 0, false],[2, 0, false],[2, 0, false],[2, 0, false],[2, 0, false],[2, 0, false],[2, 0, false]],

    [ [0, 1, false, "pw1"],[0, 1, false, "pw2"],[0, 1, false, "pw3"],[0, 1, false, "pw4"],[0, 1, false, "pw5"],[0, 1, false, "pw6"],[0, 1, false, "pw7"],[0, 1, false, "pw8"] ],

    [ [0, 4, false, "rw1"],[0, 2, false, "nw1"],[0, 3, false, "bw1"],[0,5 , false, "qw1"],[0,6 , false, "kw1"],[0, 3, false, "bw2"],[0, 2, false, "nw2"],[0, 4, false, "rw2"] ]
    ])*/

//[color, piece, isPotential, piece code]
const [selected, setSelected] = useState([null,null])


function movePiece(fromA, fromB, toA, toB) {
  const pieceCode = board[fromA][fromB][3]
  //Checking if piece has been captured AND pawn has not been moved(50move draw rule)
  if(board[toA][toB][0] === 2 && board[fromA][fromB][1] !== 1){
    setEmptyMoves(prev => prev + 1)
  } else {
    setEmptyMoves(0)
  }


  const temp = tempMove(fromA, fromB, toA, toB, board)

  //actually moving


  //////////////////////////////////////
  setMoveHistory(prev => [...prev, ...[[pieceCode, toA, toB]]])//adding move to move history
  
  checkForStalemate(temp, moveHistory)
  checkForCheckmate( temp, moveHistory)
  // if(checkForCheckmate( temp, moveHistory)===false){
  //   console.log(checkForStalemate(temp, moveHistory))
  // } else {
  //   console.log("checkmate")
  // }
  setBoard(clearPossible(temp))//updating board and removing possible moves
  setBoardHistory(prev=> [...prev, ...[[temp]]])//adding new board to board History
}

//[1, 2, 3]
//if(arrayA[i] === arrayB[i]){



  return (
    <div>
      <table tw="table-auto">
      {
        
      board.map((row, rowIndex) => {
        return(
        <tr>{row.map((col, colIndex) => {
          return(
          <ChessBox board={board} col={col} rowIndex={rowIndex} colIndex={colIndex} selected={selected} movePiece={movePiece} moveHistory={moveHistory} setBoard={setBoard} setSelected={setSelected}>
            <img alt="chess piece" className="h-10" src={"/chessicons/" + lookUpTable[col[1]][col[0]] +".png"}/>
          </ChessBox>
          
          )
          
        })
      }
        </tr>
        )
      })

      }
      </table>
    </div>
  )
}
