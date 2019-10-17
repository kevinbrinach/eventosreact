import React, { Component } from 'react';
import { CategoriasConsumer } from '../context/CategoriasContext'; //importacion del consumer de Categorias
import { EventosConsumer } from '../context/EventosContext'; //importacion del consumer de Eventos


class Formulario extends Component {
    state = { 
        nombre:'',
        categoria: ''
    }

    //Si el usuario agrega un evento o categoria

    obtenerDatosEvento = e =>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    render() { 
        return ( 
            <EventosConsumer>
                {(value) => {
                    //console.log(value)
                    return (
                        <form
                            onSubmit={ e => {
                                e.preventDefault();
                                value.obtenerEventos(this.state)

                            }}
                        >
                            <fieldset className="uk-fieldset uk-margin">
                                <legend className="uk-legend uk-text-center">
                                    Busca un evento por Nombre o Categoría
                                </legend>
                            </fieldset>

                            <div className="uk-column-1-3@m uk-margin">
                                <div className="uk-margin" uk-margin="true">
                                    <input 
                                        name="nombre"
                                        className="uk-input"
                                        type="text"
                                        placeholder="Nombre de Evento o Ciudad"
                                        onChange={this.obtenerDatosEvento}
                                    />
                                </div>

                                <div className="uk-margin" uk-margin="true">
                                    <select 
                                        className="uk-select"
                                        name="categoria"
                                        onChange={this.obtenerDatosEvento}
                                        > {/* Para acceder a los datos del Provider se tiene que importar el consumer, luego pasar value y de ahi ya se puede acceder a los datos que tiene el Consumer */}
                                            <option value="">--Seleccionar Categoria</option>
                                            <CategoriasConsumer>
                                                {(value) => {
                                                    return (
                                                        value.categorias.map(categoria => (
                                                            <option key={categoria.id} value={categoria.id} data-uk-form-select>
                                                                {categoria.name_localized}
                                                            </option> 
                                                        ))
                                                    )
                                                }}
                                            </CategoriasConsumer>
                                    </select>

                                </div>

                                <div className="uk-margin" uk-margin="true">
                                    <input type="submit" className="uk-button uk-button-danger"
                                    value="Busca eventos" />
                                </div>
                            </div>

                        </form>
                    )
                }}
            </EventosConsumer>
         );
    }
}
 
export default Formulario;