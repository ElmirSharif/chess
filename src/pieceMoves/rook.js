
export default function rook(pieceColor, board, prevPos, possiblePos, goOutOfLoop) {
    goOutOfLoop = false
    let newPosR = prevPos
    
        for (let i = 1; i < 8; i++) {
          if (prevPos[0]===7) {
            goOutOfLoop = true
          }
          if (!goOutOfLoop) {
            let newPosR = [prevPos[0]+i,prevPos[1]]
            if (newPosR[0]===7) {
              goOutOfLoop=true
            }
            if (board[newPosR[0]][newPosR[1]][0]!==2) {
              goOutOfLoop = true
              if (board[newPosR[0]][newPosR[1]][0]!==pieceColor) {
                
                possiblePos.push(newPosR)
                
              }
            } else{
              possiblePos.push(newPosR)
              
            }
          }
          
        }
        
        goOutOfLoop = false
        
        for (let i = 1; i < 8; i++) {
          if (prevPos[0]===0) {
            goOutOfLoop = true
          }
          if (!goOutOfLoop) {
            console.info(prevPos)
            let newPosR = [prevPos[0]-i,prevPos[1]]
            if (newPosR[0]===0) {
              goOutOfLoop=true
            }
            if (board[newPosR[0]][newPosR[1]][0]!==2) {
              goOutOfLoop = true
              if (board[newPosR[0]][newPosR[1]][0]!==pieceColor) {
                possiblePos.push(newPosR)
                
              }
            } else{
              possiblePos.push(newPosR)
              
            }           
          }
                   
        }

        
        goOutOfLoop = false
        
        for (let i = 1; i < 8; i++) {
          if (prevPos[1]===7) {
            goOutOfLoop = true
          }
          if (!goOutOfLoop) {
            let newPosR = [prevPos[0],prevPos[1]+i]
            if (newPosR[1]===7) {
              goOutOfLoop=true
            }
            if (board[newPosR[0]][newPosR[1]][0]!==2) { 
              goOutOfLoop = true
              if (board[newPosR[0]][newPosR[1]][0]!==pieceColor) {
                possiblePos.push(newPosR)
                
              }
            } else{
              possiblePos.push(newPosR)
              
            }
          }
          
          
        }
        
          
        
        goOutOfLoop = false
        
        for (let i = 1; i < 8; i++) {
          if (prevPos[1]===0) {
          goOutOfLoop=true
          }
          if (!goOutOfLoop) {
            let newPosR = [prevPos[0],prevPos[1]-i]
            if (newPosR[1]===0) { //this changes
              goOutOfLoop = true
            }
            if (board[newPosR[0]][newPosR[1]][0]!==2) {///
              goOutOfLoop = true
              if (board[newPosR[0]][newPosR[1]][0]!==pieceColor) {
                possiblePos.push(newPosR)
                
              }
            } else{
              possiblePos.push(newPosR)
              
            }
          } 
          
        }
}