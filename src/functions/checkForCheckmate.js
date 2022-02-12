import possibleMoves from './possibleMoves'
import isKingAttacked from './isKingAttacked';

export default function checkForCheckmate(temp, moveHistory) {
    for (let attackedKing = 0; attackedKing < 2; attackedKing++) {
        if(isKingAttacked(attackedKing, temp, moveHistory)) {
          let checkmate = true
          for (let i = 0; i < temp.length; i++) {
            const col = temp[i];
            for (let j = 0; j < col.length; j++) {
              const row = col[j];
              
              if(row[0] === attackedKing) {
                const pos = [i, j]
                const type = row[1]
                const color = row[0]
                if(possibleMoves(pos, type, color, temp, moveHistory)[2]){
                  checkmate = false
                }    
            }
          }
        }
        console.log(checkmate && "Checkmate " + (attackedKing ? "Black " : "White ") + "loses")
        return attackedKing //returns color of king that is attacked
      }
      }
return false
}