const saudacao = require('./saudacao')
const express = require('express')
const app = express()

app.use(saudacao('Evandro'))

// Mais especifica, pode mudar
// get parametros dentro da url
// post parametros no corpo da url
app.get('/clientes/relatorio', (req, res) =>  {
    res.send(`Cliente relatório: completo ${req.query.completo} ano = ${req.query.ano}`)
})

app.post('/corpo',(req,res) => {
    
})


// :id parte variavel ou parametro
app.get('/clientes/:id',(req, res)=>{
    res.send(`Cliente ${req.params.id} selecionado!`)
})




// use,get,all and option to say what we can do
app.get('/opa',(req, res, next) => {

    res.send([
        {objeto1: 'Evandro'},{objeto2: 'Abreu'},{objeto3: 'Oliveira'}
    ])
    next()
    /* res.json({
        name: "Ipad",
        preco: "R$ 3999,00"
    }) */
    //res.send('Estou <b>bem</b>!')
})

app.listen(3000, () => {
    console.log('Backend exec....')
})