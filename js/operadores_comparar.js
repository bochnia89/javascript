/* ----------------------------------------------
© Bruna Bochnia
Estudo JavaScript | Operadores de Comparação Exemplos
---------------------------------------------- */
// ==  Igualdade
// === Identidade
// !=  Desigualdade
// !== Não Identidade
// >   Maior que 
// <   Menor que
// >=  Maior que ou igual a 
// <=  Menor que ou igual a 

// Operador de Igualdade (==)
var igual = 43;
var validaA = igual == 43;   //retorna true
var validaB = igual == "43"; //retorna true
var validaC = igual == 67;   //retorna false
console.log(validaA);
console.log(validaB);
console.log(validaC);


// Operador de Identidade (===)
var iden = 43;
iden === 43;   //retorna true
iden === "43"; //retorna false
67 === 67;   //retorna false


// Operador de Não igualdade (!=) Não identidade (!==)
// (!=) se o operando não for numérico será convertido em número
// (!=+) se o operando não for numérico não será convertido 
var nIgual = 43;
nIgual != 43;    //retorna false
nIgual !== "43"; //retorna true
67 !== 67;       //retorna true


// Operador Maior que (>)
// retorna TRUE se o operando à esquerdar fo operador for MAIOR QUE o da direita
// se o operando não for numérico será vai tentar converter em número
var maiorQ = 47;
maiorQ > 20;   //retorna true
maiorQ > "47"; //retorna false
"Bom" > "Dia"  //retorna false

// se ambos fores numéricos
8 > 3  //retorna true
2 > 46 //retorna false

// se um for uma String e o outro Numéricos
"Olá" > 3  //retorna false (NaN)
"68" > 3   //retorna true  (converte para número)

// Operador Menor que (<)
// retorna TRUE se o operando à esquerda do operador for menos que o da direita. 
// se não for numérico tentará converter
3 < 4 ; //retorna true
8 < 10; //retorna true 
7 < 7;  //retorna false

// Operador Maior que ou igual a
10 >= 2; //retorna true

// Operador Menor que ou igual a
7 <= 7;  //retorna true