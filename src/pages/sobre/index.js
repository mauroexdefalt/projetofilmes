import React, { Component  } from 'react';
import { Link } from "react-router-dom";

class Sobre extends Component {
   

    render() {
        return (
            <div className='container'> 
        <p>Sobre</p>
       <Link to="/">Voltar para HoME</Link> 
           <hr/>
            </div>        
        );
    }
}



export default Sobre;