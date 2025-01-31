class Calculadora {
    public static somar(a: number, b: number): number {
        return a + b;
    };

    public static subtrair(a: number, b: number): number {
        return a - b;
    };

    public static multiplicar(a: number, b: number): number {
        return a * b;
    };

    public static dividir(a: number, b: number): number {
        return a / b;
    };
};

module.exports = Calculadora;