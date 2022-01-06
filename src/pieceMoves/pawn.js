export default function pawn(pieceColor, board, prevPos, moveHistory) {
  let possiblePos = []
    if (pieceColor===0) {                       //white
        if (board[prevPos[0]-1][prevPos[1]][1]===0) { 
          possiblePos.push([prevPos[0]-1,prevPos[1]])  //moving forward
        }
        if (prevPos[0]===6&board[prevPos[0]-1][prevPos[1]][0]===2) {
          possiblePos.push([prevPos[0]-2,prevPos[1]])  //double move
        }
        if (prevPos[1]!==0) {
          if (board[prevPos[0]-1][prevPos[1]-1][0]===1) { //capturing a piece to the left
          possiblePos.push([prevPos[0]-1,prevPos[1]-1])
        }}
        if (prevPos[1]!==7) {
          if (board[prevPos[0]-1][prevPos[1]+1][0]===1) { //capturing a piece to the right
          possiblePos.push([prevPos[0]-1,prevPos[1]+1])
        }}

        //['pw5', 4, 4]
        if (prevPos[0]===3) {
          if (moveHistory.length!==0) {  //if not 1st move
          if (moveHistory[moveHistory.length-1][0][0]===("p")) { //if last move was pawn
            if (moveHistory[moveHistory.length-1][1]===3&Math.abs(prevPos[1]-moveHistory[moveHistory.length-1][2])===1) {// if pawn goes to line 5 and near white pawn
              let pawnMoved = false
              for (let i = 0; i < moveHistory.length-1; i++) {
                const element = moveHistory[i]; 
                if (element[0]===moveHistory[moveHistory.length-1][0]) {//checking for en passant
                  pawnMoved = true
                }
              }
              if (!pawnMoved) {
                possiblePos.push([moveHistory[moveHistory.length-1][1]-1,moveHistory[moveHistory.length-1][2]]) 
              }
            }
          }
        }
        }
        
        
      } else {                                    //black
        if (board[prevPos[0]+1][prevPos[1]][1]===0) { 
          possiblePos.push([prevPos[0]+1,prevPos[1]])  //moving forward
        }
        if (prevPos[0]===1&board[prevPos[0]+1][prevPos[1]][0]===2) {
          possiblePos.push([prevPos[0]+2,prevPos[1]]) //double move
        }
        if (prevPos[1]!==0) {
          if (board[prevPos[0]+1][prevPos[1]-1][0]===0) { //capturing a piece to the left
          possiblePos.push([prevPos[0]+1,prevPos[1]-1])
        }}
        if (prevPos[1]!==7) {
          if (board[prevPos[0]+1][prevPos[1]+1][0]===0) { //capturing a piece to the right
          possiblePos.push([prevPos[0]+1,prevPos[1]+1])
        }
        }
        if (prevPos[0]===4) {
          if (moveHistory.length!==0) {  //if not 1st move
          if (moveHistory[moveHistory.length-1][0][0]===("p")) { //if last move was pawn
            if (moveHistory[moveHistory.length-1][1]===4&Math.abs(prevPos[1]-moveHistory[moveHistory.length-1][2])===1) {// if pawn goes to line 5 and near white pawn
              let pawnMoved = false
              for (let i = 0; i < moveHistory.length-1; i++) {
                const element = moveHistory[i]; 
                if (element[0]===moveHistory[moveHistory.length-1][0]) {//checking for en passant
                  pawnMoved = true
                }
              }
              if (!pawnMoved) {
                possiblePos.push([moveHistory[moveHistory.length-1][1]+1,moveHistory[moveHistory.length-1][2]]) 
              }
            }
          }
        }
        }
        
      }
      return possiblePos
}