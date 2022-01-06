export default function tempMove(fromA, fromB, toA, toB, inputBoard) {//making a move inside temp board before actually moving
  let temp = JSON.parse(JSON.stringify(inputBoard));

  if (temp[fromA][fromB][1]===1&&(Math.abs(fromB-toB)===1&temp[toA][toB][1]===0)){
    temp[toA+(fromA-toA)][toB] = [2,0, false] //setting the captured pawn as empty
  }

  if (temp[fromA][fromB][1]===6) { //if king move
    if (Math.abs(toB-fromB)===2) { //if the king can move 2 places (only happens when castling)
        if (toB===2) {
          temp = tempMove(fromA, 0, toA, 3, temp) //moves rook to the left
        }else{
          temp = tempMove(fromA, 7, toA, 5, temp)//moves rook to the right
        }
        
    }
}



  temp[toA][toB] = temp[fromA][fromB] //moving piece to new place
  temp[fromA][fromB] = [2,0, false] ///setting the old place as empty

  return temp
}