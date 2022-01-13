//the shift + 4 method

function cipher(str) {
  let result = '';
  let arr = str.split('');
  //console.log(arr);

  for (let i = 0; i < arr.length; i++) {

    result += String.fromCharCode(arr[i].charCodeAt(0) + 4);
    //console.log(result);
  }
  return result;
}



function decipher(str) {
  let result = '';
  let arr = str.split('');

  for (let i = 0; i < arr.length; i++) {

    result += String.fromCharCode(arr[i].charCodeAt(0) - 4);
  }
  return result;
}


console.log(cipher("I love cryptography!"));
//M$pszi$gv}txskvetl}%
console.log(decipher(cipher("I love cryptography!")));
//"I love cryptography!"




//console.log('a'.charCodeAt(0)); //97

//console.log(String.fromCharCode('a'.charCodeAt(0))); //a