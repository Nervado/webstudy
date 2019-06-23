import React, { Component } from 'react'

export default class Saudacao extends Component {
    state = {
        tipo: this.props.tipo, // Definiu o valor inicial do estado a 
        nome: this.props.nome // partir das propriedades passadas
    }

    constructor(props) {
        super(props) // necessário chamar o super
        this.setTipo = this.setTipo.bind(this)
        //this.setNome = this.setNome.bind(this)
    }

    setTipo(e) {
        //let i = 1
        //setInterval(()=>{
        //    this.setState({tipo: ++i})
        //},1000)
        // console.log(e.target.value)
        this.setState({ tipo: e.target.value }) // Dá erro
        // Propriedades recebidas são read-only
    }

    setNome(e) {
        this.setState({ nome: e.target.value })
    }
    render() {
        const { tipo, nome } = this.state
        return (
            <div>
                <h1>{tipo}{nome}!</h1>
                <hr />
                <input type="text" placeholder="Tipo..." value={tipo}
                    onChange={this.setTipo} />
                <input type="text" placeholder="Nome..." value={nome}
                    onChange={e => this.setNome(e)} />
            </div>
        )
    }
}