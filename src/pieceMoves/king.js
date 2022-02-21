function hasPieceMoved(moveHistory, pieceCode) {
    for (let moves = 0; moves < moveHistory.length; moves++) { // check if king has moved
        const element = moveHistory[moves]
        if (pieceCode===element[0]) {
            return true
        }
    }
    return false
}

export default function king(pieceColor, board, prevPos, moveHistory) {
    let possiblePos = []
    let newPosK = []
    newPosK.push([prevPos[0]+1,prevPos[1]])
    newPosK.push([prevPos[0]-1,prevPos[1]])
    newPosK.push([prevPos[0],prevPos[1]+1])
    newPosK.push([prevPos[0],prevPos[1]-1])
    newPosK.push([prevPos[0]+1,prevPos[1]+1])
    newPosK.push([prevPos[0]+1,prevPos[1]-1])
    newPosK.push([prevPos[0]-1,prevPos[1]+1])
    newPosK.push([prevPos[0]-1,prevPos[1]-1])
    for (let i = 0; i < newPosK.length; i++) {
        const element = newPosK[i]
        if (element[0]<8&element[0]>-1&element[1]<8&element[1]>-1) {
            if (pieceColor!==board[element[0]][element[1]][0]) {
                possiblePos.push(element)
              }
        }
    }
    const kingIsWhite = pieceColor===0

    const pieceLetter = kingIsWhite ? "w" : "b"
    const kingMoved = hasPieceMoved(moveHistory, "k" + pieceLetter + "1")

    const rook1Exists = board[kingIsWhite ? 7 : 0][0][3]==="r"+pieceLetter+"1" 
    const rook2Exists = board[kingIsWhite ? 7 : 0][7][3]==="r"+pieceLetter+"2" 

    const rook1Moved = hasPieceMoved(moveHistory, "r" + pieceLetter + "1")
    const rook2Moved = hasPieceMoved(moveHistory, "r" + pieceLetter + "2")

    const rook1MovedorDead = !rook1Exists || rook1Moved
    const rook2MovedorDead = !rook2Exists || rook2Moved

    
    const leftCastlingIsPossible = !kingMoved&&!rook1MovedorDead
    const rightCastlingIsPossible = !kingMoved&&!rook2MovedorDead

        if (leftCastlingIsPossible) {
            if (pieceColor===0) {
                if (board[7][1][0]===2&board[7][2][0]===2&board[7][3][0]===2) {
                    possiblePos.push([7,2])
                }
                
            }else{
                if (board[0][1][0]===2&board[0][2][0]===2&board[0][3][0]===2) {
                    possiblePos.push([0,2])
                }
            }
        }


        if (rightCastlingIsPossible) {
            if (pieceColor===0) {
                if (board[7][5][0]===2&board[7][6][0]===2) {
                     possiblePos.push([7,6])
                }
            }else{
                if (board[0][5][0]===2&board[0][6][0]===2) {
                    possiblePos.push([0,6])
               }
            }
        }
    
    return possiblePos
}



