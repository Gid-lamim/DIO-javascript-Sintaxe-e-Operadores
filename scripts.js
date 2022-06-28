var firstInput = document.getElementById("firstNumber");
var secondInput = document.getElementById("secondNumber")
var submitBtn = document.getElementById("addBtn");
var clearBtn = document.getElementById("clearBtn");
var tryAgain = document.getElementById("tryAgain");
var msgBox = document.getElementById("msg-Box");
var msgField = document.getElementById("text");

submitBtn.addEventListener("click", makeItHappen);
clearBtn.addEventListener("click", clearInput);
tryAgain.addEventListener("click", Restart);

function getInput() {
        var x = parseInt(firstInput.value);
        var y = parseInt(secondInput.value);
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

 

        var messagePart1 = "Os números " + x + " e " + y + " " + comparador +
        ". Sua soma é " + soma + ", que é " + test1 + " do que 10 e " + test2 + " do que 20.";

        return messagePart1;
}


function makeItHappen(){
    var li = document.createElement("p");
    var message = getInput();
    li.appendChild(document.createTextNode(message));
    msgField.appendChild(li);  
}

function clearList(){
    ul.innerHTML = "";
}