/* 
Demonstrando o funcionamento do event loop
*/
const fs = require("fs");

// setImmediate será executado depois do setTimeout, devido a ordem de execução do event loop
setImmediate(() => console.log("Immediate 1 finalizado"));
setTimeout(() => console.log("Timer 1 finalizado"), 0);

fs.readFile(".\files\test.txt", () => {
    console.log("I/O finalizado");
    console.log("----------------");

    setTimeout(() => console.log("Timer 2 finalizado"), 0);
    setTimeout(() => console.log("Timer 3 finalizado"), 3000);
    setImmediate(() => console.log("Immediate 2 finalizado"));

    // process.nextTick é executado entre uma fase e outra, portanto o console.log irá aparecer após a fase de I/O polling terminar
    process.nextTick(() => console.log("Invocação do Process.nextTick"));
});

console.log("Código top-level que sempre é executado primeiro.");

/* 
A ordem em que os console.log aparecem é:

Código top-level que sempre é executado primeiro.
Timer 1 finished
I/O finalizado
----------------
Invocação do Process.nextTick
Immediate 1 finished
Immediate 2 finalizado
Timer 2 finalizado
Timer 3 finalizado
*/