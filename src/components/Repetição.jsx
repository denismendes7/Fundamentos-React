import React from 'react'

import produto from '../data/produto'

export default props => {

    function getProdutoListItem(){
        return produto.map(prod=>{
            return  <li key={prod.id}>
                        {produto.id} - {prod.nome} -> R$ {prod.preco} 
                    </li>
        })
    }
    return (
        <div>
            <h2>Repetição</h2>
            <ul>
                {getProdutoListItem()}
            </ul>

        </div>
    )
}