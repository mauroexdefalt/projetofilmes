import React, { Component } from "react";
import './style.css'


class Filme extends Component {

    constructor(props) {
        super(props);
        this.state = {
            filmeunico: []

        };
    }


    componentDidMount() {
        const { id } = this.props.match.params;
        console.log(id);
        let url = ' https://sujeitoprogramador.com/r-api/?api=filmes/' + id + '';
        fetch(url)
            .then((data) => data.json())
            .then((json) => {
                this.setState({ filmeunico: json });
                console.log(json);
            })

    }
    render() {
        return (
            <div className='lista-filmes'> 
             


                    <article className='container' >
                        {this.state.filmeunico.nome}
                        <img src={this.state.filmeunico.foto} alt='capa' />
                        <p> {this.state.filmeunico.sinopse}</p>
                        <iframe width="560" title='trailer' height="315" src="https://www.youtube.com/embed/8LGJgmbp1yg?controls=0" frameborder="0"
                         allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </article>

               

            </div>

        );
    }
}

export default Filme;
