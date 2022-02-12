import possibleMoves from "./possibleMoves";
export default function checkForStalemate(temp, moveHistory) {
    for (let checkedSide = 0; checkedSide < 2; checkedSide++) { // for both sides
        let stalemate = true
          for (let i = 0; i < temp.length; i++) { //for each row and col
            const col = temp[i];
            for (let j = 0; j < col.length; j++) {
              const row = col[j];
              
              if(row[0] === checkedSide) { //check only one side
                const pos = [i, j]
                const type = row[1]
                const color = row[0]
                if(possibleMoves(pos, type, color, temp, moveHistory)[2]){ //if it has no moves it is in stalemate
                    stalemate = false
                }    
            }
          }
        }
        if(stalemate){
            return checkedSide
        }
      }
      return false
}