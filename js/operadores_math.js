/* ----------------------------------------------
© Bruna Bochnia
Estudo JavaScript | Operadores Matemáticos Exemplos
---------------------------------------------- */
// Operador de Soma (+)
var soma = 10 + 5;
console.log("Exemplo de soma 10 + 5:  " + soma);

// Operador de concatenação (+)
var conca = "Bom" + "Dia";
var concaString = "10" + "5";
console.log("Exemplo de concatenação:" + conca);
console.log("Exemplo de concatenação:" + concaString);


// Operador de soma (+) que vira concatenação
var somaConca = "Bom" + 10;
console.log("Exemplo de transforma soma em concatenação 'Bom' + 5 : " + somaConca);


// Operador de Subtração (-) com operandos tipo números
var menosA = 8 - 3 ;
var menosB = 9.7 - 4;
console.log("Exemplo de subtração sendo do tipo número " + menosA );
console.log("Exemplo de subtração sendo do tipo número " + menosB );


// Operador de Subtração (-) com strings texto
var menosC = "Bom" - "Dia";
console.log("Exemplo de operador de subtração como string de texto 'Bom'-'Dia': " + menosC);


// Operador de Subtração (-) com strings números
// neste caso transforma as strings(operando) em números
var menosD = "10" - "5"; 
console.log("Exemplo de operador de subtração como string de números '10'-'5': " + menosD);

// Operador de Multiplicação (*)
var multi = 3 * 5;
console.log("Exemplo de operador de multiplicação 3 * 5: " + multi);

var multiA = "3" * "5";
console.log("Exemplo de operador de multiplicação '3' * '5': " + multiA);


// Operador de Divisão (/) (operandos do tipo número)
var diviA = 8/4;
var diviB = 9.6/3;

console.log("Exemplo de divisão com operandos tipo número 8/4: " + diviA);
console.log("Exemplo de divisão com operandos tipo número 9.6/3" + diviB);

// Operador de Divisão (/) (operandos do tipo string)
var diviC = "Bom"/"dia";
var diviD = "8"/"2";

console.log("Exemplo de divisão com operandos tipo string 'Bom'/'dia': " + diviC);
console.log("Exemplo de divisão com operandos tipo string '8'/'2':" + diviD);


// Operador Binário Módulo (%)
// Muito utilizado o operador módulo para verificar 
// um número é par ex.: x % 2 = 0, então é par.
var moduloBinaA = 3 % 2;
var moduloBinaB = 9 % 5;
var moduloBinaC = -7 % 4;
var moduloBinaD = 6.7 % 5;

console.log("Exemplo de operador binário módulo 3 % 2: " + moduloBinaA);
console.log("Exemplo de operador binário módulo 9 % 5: " + moduloBinaB);
console.log("Exemplo de operador binário módulo -7 % 4: " + moduloBinaC);
console.log("Exemplo de operador binário módulo  6.7 % 5: " + moduloBinaD);

// Operador Unário Menos (-)
// utilizado para trocar o sinal do operando ( converte positivo em negativo)
var unarioMenosA = -4;
var unarioMenosB = -6.87;

console.log(unarioMenosA);
console.log(unarioMenosB);

// Operador Unário Mais (+)
var unarioMaisA = +1000;
var unarioMaisB = +"40"; //transforma string em número

console.log(unarioMaisA);
console.log(unarioMaisB);

// Operador de Incremento (++)
// utilizado para adicionar uma unidade ao operando 
// pode ser aplicado antes ou depois do operando [Pré-incremental ou Pós-incremental]
// o pós-incremento é muito utilizado  em contadores para estruturas de controle. 
var preIncre = 2;
y = ++preIncre; //pré-incremental
console.log("Exemplo de operador Pré-incremental: " + y);

var posIncre = 2;
z = posIncre++; //pré-incremental
console.log("Exemplo de operador Pós-incremental: " + z);


// Operador de Decremento (--)
// utilizado para subtrair uma unidade ao operando.
// se o operando não for numérico será convertido em número.
// pode ser aplicado antes ou depois do operando [Pré-decremental ou Pós-decremental]
var preDecre = 2;
modeloY = --preDecre; //pré-decremental
console.log("Exemplo de operador Pré-decremental: " + modeloY);

var posDecre = 2;
modeloX = posDecre--; //pós-decremental
console.log("Exemplo de operador Pós-decremental: " + modeloX);
