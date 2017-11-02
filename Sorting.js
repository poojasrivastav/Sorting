function bubbleSort(arr){
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

var med = Math.floor(arr.length/2);

var arr1 = arr.slice(0,med);
var arr2 = arr.slice(med);



return merge(mergeSort(arr1), mergeSort(arr2));
}

function merge(left, right) {
  var merged = [],//setup empty storage for our merging
  leftIndex = 0,  //initialize vars to help point to current index in left && right subarrays
  rightIndex = 0;


  while(leftIndex < left.length && rightIndex < right.length) { //iterate through both subarrays
    if(left[leftIndex] < right[rightIndex]) { //if left element > than right at sameIndex
      merged.push(left[leftIndex]); //push the lesser of the two into our merge storage
      leftIndex++; //move left index pointer over one (keeps things linear)
    } else { //otherwise
      merged.push(right[rightIndex]); //if right element >, push that one to merge storage
      rightIndex++;  //move right index pointer over one
    }
  }

//in the case of inbalanced subarrays, one of these for loops will be triggered
//pushes all of the remaining values of the longer array into merge storage
//if our split function works well, we'd only be passing over a couple (if not only one) element
  for(; leftIndex < left.length; leftIndex++) merged.push(left[leftIndex]);
  for(; rightIndex < right.length; rightIndex++) merged.push(right[rightIndex]);

  return merged; //return subarrays merged

}


