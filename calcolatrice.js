var numero = Number(process.argv[2]);

var segno = process.argv[3];

var numero1 = Number(process.argv[4]);

var risultato;

if (segno == '+') {
    risultato = numero + numero1;
    console.log("\n\n" + numero + " + " + numero + " = " + risultato);
} else if (segno == '-') {
    risultato = numero - numero1;
    console.log("\n\n" + numero + " - " + numero1 + " = " + risultato);
} else if (segno == '*') {
    risultato = numero * numero1;
    console.log("\n\n" + numero + " * " + numero1 + " = " + risultato);
} else if(segno == '/') {
    risultato = numero / numero1;
    console.log("\n\n" + numero + " / " + numero1 + " = " + risultato);
} else if(segno == '%') {
    risultato = numero % numero1;
    console.log("\n\n" + numero + " % " + numero1 + " = " + risultato);
} else {
    console.error("c'è stato un errore:\nmi raccomandi usa i segni giusti\noppure esegui il file con i giusti argomenti da passare");
}