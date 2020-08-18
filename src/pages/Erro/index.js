import React, { Component  } from 'react';
import { Link } from "react-router-dom";

class Erro extends Component {
    render() {
        return (
            <div className='container'> 
       <p>Pagina Não Encontrada</p>
       <Link to="/">voltar para home</Link> 
       
           <hr/>
            </div>        
        );
    }
}
export default Erro;