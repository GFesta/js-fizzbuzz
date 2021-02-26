//Scrivi un programma che stampi i numeri da 1 a 100,
//ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
//Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

//inizio con un ciclo "for" per contare da 1 a 100
for (var i = 1; i <= 100; i++) {

    //controllo se divisibile per 3 e per 5 allora stampo fizzbuzz
    if (i% 3 === 0 && i% 5 === 0) { 
        console.log ("FizzBuzz");
        document.getElementById("fizz-buzz").innerHTML = "FIZZBUZZ";
        
    //controllo se divisibile per 3 e stampo, multipli di 3
}   else if (i% 3 === 0) {       //prendo il valore "i" e lo divido per "3", resto, confronto il resto con valore "0"
    console.log ("Fizz");
    document.getElementById( "fizz").innerHTML = "FIZZ";

    //controllo se divisibile per 5 e stampo, multipli di 5
}   else if (i % 5 === 0) {      //prendo il valore "i" e lo divido per "5", resto, confronto il resto con valore "0"
    console.log("Buzz");
    document.getElementById( "buzz").innerHTML = "BUZZ";

    //altrimenti se non divisibile per 3 o 5 stampo il numero stesso
}   else {
    console.log(i);
    }
}


//altra soluzione FIZZBUZZ
for (var i = 1; i <= 100; i++) {
    
    if ((i % 5) == 0 && (i % 3) == 0)
        console.log("FizzBuzz");

    }
    else if ((i % 3) == 0)
    {
        console.log("Fizz");
    }

    else if  ((i % 5) == 0)
    {
        console.log("Buzz");    
    }

    else {
        console.log(i);
    }
}