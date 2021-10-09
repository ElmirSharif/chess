export default function bishop(pieceColor, board, prevPos, possiblePos, goOutOfLoop, pos) {
            //2 oclock
        
            while (!(prevPos[0] === 0 || prevPos[1] === 7)&!goOutOfLoop) {
                let newPos = [prevPos[0] - 1 , prevPos[1] + 1]
                if (board[newPos[0]][newPos[1]][0]!==2) {
                  if (board[newPos[0]][newPos[1]][0]===pieceColor) {
                    goOutOfLoop = true
                  }else{
                    possiblePos.push(newPos)
                    prevPos = newPos
                    goOutOfLoop = true
                  }
                }else{
                  possiblePos.push(newPos)
                  prevPos = newPos
                }//test com
            }
            
                        //8 oclock
            goOutOfLoop = false
            prevPos = pos
            while (!(prevPos[0] === 7 || prevPos[1] === 0)&!goOutOfLoop) {
               let newPos = [prevPos[0] + 1 , prevPos[1] - 1]
               if (board[newPos[0]][newPos[1]][0]!==2) {
                 if (board[newPos[0]][newPos[1]][0]===pieceColor) {
                   goOutOfLoop = true
                 }else{
                   possiblePos.push(newPos)
                   prevPos = newPos
                   goOutOfLoop = true
                 }
               }else{
                possiblePos.push(newPos)
                prevPos = newPos
               }
          }
                           //10 oclock
            prevPos = pos
            goOutOfLoop = false
            
            while (!(prevPos[0] === 0 || prevPos[1] === 0)&!goOutOfLoop) {
              let newPos = [prevPos[0] - 1 , prevPos[1] - 1]
              if (board[newPos[0]][newPos[1]][0]!==2) {
                if (board[newPos[0]][newPos[1]][0]===pieceColor) {
                  goOutOfLoop = true
                 }else{
                   possiblePos.push(newPos)
                   prevPos = newPos
                   goOutOfLoop = true
                 }
               }else{
                 possiblePos.push(newPos)
                 prevPos = newPos
               }
          }
                             //4 oclock
            goOutOfLoop = false
            prevPos = pos
            
              while (!(prevPos[0] === 7 || prevPos[1] === 7)&!goOutOfLoop) {
                let newPos = [prevPos[0] + 1 , prevPos[1] + 1]
                if (board[newPos[0]][newPos[1]][0]!==2) {
                  if (board[newPos[0]][newPos[1]][0]===pieceColor) {
                    goOutOfLoop = true
                  }else{
                    possiblePos.push(newPos)
                    prevPos = newPos
                    goOutOfLoop = true
                  }
                }else{
                  possiblePos.push(newPos)
                  prevPos = newPos
                }
          }
}
