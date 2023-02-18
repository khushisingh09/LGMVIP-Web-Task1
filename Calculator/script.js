let calculator_input_Number_V = document.getElementById('calculator_input_Number');
let calculator_input_Number_Previews_V = document.getElementById('calculator_input_Number_Previews');

let Calculator_input_AC_V = document.getElementById('Calculator_input_AC');
let Calculator_input_DEL_V = document.getElementById('Calculator_input_DEL');

let DisplayValue;

function display(DisplayValue){
    calculator_input_Number_V.value+=DisplayValue;

}

Calculator_input_AC_V.addEventListener('click',()=>{
    calculator_input_Number_V.value="";
    calculator_input_Number_Previews_V.value="";
})

Calculator_input_DEL_V.addEventListener('click',()=>{
    calculator_input_Number_V.value=calculator_input_Number_V.value.slice(0,-1);
})

function displaySolve(){

    let eq = calculator_input_Number_V.value;

    calculator_input_Number_Previews_V.value=eq;

    let y= eval(eq);

    calculator_input_Number_V.value=y;


}