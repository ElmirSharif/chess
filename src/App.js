import React, {useState, useEffect} from 'react'
import ChessBox from './ChessBox'

import possiblePieceMoves from './functions/possiblePieceMoves'
import isKingAttacked from './functions/isKingAttacked'
import clearPossible from './functions/clearPossible'
import tempMove from './functions/tempMove'

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


  function cutArray(array, from, till) {
    let newArray=[]
    for (let i = from; i < till; i++) {
      const element = array[i];    
      newArray.push(element)
    }
    console.log(newArray)
  }
  useEffect(() => { //50 move draw rule
    if(emptyMoves === 50) {
      console.log("DRAW")
    }
  }, [emptyMoves])
  //   useEffect(() => {
  //     for (let i = 0; i < 50; i=+3) {
  //     console.log(i)
  //     console.log(cutArray(moveHistory, moveHistory.length-i, moveHistory.length))
  //     console.log(cutArray(moveHistory, moveHistory.length-i-i, moveHistory.length-i))
  //     if(cutArray(moveHistory, moveHistory.length-i, moveHistory.length)===cutArray(moveHistory, moveHistory.length-i-i, moveHistory.length-i)) {
  //       console.log("draw")
  //     }
  //  }
  //     }, [moveHistory])
  const [board, setBoard] = useState([
    [ [1,4, false, "rb1"],[1,2, false, "nb1"],[1,3 , false, "bb1"],[1,5 , false, "qb1"],[1,6 , false, "kb1"],[1,3 , false, "bb2"],[1,2 , false, "nb2"],[1,4 , false, "rb2"]],

    [ [1,1 , false, "pb1"],[1,1, false, "pb2"],[1,1, false, "pb3"],[1,1, false, "pb4"],[1,1, false, "pb5"],[1,1, false, "pb6"],[1,1, false, "pb7"],[1,1 , false, "pb8"]],

    [[2, 0, false],[2, 0, false],[2, 0, false],[2, 0, false],[2, 0, false],[2, 0, false],[2, 0, false],[2, 0, false]],

    [[2, 0, false],[2, 0, false],[2, 0, false],[2, 0, false],[2, 0, false],[2, 0, false],[2, 0, false],[2, 0, false]],

    [[2, 0, false],[2, 0, false],[2, 0, false],[2, 0, false],[2, 0, false],[2, 0, false],[2, 0, false],[2, 0, false]],

    [[2, 0, false],[2, 0, false],[2, 0, false],[2, 0, false],[2, 0, false],[2, 0, false],[2, 0, false],[2, 0, false]],

    [ [0, 1, false, "pw1"],[0, 1, false, "pw2"],[0, 1, false, "pw3"],[0, 1, false, "pw4"],[0, 1, false, "pw5"],[0, 1, false, "pw6"],[0, 1, false, "pw7"],[0, 1, false, "pw8"] ],

    [ [0, 4, false, "rw1"],[0, 2, false, "nw1"],[0, 3, false, "bw1"],[0,5 , false, "qw1"],[0,6 , false, "kw1"],[0, 3, false, "bw2"],[0, 2, false, "nw2"],[0, 4, false, "rw2"] ]
    ])

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
  
  setBoard([...clearPossible(board)])

  const temp = tempMove(fromA, fromB, toA, toB, board)

  //actually moving


  //////////////////////////////////////
  setMoveHistory(prev => [...prev, ...[[pieceCode, toA, toB]]])//adding move to move history
  isKingAttacked(1, temp, moveHistory) && console.log("BLACK IS IN CHECK")
  isKingAttacked(0, temp, moveHistory) && console.log("WHITE IS IN CHECK")
  setBoard([...temp])//updating board
}


  function possibleMoves(pos, piece, color) {
    //color is 0 when white and 1 when black
    //piece is a number
    const isBlack = !!color
    const isWhite = !isBlack
    

    let possiblePos = possiblePieceMoves(pos, piece, color, board, moveHistory)

    const xpos = pos[0]
    const ypos = pos[1]
    let tempBoard = board.slice()

    
    setSelected([xpos, ypos])
    setBoard([...clearPossible(board)])

    for (let i = 0; i < possiblePos.length; i++) {
      //if king, and king is in his orignal place, and king can castle and positions between king and rook are not attacked
      const element = possiblePos[i];
      //const futureBoard = tempMove(xpos, ypos, element[0], element[1], [], board)
       
      const futureBoard = tempMove(xpos, ypos, element[0], element[1], tempBoard)
      const isWhitePotentiallyAttacked = isKingAttacked(0, futureBoard, moveHistory)
      const isBlackPotentiallyAttacked = isKingAttacked(1, futureBoard, moveHistory)

      if(!((isWhitePotentiallyAttacked && isWhite) || (isBlackPotentiallyAttacked && isBlack))) {
        tempBoard[element[0]][element[1]][2] = true  //sets the places that have red circles
      }
    }
    //Checking if castle is allowed by checking if d1 f1 d8 f8 are attacked (inbetween)
    for (let i = 0; i <= 7; i += 7) { //check both black and white
     //if king is in original place and is king
     //check if left or right of king is attacked, if so don't allow castle
        if(piece === 6 && ypos === 4 && tempBoard[i][3][2] === false) {
          tempBoard[i][2][2] = false
        }
        if(piece === 6 && ypos === 4 && tempBoard[i][5][2] === false) {
          tempBoard[i][6][2] = false
        }
      }
      
    
    //console.log(tempBoard)
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
          <ChessBox board={board} col={col} rowIndex={rowIndex} colIndex={colIndex} possibleMoves={possibleMoves} selected={selected} movePiece={movePiece}>
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
