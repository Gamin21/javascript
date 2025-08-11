

const textbox = document.getElementById("textbox")
const Tofarenheit = document.getElementById("Tofarenheit")
const Tocelsius = document.getElementById("Tocelsius")
const result = document.getElementById("result")
let temp;

function convert(){

    if(Tofarenheit.checked){   
      temp =Number(textbox.value);
      temp = temp * 9 / 5 + 32;
      result.textContent = temp.toFixed(1) + "°F";
    } 

    else if(Tocelsius.checked){
       temp =Number(textbox.value);
       temp = (temp - 32) * (5/9);
     result.textContent = temp.toFixed(1) + "°C";
    }
    else{

        result.textContent = "Select a unit"

    }
}