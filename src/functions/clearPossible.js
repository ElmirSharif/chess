export default function clearPossible(inputBoard) {
    let tempBoard = inputBoard
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        tempBoard[i][j][2] = false
      }
      
    }
    return tempBoard
    
  }