//datset
const upperset = "ABCDEFGHJKLMNOPQRSTUVWXYZ"
const lowerset = "abcdefghijklmnopqrstuvwxyz"
const numberset = "1234567890"
const symbolset = "!@#$%^&*()-+~/"

//selectors
const passbox = document.getElementById("pass-box")
const totalchar = document.getElementById("total-char")
const upperinput = document.getElementById("upper-case")
const lowerinput = document.getElementById("lower-case")
const numberinput = document.getElementById("numbers")
const symbolinput = document.getElementById("symbols")

const randomData = (dataset) => {
  return dataset[Math.floor(Math.random()*dataset.length)]
}
const generatePassword = (password = "") =>{
  if(upperinput.checked){
    password += randomData(upperset)
  }
  if(lowerinput.checked){
    password += randomData(lowerset)
  }
  if(numberinput.checked){
    password += randomData(numberset)
  }
  if(symbolinput.checked){
    password += randomData(symbolset)
  }
  if(password.length < totalchar.value){
    return generatePassword(password);
  }

  passbox.innerText =  truncateString(password,totalchar.value);
}
//init call
  generatePassword();




document.getElementById("btn").addEventListener(
  "click",
  function(){
    generatePassword();
  }
)
//trim extra password
function truncateString(str, num) {
    if (str.length > num) {
        let subStr = str.substring(0, num);
        return subStr;
    } else {
        return str;
    }
}

























