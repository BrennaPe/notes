// estruturas de repetição while e do while

let a = 1

while (a <= 3){
    console.log(a)
    a++
}
// console.log(a); // mostra o número que está dentro da variável a
// console.log('a');  // mostra exatamente: a
// console.log("a");  // mostra exatamente: a
// console.log(`a`);  // mostra exatamente: a
// console.log(`Passo ${a}`); // template string → substitui ${a} pelo valor
// • "a" ou 'a' ou `a` → são apenas textos literais.
// • ${a} (dentro de crases) → pega o valor da variável e coloca dentro do texto.

let b = 8

do {
    console.log(b)
    b++
} while (b <= 12)

console.log('Inicio do programa')
for (let c = 20; c <= 25; c++){
    console.log(`Tete ${c}`)
}
console.log('Fim do programa')

// ESSAS SÃO AS TRÊS MANEIRAS DE FAZER LOOP COM O WHILE E O DO WHILE

// No Mac, o atalho para a ação de Step Over (Passo a passo) no VS Code é Fn + F10. O F10 é o atalho padrão do teclado e é executado pressionando o botão Fn para acionar as funções F10 no Mac, que geralmente são usadas para controlar o brilho ou o volume do dispositivo. 