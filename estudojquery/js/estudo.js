function myFunc() { };//magica aqui

// Escopo global é ruim para o script

// Varios módulos ou scripts que possuem funções com nome similares
// disponíveis em escopo comum... podem causar diversos transtornos

// IIFE resolve a questao de vazamento de escopo
// A função é criada e logo executada

(function (parametros) {
    return console.log(parametros)
})('ola')