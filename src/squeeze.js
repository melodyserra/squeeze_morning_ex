var squeeze = function(str){
  var arr = str.split("");
  for ( var i = 1; i < arr.length; i++){
    if  (arr[i] === arr[i-1]){
      arr.splice(i,1);
    }
  }
  return arr.join("");
};

//Ryan's sol
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


//Emmy's sol
// function squeeze(str) {
//   var newstr = str[0] || "";
//   for (var i=1; i<str.length; i++) {
//     if (str[i] != str[i-1]) {
//     newstr += str[i];
//     }
//   }
//   return newstr;
// }

