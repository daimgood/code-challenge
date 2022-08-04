const findSum = function(array) {

  //create sum variable
  let sum = 0;
  
  //iterate over inout array
  for(let i = 0; i < array.length; i++){
   //add each value of array to sum
    sum += array[i]; 
  }
  
  //return sum
  return sum;
};

const findFrequency = function(array) {
 
  //create return object
  let frequency = {
    most: undefined,
    least: undefined
  }
  
  //create object to count elements in array
  let counts = {}
  
  //iterate over array
  for(let i = 0; i < array.length; i++){
    //count each one and store to object
    let current = array[i];
      //if undefined create and add 1
    if(counts[current] === undefined){
     counts[current] = 1; 
    //otherwise add 1
    }else{
     counts[current]++; 
    }
  }
  
  //create most and least variables
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
  //what is palindrom?
    //front to back = back to front
  
  //create new string that is input read backwards
  let backwards = '';
  
  for(let i = str.length - 1; i > -1; i--){
   backwards += str[i]; 
  }
  //is new string same as input string?
    //return true or false
  return str === backwards;
};

const largestPair = function(array) {
  //create return variable
  let pairProduct = 0;
  
  //iterate over array and check if pair is bigger than previous bigger pair
  for(let i = 0; i < array.length; i++){
    let num1 = array[i];
    let num2 = array[i+1];
    if((num1 * num2) > pairProduct) pairProduct = num1 * num2;
  }
  return pairProduct;
};

const removeParenth = function(str) {
  //find index of ( and )
  let openIndex = str.indexOf('(')
  let closeIndex = str.indexOf(')')
  
  //slice string from beginning to before (
  let newStr = str.slice(0, openIndex);
  
  //slice string after ) to end
  newStr += str.slice(closeIndex + 1, str.length)
  
  //return new string
  return newStr;
};

const scoreScrabble = function(str) {
  /*
  1 - a, e, i, o, u, l, n, r, s, t
2 - d, g
3 - b, c, m, p
4 - f, h, v, w, y
5 - k
8 - j, x
10 - q, z
  */
  
  //create points object
  let points = {
    a: 1,
    b: 3,
    c: 3,
    d: 2,
    e: 1,
    f: 4,
    g:  2,
    h:  4,
    i:  1,
    j:  8,
    k:  5,
    l:  1,
    m:  3,
    n:  1,
    o:  1,
    p:  3,
    q:  10,
    r:  1,
    s:  1,
    t:  1,
    u:  1,
    v:  4,
    w:  4,
    x:  8,
    y:  4,
    z:  10
  }
  //create score variable
  let score = 0;
  
  //add points of each char to 'score'
  for(let i = 0; i < str.length; i++){
    score += points[str[i]];
  }
  //return score
  return score;
};
