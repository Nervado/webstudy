
/* function saudacao(){
    console.log("Seja bem vindo!")
} */

// Refatorando para retornar funcao midware

function saudacao(nome){
    return function(req, res, next) {
        // Este codigo sempre sera chamado
        console.log(`Seja bem vindo ${nome}.`)
        next()
    }    
}


module.exports = saudacao