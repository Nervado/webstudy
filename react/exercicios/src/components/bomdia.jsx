// O nome do componente tem que começar com letra maiuscula
import React from 'react'
//import {Fragment} from 'react'

// Usando React.Fragment ou Fragment ou envolvendo com uma <div>

// Sempre que for trabalhar com array é necessário haver uma key

// Retornar como array
export default props => [
    <h1 key='h1'>Bom dia {props.nome}!</h1>,
    <h2 key='h2'>Até Breve!</h2>
]

/*
// Propriedades passadas para o componente
export default props =>
    <Fragment>
        <h1>Bom dia {props.nome}!</h1>
        <h2>Até Breve!</h2>
    </Fragment>
    // não se pode colocar duas tags em um mesmo elemento

*/