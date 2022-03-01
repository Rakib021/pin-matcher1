function getPin(){
    const pin = Math.round(Math.random()*10000);
    const pinString = pin + '';
    if(pinString.length == 4){
        return pin;
    }
    else{
        // console.log('get 3 digit pin',pin);
        return getPin();
    }
}


function generatePin(){
    const pin = getPin();
    document.getElementById("display-pin").value = pin;
}
document.getElementById("key-pad").addEventListener('click',function(event){
    const number=event.target.innerText;
    const calcInput = document.getElementById("typed-number");
    // console.log(calcInput);
    if(isNaN(number)){
        //  console.log(number);
        if(number){
            calcInput.value =' ';
        }
        
        
    }
    else{
    const previousCalc = calcInput.value;
    const newCalc = previousCalc + number
    calcInput.value = newCalc;

    }
});

function verifyPin(){
 const pin = document.getElementById("display-pin").value;
 const typedNumber = document.getElementById("typed-number").value;
 const notifySuccess = document.getElementById("notify-success");
 const failError = document.getElementById("notify-fail");
 if(pin == typedNumber){
    //  console.log("Yay...succesfully pin generate");
notifySuccess.style.display = 'block';
failError.style.display ="none";

 }
 else{
   
   failError.style.display ="block";
   notifySuccess.style.display = 'none';
 }
}