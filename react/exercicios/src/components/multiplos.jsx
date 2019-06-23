import React from 'react'


// default funcao anonima ...

// usar expor vai dar problema, necessario especificar o nome
export const BoaTarde = props => <h1>Boa Tarde {props.nome}!</h1>

export const BoaNoite = props => <h1>Boa Noite {props.nome}!</h1>

export default {BoaTarde, BoaNoite}