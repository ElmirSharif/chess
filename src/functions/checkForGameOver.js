import possibleMoves from './possibleMoves'
import isKingAttacked from './isKingAttacked';

export default function checkForGameOver(temp, moveHistory) {
    for (let attackedColor = 0; attackedColor < 2; attackedColor++) { //for both sides 0 and 1
        const kingIsAttacked = isKingAttacked(attackedColor, temp, moveHistory)
        let possibleMovesExist = false

          for (let i = 0; i < temp.length; i++) { //for each piece
            const col = temp[i];
            for (let j = 0; j < col.length; j++) {
              const row = col[j];

              if(row[0] === attackedColor) {
                const pos = [i, j]
                const type = row[1]
                const color = row[0]
                if(possibleMoves(pos, type, color, temp, moveHistory)[2]){ //if there are possible moves
                  possibleMovesExist = true //there are possible moves
                }    
            }
          }
        }

        const color = attackedColor ? "Black" : "White"
        if(kingIsAttacked && !possibleMovesExist){
          console.log(color + ' is in checkmate')
          return [1, color]
        } else if(!kingIsAttacked && !possibleMovesExist){
          console.log(color + ' is stalemated')
          return [2, color]
        }
      }
return [0]
}
