import React, { Component } from 'react';
import axios from 'axios';

//Este context maneja la visualizacion de los eventos. Si se usa el otro context 
//para mostrar los eventos cada vez que el usuario realice una busqueda la lista de categorias se va a a recargar
//como la lista de categorias siempre es estatica no tiene sentido hacer que se recargue con cada busqueda
//debido a esto se usa un context para mostrar los eventos solamente

//Creacion del context
const EventosContext = React.createContext();
export const EventosConsumer = EventosContext.Consumer;

class EventosProvider extends Component {
    
    token = '4Y7DWE4HQVO5CVATIJHA';
    ordenar = 'date';
    
    state = { 
        eventos : []
    }

    obtenerEventos = async (busqueda) => {
        let url = `https://www.eventbriteapi.com/v3/events/search/?q=${busqueda.nombre}&categories=${busqueda.categoria}&sort_by=${this.ordenar}&token=${this.token}&locale=es_ES`;

        //consultar la API con la URL
        const eventos = await axios.get(url);

        this.setState({
            eventos : eventos.data.events
        })
    }

    render() { 
        return ( 
            <EventosContext.Provider
                value={{
                    eventos: this.state.eventos,
                    obtenerEventos: this.obtenerEventos
                }}
            >
                {this.props.children}
            </EventosContext.Provider>
         );
    }
}
 
export default EventosProvider;