const urlEncode = function(text) {
    let encodedText = '';
    text=text.trim();
    for(let char of text){
        if(char === ' '){
            char ="%20";
            encodedText +=char;
        }else{
            encodedText +=char;
        }
    }
    return encodedText;
};
  console.log(urlEncode("Lighthouse Labs"));
  console.log(urlEncode(" Lighthouse Labs "));
  console.log(urlEncode("blue is greener than purple for sure"));