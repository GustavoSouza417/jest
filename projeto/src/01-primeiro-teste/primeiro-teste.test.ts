test("Teste da função de soma", () => {
    const soma = require("./primeiro-teste.js");
    expect(soma(10, 20)).toBe(30);
});

//test serve para iniciar uma "função de teste"
//o primeiro parâmetro define uma descrição para o teste
//o segundo parâmetro é uma função anônima de callback
//na qual ocorre o teste

//expect serve para receber um processamento
//e em seguida, supôr um valor de resposta
//se o valor de resposta estiver correto, o teste está válidado
//caso contrário, o teste foi inválido

//existem várias diretivas para o expect
//contudo, por hora, usei apenas o toBe
//que verifica se o valor suposto é igual ao valor
//que está dentro do toBe

//arquivos de teste devem ter .test ou .spec em seu nome
//pois isso é uma convenção

//por enquanto, o Jest só funciona bem com CommonJS
//o ESNext ainda está em modo de experimentação