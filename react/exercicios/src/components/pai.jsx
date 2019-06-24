import React from 'react'

import {childrenWithProps} from '../utils/utils'
//import Filho from './filho'

/*
function childrenWithProps(props) {

    return React.Children.map(props.children, child => {
        return React.cloneElement(child, {
            ...props, ...child.props
        })
    })
}
*/

export default props =>
    <div>
        <h1>{props.nome} {props.sobrenome}</h1>
        <h2>Filhos</h2>
        <ul>
            {
                childrenWithProps(props)
            }
        </ul>
    </div>


// Dados através das props... ou do estado do objeto

// Props são apenas de leitura


// Clone element espera receber apenas um elemento 

// Pode-se usar um map para realizar a transformacao de multiplos objetos