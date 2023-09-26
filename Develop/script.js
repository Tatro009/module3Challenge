var generateBtn = document.querySelector("#generate");

function getPasswordCriteria() {
  var length = parseInt(prompt("Please choose a password (between 8 and 128 characters):"));

  while (isNaN(length) || length < 8 || length >128) {
    length = parseInt(prompt("OPE! I insist you enter a password legnth between 8 and 128 characters!"));
  }

    var includeLowercase = confirm("Include lower case characters?");
    var includeUppercase = confirm("Include upper case characters?");
    var includeNumeric = confirm("Include numeric characters?");
    var includeSpecial = confirm("Include Special characters?");

  while (!includeLowercase || includeUppercase || includeNumeric || includeSpecial){
  alert("Please select at least one type of character.");
  includeLowercase = confirm("Include lower case characters?");
  includeUppercase = confirm("Include upper case characters?");
  includeNumeric = confirm("Include numeric characters?");
  includeSpecial = confirm("Include Special characters?");
}

  return{
  length: length,
  includeLowercase: includeLowercase,
  includeNumeric: includeNumeric,
  includeSpecial: includeSpecial,
  includeUppercase: includeUppercase,
};
}

function generatePassword(){
  var criteria = getPasswordCriteria();
  var characters = "";

  if(criteria.includeLowercase){
    characters += "abcdefghijklmnopqrstuvwxyz";
  }

  if (criteria.includeUppercase){
    characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  }

  if (criteria.includeNumeric){
    characters += "0123456789";
  }

  if (criteria.includeSpecial){
    characters += "!@#$%^&*()_+[]{}|;:,.<>?";
  }

  var password = "";
  for (var i = 0; i < criteria.length, i++;){
    var rndmIndex = Math.floor(math.random() * characters.length);
    password += characters.charAt(rndmIndex);
  }

  return password;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  alert("Your password is: \n" + password);
}

generateBtn.addEventListener("click", writePassword);
