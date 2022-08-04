const findSum = function(array) {
  // your code here - don't forget to return a number!
  let sum = 0;
  
  for(let i = 0; i < array.length; i++){
   sum += array[i]; 
  }
  return sum;
};

const findFrequency = function(array) {
  let frequency = {
    most: undefined,
    least: undefined
  }
  
  let counts = {}
  
  for(let i = 0; i < array.length; i++){
    //count each one and store to object
    let current = array[i];
      //if undefined create and add 1
    if(counts[current] === undefined){
     counts[current] = 1; 
    }else{
      //otherwise add 1
     counts[current]++; 
    }
  }
  
  let most = 0;
  let least = Infinity;
  
  //read counts object and determine most
  for(let key in counts){
    if(counts[key] > most){
      most = counts[key];
      frequency.most = key;
    }
  }
  
  //determine least
  for(let key in counts){
    if(counts[key] < least){
      least = counts[key];
      frequency.least = key;
    }
  }
  //return frequncy object;
  return frequency;
};

const isPalindrome = function(str) {
  // your code here - don't forget to return a boolean!
};

const largestPair = function(array) {
  // your code here - don't forget to return a number!
};

const removeParenth = function(str) {
  // your code here - don't forget to return a string!
};

const scoreScrabble = function(str) {
  // your code here - don't forget to return a number!
};
