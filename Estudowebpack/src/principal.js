//import './modulos/moduloA' // Ja espera um .js /const Pessoa = require('./pessoa') // modulos do node
import Pessoa from './pessoa' // ECMAS padrão
import './assets' // Caso o import seja feito dessa forma o webpack ira procrurar um arquivo index.js

let atendente = new Pessoa();
console.log(atendente.cumprimentar())

