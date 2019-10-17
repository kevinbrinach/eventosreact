import React, { Component } from 'react';
import axios from 'axios';

//Creacion del context
const CategoriasContext = React.createContext();
export const CategoriasConsumer = CategoriasContext.Consumer;

class CategoriasProvider extends Component {

    token = '4Y7DWE4HQVO5CVATIJHA';

    state = { 
        categorias : []
     }

    componentDidMount() {
        this.obtenerCategorias();
    }

    obtenerCategorias = async () => {
        
        let url = `https://www.eventbriteapi.com/v3/categories/?token=${this.token}&locale=es_ES`

        let categorias = await axios.get(url);

        // console.log(categorias.data.categories);

        this.setState ({
            categorias : categorias.data.categories
        })
        

    }
    
    render() { 
        return ( 
            //Este es el Provider, aca nacen los datos
            <CategoriasContext.Provider
                value={{
                    categorias : this.state.categorias
                }}
            >
                {this.props.children}
                
            </CategoriasContext.Provider>
         );
    }
}
 
export default CategoriasProvider;