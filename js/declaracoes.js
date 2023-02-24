/* ----------------------------------------------
© Bruna Bochnia
Estudo JavaScript | Exemplos de declarações e estruturas
---------------------------------------------- */

// SCRIPT conjunto de instruções em código

// Declarações linha/bloco de comandos que compõem um script
// Um programa é constituído por uma sequência de declarações

/*

DECLARAÇÃO               FINALIDADE
var         Declara uma variável
function    Declara uma função
return      Retorna um valor
if/else     Cria estrutura condicional (se /se não)
switch      Cria estrutura condicional (chave / trocar / interruptor)
case        Usado em estrutura condicional switch (caso)
break       Usado em estrutura condicional switch (quebrar /romper)
default     Usado em estrutura condicional switch (padrão)
for         Criar um loop (para)
continue    Reinicia um loop 
while       Criar estrutura de repetição (enquanto)
do/while    Criar estrutura de repetição (fazer / enquanto)
for/in      Criar loop em objeto (para / em)
throw       Sinalizar erros (lançar / atirar /jogar)
try/catch   Tratar erros (tentar / capturar pegar /)
/finally    Tratar erros (finalmente /afinal)
with        Alterar o escopo (com)
;           Declaração vazia 

*/



// VAR  declaração de uma ou mais variáveis
// pode ser declarado múltiplas variáveis em um alista, separadas por vírgula 
// var nome1 = valor1;
var x;
var y = 6;
var a, b, c;
var d = 1, e = 3, f = 4;

// uma variável declarada sem atribuir valor será apresentada como Undefined


// FUNCTION destina a definir uma função JavaScript.
// uma função pode admitir zero ou mais argumento
// function nomeFunção (arg1, arg2, arg3){
//     script
// }

function multiplica (x, y){
    var resultado = x * y;
    alert(resultado)
};


// RETURN Retorna o valor resultado da função 
// pode ser colocar em qualquer lugar só que dentro da função
// se colocada para fora da função pode dar erro de sintaxe
// muito utilizada para interromper a execução de um função caso não seja satisfeita

function soma(x,y){
    return x + y;
};
var a = soma(3, 2); 


// ESTRUTURAS CONDICIONAIS 
// if/else, else if, switch criam estruturas de testes condicionais
// Tradução para linguagem corrente:
// teste esta expressão, se for verdadeira, faça isso {
// } e se for falsa, faça aquilo {
// }

// IF / ELSE
var idade = 3;
if(idade <= 11){
    alert("Você é uma criança");
} else {
    alert("Você não é mais uma criança");
};


// IF/ ELSE IF /ELSE
var idadeB = 27;

if(idadeB <= 11){
    alert("Você é uma criança");
}
else if (idadeB > 11 && idadeB <= 14){
    alert("Você é um pré-adolescente");
}
else if (idadeB >= 21 && idadeB < 60){
    alert("Você é um adulto");
}
else {
    alert("Você é um idoso");
};





// SWITCH
// Caso a expressão seja verdadeira, execute o bloco de código que segue, 
// caso seja fala, pule o bloco de código que se segue.
var estadoSul = "SC";

switch (estadoSul){
    case "RS":
        alert("Rio grande do Sul");
        break;
    case "SC":
        alert("Santa Catarina");
        break;
    case "PR":
        alert("Paraná");
        break;
        default:
            alert("Não é sigla de um estado da região sul");
};


// ESTRUTURAS PARA LOOPS
// for, while, do/while, for in
// loop basicamente testa uma condição e executa um código, testa novamente e executa o mesmo código
// Linguagem Corrente: Atribua à variável i o valor 0 e enquanto i for menor do que 10, mostre uma caixa de alerta com o valor de i
// for(valorInicial; condição; atualizarValorINicial){ Faça isso ...}

var mensagem = "";
for(var i=0;i<10;i++){
        if(i == 9){
        mensagem +=i;
   break;
 };
 mensagem +=i + ",";
};
alert(mensagem);

var msg="", j=0;
do{
    msg += j+ ",";
    j++;
}
while(j <= 10);
alert(msg);