    //function that compares two values
    //if value is array, for each element, run fucntion that compares two values
  
export default function compareArray(array1, array2) {
    if(array1.length != array2.length) {
      return false
  }
  if(array1 instanceof Array && array2 instanceof Array) {
    let x = 0
    for(let i = 0; i < array1.length; i++) {
      if(!(compareArray(array1[i], array2[i]))){  //recursive function
        return false
      }
    }
    return true
  } else {
    return array1 === array2
  }
}