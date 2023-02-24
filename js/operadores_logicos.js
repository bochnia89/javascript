/* ----------------------------------------------
© Bruna Bochnia
Estudo JavaScript | Operadores Lógicos Exemplos
---------------------------------------------- */
// Utilizados para tomadas de decisões com 
// base no retorno dos valores booleanos TRUE e FALSE
// muito utilizados em Esruturas de Controle

// &&  Lógico e (AND)
// ||  Lógico ou (OR)
// !   Lógico não (NOT)

// Operador Lógico E AND (&&) 
// true && true = true, se um deles for false ele irá retornar false
// operado1 && operando2
// pra retornar booleanos e tomar-se uma decisão em função do que for retornado
(12 > 3) && (a = 45); //retorna true
(2 > 18) && (a = 45); //retorna false


x = (12 > 3) && (a = 45);
y = (2 > 18) && (a = 45);
alert("x= "+ x + "\ny= "+ y);

// Operador Lógico OU OR (||)
// retorna true se um dos operadores for verdadeiro se não retorna false
(12 > 3) || (a = 45); //retorna true
(2 > 18) || (4 = 45); //retorna true


// Operador Lógico NÃO NOT (!)
// operador de negação que retorna true se a condição é false e vice-versa
!(7 = 7);   //retorna false 
!(10 < 2 ); //retorna true

// com o uso da DUPLA NEGAÇÃO (!!) podemos forçar qualquer variável a assumir um valor booleano
var negaDupla = 30;
alert(negaDupla);   //alerta 30
alert(!!negaDupla); //retorna true