import rook from "./rook"
import bishop from "./bishop"
export default function queen(pieceColor, board, prevPos, goOutOfLoop, pos) {
    let possiblePos = []
    possiblePos = possiblePos.concat(rook(pieceColor, board, prevPos, goOutOfLoop))
    possiblePos = possiblePos.concat(bishop(pieceColor, board, prevPos,  goOutOfLoop, pos))
    return possiblePos

    
}