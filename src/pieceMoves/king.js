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
    
    let kingColor = ""
    let kingMoved = false
    let rook1Moved = false
    let rook2Moved = false
    pieceColor===0 ? kingColor = "w" : kingColor="b"
    for (let movesK = 0; movesK < moveHistory.length; movesK++) {
        const element = moveHistory[movesK];
        if (element[0][0]===("k")&element[0][1]===kingColor){
            kingMoved = true
        }
    }
    
    for (let movesR1 = 0; movesR1 < moveHistory.length; movesR1++) {
        const element = moveHistory[movesR1];
        if (element[0][0]===("r")&element[0][1]===kingColor) {
            if (element[0][2]===1) {
                rook1Moved = true
                
            }else{
                rook2Moved = true
            }
        }
    }
    if (kingMoved===false) {
        if (rook1Moved===false) {
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
        if (rook2Moved===false) {
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
    }
    return possiblePos
}



