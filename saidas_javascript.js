// Modos de saída/exibição no JavaScript 
// Escrevendo em um elemento HTML, usando innerHTML.
// Escrevendo na saída HTML usando document.write().
// Escrevendo em uma caixa de alerta, usando window.alert().
// Escrevendo no console do navegador, usando console.log().

// como estará no HTML <p id="demo"></p>
documente.getElementById("demo").innerHTML =  5 + 6;

// OBS: Usar document.write() após o carregamento de um documento HTML excluirá todo o HTML existente
// O método document.write() só deve ser usado para teste.
document.write(5 + 6);

// Você pode usar uma caixa de alerta window.alert() para exibir dados.
window.alert(5 + 6);

// O objeto janela é o objeto de escopo global. Isso significa que variáveis, propriedades e métodos, por padrão, pertencem ao objeto janela
// Isso também significa que especificar a windowpalavra-chave é opcional
alert(5 + 6);

// Para fins de depuração, você pode chamar o console.log()método no navegador para exibir os dados.
console.log(5 + 6);
