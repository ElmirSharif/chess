import possiblePieceMoves from "./possiblePieceMoves"
//creates a board of 1 and 0, where 1 is if a place is attacked and 0 if a place is not attacked, used to see if king is in check
export default function createAttackedBoard(board, pieceColor, moveHistory){
    let attackedBoard = new Array(8)
    for (let i = 0; i < 8; i++) {
      attackedBoard[i] = new Array(8)
      for (let j = 0; j < 8; j++) {
        attackedBoard[i][j] = 0
        
      }
    }
  
    for (let i = 0; i < board.length; i++) {
      const row = board[i];
      for (let j = 0; j < row.length; j++) {
        const col = row[j];
  
              /*
              1: pawn
              2: knight
              3: bishop
              4: rook
              5: queen
              6: king
              */
              const color = col[0]
              const piece = col[1]
              if(color === pieceColor){
                possiblePieceMoves([i,j], piece, color, board, moveHistory).forEach(move => {
                    attackedBoard[move[0]][move[1]] = 1
                })
              }
  
      }
      
    }
    return attackedBoard
  }