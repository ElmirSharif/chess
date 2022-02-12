import possiblePieceMoves from "./possiblePieceMoves"
import clearPossible from "./clearPossible"
import tempMove from "./tempMove"
import isKingAttacked from "./isKingAttacked"

export default function possibleMoves(pos, piece, color, board, moveHistory) {
  let noOfPossible = 0
    //color is 0 when white and 1 when black
    //piece is a number
    const isBlack = !!color
    const isWhite = !isBlack
    

    let possiblePos = possiblePieceMoves(pos, piece, color, board, moveHistory)

    const xpos = pos[0]
    const ypos = pos[1]
    let tempBoard = clearPossible(board)
    

    for (let i = 0; i < possiblePos.length; i++) {
      //if king, and king is in his orignal place, and king can castle and positions between king and rook are not attacked
      const piecePossibleCoordinates = possiblePos[i];
       
      const futureBoard = tempMove(xpos, ypos, piecePossibleCoordinates[0], piecePossibleCoordinates[1], tempBoard)
      const isWhitePotentiallyAttacked = isKingAttacked(0, futureBoard, moveHistory)
      const isBlackPotentiallyAttacked = isKingAttacked(1, futureBoard, moveHistory)
      const positionIsAttacked = (isWhitePotentiallyAttacked && isWhite) || (isBlackPotentiallyAttacked && isBlack)

      if(!positionIsAttacked) {
        tempBoard[piecePossibleCoordinates[0]][piecePossibleCoordinates[1]][2] = true  //sets the places that have red circles
        noOfPossible++
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

    return [[...tempBoard], [xpos, ypos], noOfPossible] //setBoard([...tempBoard]), setSelected([xpos, ypos])
  }