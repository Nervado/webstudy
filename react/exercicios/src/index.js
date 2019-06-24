import React from 'react'
import ReactDOM from 'react-dom'

//import Bomdia from './components/bomdia'

//import Saudacao from './components/saudacao'

import Pai from './components/pai'
import Filho from './components/filho'

ReactDOM.render(
    <div>
        <Pai nome = "Paulo" sobrenome = "Silva">
            <Filho nome="Pedro"></Filho>
            <Filho nome="Paulo"></Filho>
            <Filho nome="Carla"></Filho>
        </Pai>
        
    </div>
    , document.getElementById('root'))


