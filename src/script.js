
document.addEventListener("DOMContentLoaded", function(){
    const display = document.getElementById("calc-display");
    const buttons = document.getElementsByClassName("btn");

    let current_value = "";

    function evaluateResult(){

        const converted_value = current_value
            .replace("×", "*")
            .replace("÷", "/")
            .replace("%", "*0.01")
            .replace("sin", "Math.sin")
            .replace("cos", "Math.cos")
            .replace("ln", "Math.log")
            .replace("π", "Math.PI")
            .replace("log", "Math.log10")
            .replace("e", "Math.E")
            .replace("tan", "Math.tan")
            .replace("√", "Math.sqrt");

        const result = eval(converted_value);
        current_value = result.toString();
        display.value = current_value;
    };

    for (let i = 0; i < buttons.length; i++){
        const button = buttons[i];
        button.addEventListener("click", function(){
             
            const value = button.innerText;

            try {

                if(value == "AC"){
                    current_value = "";
                    display.value = current_value;
                }else if (value == "=") {
                    evaluateResult();
                } else {
                    current_value += value;
                    display.value = current_value;
                }
                
            } catch (error) {
                console.error(error);
                current_value = "ERROR";
                display.value = current_value;                
            }
        });
    }
});