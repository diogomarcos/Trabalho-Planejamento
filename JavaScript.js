'use strict';

const inicio = new Date();

const n = 100;

// Cria uma matriz de Float64 com n posições valoradas em zero
function gerarNovaMatriz() {
    const novaMatriz = [];
    for (let i = 0; i < n; i++) {
        novaMatriz[i] = new Float64Array(n);
    }
    return novaMatriz;
}

function multiplicação(matrizA, matrizB) {
    const matrizResultado = gerarNovaMatriz();
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            let soma = 0;
            for (let k = 0; k < n; k++) {
                soma += matrizA[i][k] * matrizB[j][k];
            }
            matrizResultado[i][j] = soma;
        }
    }
    return matrizResultado;
}

function gerarMatrizPopulada() {
    const matriz = gerarNovaMatriz();
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            const numeroSinistro = ((i / n) / n) + ((j / n) / n) + 1;
            matriz[i][j] = numeroSinistro;
        }
    }
    return matriz;
}

const matrizA = gerarMatrizPopulada();

const matrizB = gerarMatrizPopulada();

const resultado = multiplicação(matrizA, matrizB);

console.log(`Tempo de execução é: ${new Date() - inicio}ms`);