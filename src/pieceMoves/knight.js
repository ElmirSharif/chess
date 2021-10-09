export default function knight(pieceColor, board, prevPos, possiblePos) {
    let newPosN = []
        newPosN.push([prevPos[0]-1,prevPos[1]-2])
        newPosN.push([prevPos[0]-2,prevPos[1]-1])
        newPosN.push([prevPos[0]-1,prevPos[1]+2])
        newPosN.push([prevPos[0]-2,prevPos[1]+1])
        newPosN.push([prevPos[0]+1,prevPos[1]-2])
        newPosN.push([prevPos[0]+2,prevPos[1]-1])
        newPosN.push([prevPos[0]+1,prevPos[1]+2])
        newPosN.push([prevPos[0]+2,prevPos[1]+1])
        for (let i = 0; i < newPosN.length; i++) {
          const element = newPosN[i];
          if (element[0]<8&element[0]>-1&element[1]<8&element[1]>-1) {
            if (pieceColor!==board[element[0]][element[1]][0]) {
              possiblePos.push(element)
            }
            
          }
          
        }
}
