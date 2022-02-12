// CASTLING CURRENTLY NOT SUPPORTED
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
    let kingMoved = false
    let rook1MovedorDead = false
    let rook2MovedorDead = false
    
    for (let movesK = 0; movesK < moveHistory.length; movesK++) { // check if king has moved
        const element = moveHistory[movesK];
        
        const elementIsWhite = element[0][1]===0
        if (element[0][0]===("k")&&elementIsWhite===kingIsWhite){
            kingMoved = true
        }
    }
    for (let movesR1 = 0; movesR1 < moveHistory.length; movesR1++) {
        const element = moveHistory[movesR1];
        
        if (element[0]===("rw1")){
            rook1MovedorDead = true
        }
    }
    for (let movesR1 = 0; movesR1 < moveHistory.length; movesR1++) {
        const element = moveHistory[movesR1];
        
        if (element[0]===("r"+kingIsWhite ? "w" : "b"+"2")){
            rook2MovedorDead = true
        }
    }
    
    
    
    
    //Good Luck Soldier, Hope you make it out alive
    //check if rook is alive
/*
    
    
    for (let movesR1 = 0; movesR1 < moveHistory.length; movesR1++) { //check if rook has moved
        const element = moveHistory[movesR1];
        if (element[0][0]===("r")&&element[0][1]===kingColor) { //go through move history and look for king and rook
            if ((element[0][2]===1)||(!board[kingColor==="b" ? 0 : 7][0][1]===4)) {
                rook1MovedorDead = true
                
            }else{
                rook2MovedorDead = true
                if (!board[kingColor==="b" ? 0 : 7][7][1]===4) {
                    rook2MovedorDead = true
                }
                
            }
        }
    }
    console.log(board[kingColor==="b" ? 0 : 7])
    if(!board[kingColor==="b" ? 0 : 7][0][1]===4){ //check if left rooks exist
        rook1MovedorDead = true
    }



    if (kingMoved===false) {
        if (rook1MovedorDead===false) {
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
        if (rook2MovedorDead===false) {
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
    }*/
    return possiblePos
}



