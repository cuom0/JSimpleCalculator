//Un Programma di Cuomo Salvatore

const display = document.getElementById("display"); //Dichiarazione della costante "display" collegata all'id "display" del codice HTML.

function appendToDisplay(input){
    display.value += input; //I numeri e operatori cliccati vengono aggiunti al valore della variabile display.
}

function clearDisplay(){
    display.value = ""; //Reset della calcolatrice attraverso il click di C.
}

function calculate(){
try{ //Prova prima le istruzioni...
    display.value = eval(display.value); 
    //calcolatore automatico, eval() e' utile per risparmiare tempo, ma può anche risultare pericoloso se sfruttato nei 'software sbagliati'.
}
catch(error){ //...nel caso di errore, rimpiazza il risultato con "Errore".
    display.value = "Errore";
}
}

function squareroot(){
    try{
        try{ //Prova prima le istruzioni...
            display.value = eval(display.value); 
            //calcolatore automatico, eval() e' utile per risparmiare tempo, ma può anche risultare pericoloso se sfruttato nei 'software sbagliati'.
        }
        catch(error){ //...nel caso di errore, rimpiazza il risultato con "Errore".
            display.value = "Errore";
            stop;
        }
        display.value = Math.sqrt(display.value);
    }
    catch(error){
        display.value = "Errore";
    }
    if(display.value == "NaN"){
        display.value = "Errore (NaN)"
    }
}
