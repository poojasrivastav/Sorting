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
    console.log('count', count);
    if(count === 0){
    sorted = true;
    }
  }
  return arr;
}
