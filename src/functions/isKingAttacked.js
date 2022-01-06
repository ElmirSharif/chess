import createAttackedBoard from "./createAttackedBoard";

export default function isKingAttacked(kingColor, board, moveHistory) {
    const opponentColor = kingColor===1 ? 0 : 1
    const kingCode = kingColor === 1 ? "kb1" : "kw1" //1 = king black
    let kingPos = [0,0]
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            if(board[i][j][3] === kingCode){
                kingPos = [i,j]
            }
            
        }
    }
    const attackedPlaces = createAttackedBoard(board, opponentColor, moveHistory)
    if(attackedPlaces[kingPos[0]][kingPos[1]] === 1) {
        return true
    } else {
        return false
    }
}