function sort (arr){
  sorted = false;
  while (!sorted){
    var count = 0
    for (var i = 0; i < arr.length; i++){
      if(arr[i] > arr[i+ 1]){
        count++;
        var toMove = arr[i];
        arr[i] = arr[i + 1];
        arr[i +1] = toMove;
      }
    }
    if(count === 0){
    sorted = true;
    }
  }
  return arr;
}


function mergeSort(arr){

if(arr.length < 2){
  return arr;
}
// //console.log(mergeSort(arr1) + mergeSort(arr2))
// if(arr.length === 2){
//   if(arr[0] > arr[1]){
//     var toMove = arr[0];
//     arr[0] = arr[1];
//     arr[1] = toMove;
//   }
// }
var med = Math.floor(arr.length/2);

var arr1 = arr.slice(0,med);
var arr2 = arr.slice(med);



return mergeSort(arr1).concat(mergeSort(arr2));




}


