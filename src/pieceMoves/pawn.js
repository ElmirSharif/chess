export default function pawn(pieceColor, board, prevPos, possiblePos) {
    if (pieceColor===0) {                       //white
        if (board[prevPos[0]-1][prevPos[1]][1]===0) { 
          possiblePos.push([prevPos[0]-1,prevPos[1]])  //moving forward
        }
        if (prevPos[0]===6) {
          possiblePos.push([prevPos[0]-2,prevPos[1]])  //double move
        }
        if (board[prevPos[0]-1][prevPos[1]-1][0]===1) { //capturing a piece to the left
          possiblePos.push([prevPos[0]-1,prevPos[1]-1])
        }
        if (board[prevPos[0]-1][prevPos[1]+1][0]===1) { //capturing a piece to the right
          possiblePos.push([prevPos[0]-1,prevPos[1]+1])
        }


      } else {                                    //black
        if (board[prevPos[0]+1][prevPos[1]][1]===0) { 
          possiblePos.push([prevPos[0]+1,prevPos[1]])  //moving forward
        }
        if (prevPos[0]===1) {
          possiblePos.push([prevPos[0]+2,prevPos[1]]) //double move
        }
        if (board[prevPos[0]+1][prevPos[1]-1][0]===0) { //capturing a piece to the left
          possiblePos.push([prevPos[0]+1,prevPos[1]-1])
        }
        if (board[prevPos[0]+1][prevPos[1]+1][0]===0) { //capturing a piece to the right
          possiblePos.push([prevPos[0]+1,prevPos[1]+1])
        }
      }
}
