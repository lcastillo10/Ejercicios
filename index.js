/* EJERCICIO 1: TWO SUM */
var twoSum = function (nums, target) {
  let positionResult = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        positionResult = [i, j];
      }
    }
  }
  console.log(positionResult);
};

twoSum([2,11,7,15], 9);


/* EJERCICIO 2: PALINDROMO */ 
 var isPalindrome = function(x) {
    return palindrome(x.toString());
  };
  
  function palindrome(str) {
      var lowRegStr = str.toLowerCase();
      var reverseStr = lowRegStr.split('').reverse().join(''); 
      return reverseStr === lowRegStr;
  }
  
  console.log(isPalindrome(121))

  /* EJERCICIO 3: ROMANOS A ENTEROS */
  var romanToInt = function(s) {
 
    const sym = { 
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }

    let result = 0;

    for (i=0; i < s.length; i++){
        const cur = sym[s[i]];
        const next = sym[s[i+1]];

        if (cur < next){
            result += next - cur
            i++
        } else {
            result += cur
        }
    }

    return result; 
};

console.log(romanToInt("MCMXCIV"));

 /* EJERCICIO 4: LONGITUD DE LA ULTIMA PALABRA */
 var lengthOfLastWord = function(s) {
    var arrayPalabra = s.split(" ");
    var ultimaPalabra = arrayPalabra[arrayPalabra.length - 1];
    return ultimaPalabra.length
};

console.log(lengthOfLastWord("Hello world"))


 /* EJERCICIO 5: PLUS ONE */
var plusOne = function(digits) {
   var arrayRespuesta = [];
   var numeroEnString = "";
   for (let i = 0; i < digits.length; i++) {
    numeroEnString = numeroEnString.concat(digits[i].toString());
   }
   var numeroEnEntero = parseInt(numeroEnString) + 1;
   numeroEnString = numeroEnEntero.toString();

   for (let j = 0; j < numeroEnString.length; j++) {
    arrayRespuesta.push(parseInt(numeroEnString[j]));
   }
   return arrayRespuesta;
};

console.log(plusOne([1,2,3]));

 /* EJERCICIO 6: SINGLE NUM*/ 
var singleNum = function (nums) {
 if(nums.length === 1)
 {
    return nums[0]
 }
 let result = 0;

nums.forEach(element => {
   result = result ^ element
});

return result;
};

console.log(singleNum([4,1,2,1,2]));