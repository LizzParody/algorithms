//To get the highest number in an array
var myArray = [3, 5, 9, 2];

function getHighestNum(arr){
	var maxNum = 0;
  	for(var i = 0; i < arr.length; i++){
	  	if(arr[i] > maxNum){
	  	maxNum = arr[i];
  	}
  }
	return maxNum;
}

var maxNum = getHighestNum(myArray);
console.log(maxNum);

//To get the highest number in an array inside an array

var myArray2 = [[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]];

function largestOfFour(arr){
	var results = [];
  var maxNum = 0;
   	for(var i = 0; i < arr.length; i++){
      for(var n = 0; n < arr[i].length; n++){
      	 	if(arr[i][n] > maxNum){
	       	maxNum = arr[i][n];
    	}
    }
    results[i] = maxNum;
  }
	return results;
}

var largestOfFour = largestOfFour(myArray2);
console.log(largestOfFour);
