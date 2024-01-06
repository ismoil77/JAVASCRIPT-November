//task1

// function countOccurrences(a) {
//     let obj = {}
//   let cnt = 0
//   let rt = []
//   for (var i = 0; i < a.length; i++){
//      cnt = 0
   
//     for (let j = a.length-1; j >=0; j--){
//       if (a[j]==a[i]) {
//          cnt++
//       }
      
//     }
//     if (cnt == 1) {
//         obj[a[i]] = a[i]
//       }
//       obj[a[i]] = cnt
//     }
       
//     return obj

// }
// console.log(countOccurrences([2, "hello", 2,2, 3, 3, 3]));




//task2

function findUniqueElements(array) {
  const uniqueMap = {};

  return array.filter(obj => {
    // If the 'id' value is not in the uniqueMap, add it and return true
    if (uniqueMap[obj.id]==null) {
      uniqueMap[obj.id] = true;
      return true;
    }
    // If the 'id' value is already in the uniqueMap, return false
    return false;
  });
}



console.log(findUniqueElements([
  { id: 1, name: 'John' },
  { id: 2, name: 'Jane' },
  { id: 1, name: 'Jim' },
  { id: 3, name: 'Jim' },
]));

