import knight from '../pieceMoves/knight'
import pawn from '../pieceMoves/pawn'
import bishop from '../pieceMoves/bishop'
import rook from '../pieceMoves/rook'
import queen from '../pieceMoves/queen'
import king from '../pieceMoves/king'

export default function possiblePieceMoves(pos, piece, color, board, moveHistory) {
    let pieceColor = color
    let possiblePos = []
    let prevPos = pos
    let goOutOfLoop = false
  
    /*
    0=whte
    1=black
  
    1: pawn      DONE
    2: knight    DONE
    3: bishop    DONE
    4: rook      DONE
    5: queen     
    6: king      DONE
  
  */
  
  switch (piece) {
    //prevPos = prev position of piece [xpos, ypos]
    case 1:
      possiblePos = pawn(pieceColor, board, prevPos, moveHistory)
      break;
    case 2:
      
      possiblePos = knight(pieceColor, board, prevPos)
      
      break;
    case 3:
      possiblePos = bishop(pieceColor, board, prevPos, goOutOfLoop, pos)
      break;
    case 4:
      possiblePos = rook(pieceColor, board, prevPos, goOutOfLoop)
      
    
      break;
    case 5:
      possiblePos = queen(pieceColor, board, prevPos, goOutOfLoop, pos)
      break;
    case 6:
      possiblePos = king(pieceColor, board, prevPos, moveHistory)
      break;
    default:
      break;
  }
  
    return possiblePos
  
  }