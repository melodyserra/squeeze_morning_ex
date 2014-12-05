var squeeze = function(str){
  var arr = str.split("");
  for ( var i = 1; i < arr.length; i++){
    if  (arr[i] === arr[i-1]){
      arr.splice(i,1);
    }
  }
  return arr.join("");
};

// function squeeze(str){
//   var word = str.split("");
//   var deleted;
//   do {
//     deleted = false;
//     for (var i=0; i<word.length; i++){
//       if (word[i] === word[i+1]){
//         word.splice(i,1);
//         deleted = true;
//       }
//     }
//   } while (deleted);
//   return(word.join(""));
// }

