import rook from "./rook"
import bishop from "./bishop"
export default function queen(pieceColor, board, prevPos, possiblePos, goOutOfLoop, pos) {
    rook(pieceColor, board, prevPos, possiblePos, goOutOfLoop)
    bishop(pieceColor, board, prevPos, possiblePos, goOutOfLoop, pos)
}