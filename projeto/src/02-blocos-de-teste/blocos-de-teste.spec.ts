//lembre-se que você pode usar .spec ao invés de .test
//no nome do arquivo

//a função "describe" serve para declarar um bloco de testes
//basicamente, ela agrupa testes relacionados
describe("Testes para os métodos da classe Calculadora", () => {
    const Calculadora = require("./blocos-de-teste.js");

    //"it" é o mesmo que "test"
    //você pode usar qualquer um dos dois
    it("Teste do método de soma", () => {
        expect(Calculadora.somar(10, 20)).toBe(30);
        expect(Calculadora.somar(-15, 7)).toBe(-8); //você pode ter múltiplos "expect" por teste
    });

    it("Testes do método de subtração", () => {
        expect(Calculadora.subtrair(10, 5)).toBe(5);
        expect(Calculadora.subtrair(10, 11)).toBe(-1);
    });

    it("Testes do método de multiplicação", () => {
        expect(Calculadora.multiplicar(5, 5)).toBe(25);
        expect(Calculadora.multiplicar(-5, 10)).toBe(-50);
    });

    it("Testes do método de divisão", () => {
        expect(Calculadora.dividir(5, 5)).toBe(1);
        expect(Calculadora.dividir(-5, 5)).toBe(-1);
    });
});