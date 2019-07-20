const saudacao = require('./saudacao')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const userApi = require('./api/user')


app.post('/usuario', userApi.salvar)
app.get('/usuario', userApi.obter)

require('./api/product')(app, 'com param!')

app.use(bodyParser.text()) // Midware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use(saudacao('Evandro'))

// Mais especifica, pode mudar
// get parametros dentro da url
// post parametros no corpo da url
app.get('/clientes/relatorio', (req, res) =>  {
    res.send(`Cliente relatório: completo ${req.query.completo} ano = ${req.query.ano}`)
})

app.post('/corpo',(req,res) => {
    /* let corpo = ''
    req.on('data', function(parte){
        corpo +=parte 
    })
    req.on('end', function(){
        res.send(corpo)
    }) */
    res.send(req.body)
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