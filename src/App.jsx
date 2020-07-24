import React from 'react'
import './App.css'

import Primeiro from './components/Primeiro'
import Card from './components/layout/Card'
import ComParametro from './components/ComParametro'
import ComFilhos from './components/ComFilhos'
import Repetição from './components/Repetição'
import Condicional from './components/Condicional'

export default (props) => (
    <div className="App">
        
        <Card titulo="Condicional">
            <Condicional numero={10}></Condicional>
        </Card>

        <Card titulo="Repetição">
            <Repetição></Repetição>
        </Card>

        <Card titulo="Componentes com filhos">
            <ComFilhos>
                <ul>
                    <li>ana</li>
                    <li>joao</li>
                    <li>biel</li>
                    <li>tih</li>
                 </ul>
            </ComFilhos>
        </Card>

        <Card titulo="Componente com prametro">
            <ComParametro titulo="Esse é o titulo"
                            subtitulo="Esse é subtitulo" />
            <ComParametro titulo="opa"
                            subtitulo="epa" />
        </Card>

        <Card titulo="Primeiro">
            <Primeiro></Primeiro>
        </Card>
       
    </div>
);
