var firstInput = document.getElementById("firstNumber");
var secondInput = document.getElementById("secondNumber")
var submitBtn = document.getElementById("addBtn");
var tryAgain = document.getElementById("tryAgain");
var formBox = document.getElementById("formBox");
var msgBox = document.getElementById("msgBox");
var msgField = document.getElementById("text");

submitBtn.addEventListener("click", makeItHappen);
tryAgain.addEventListener("click", restart);


function restart(){
    displayForm();
    msgField.innerHTML = "";
}


function getInput() {

        var x = parseInt(firstInput.value);
        var y = parseInt(secondInput.value);
        var message = "";
        console.log((firstInput.value == "")? "s":"e");
        console.log(firstInput.value);

        if (firstInput.value != "" || secondInput.value != 0){
            var comparador = x==y? " são iguais" : " não são iguais";
            var soma = (x + y);
            var test1 = "maior";
            var test2 = "maior";    

            if ( soma > 10 && soma <20) {
                test2 = "menor";
            } else if (soma < 10){
                test1 = "menor";
                test2 = "menor";
            }
             message = "Os números " + x + " e " + y + " " + comparador +
            ". Sua soma é " + soma + ", que é " + test1 + " do que 10 e " + test2 + " do que 20.";
        }else{
            message = "Inputs are empty";    
        }

        return message;
}



function makeItHappen(){
    
        
        var p = document.createElement("p");
        var message = getInput();
        p.appendChild(document.createTextNode(message));
        msgField.appendChild(p);  
       
        displayMsg();
    
}

function displayMsg(){
    formBox.className="disabledBox";
    msgBox.className="msgBox";
}

function displayForm(){
    formBox.className="";
    msgBox.className="disabledBox"; 
}


function clearList(){
    ul.innerHTML = "";
}