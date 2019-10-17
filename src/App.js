import React, { Fragment } from 'react';
import Header from './components/Header';
import CategoriasProvider from './context/CategoriasContext';
import Formulario from './components/Formulario';
import EventosProvider from './context/EventosContext';
import ListaEventos from './components/ListaEventos';


//Esta aplicacion usa un framework llamado UIKit

function App() {
  return (

    //Si se rodean todos los componentes con EventosProvider y CategoriasProvider se puede permitir a todos los componentes usar en algun momento los metodos que Eventos o Categorias tengan
    <EventosProvider>
      <CategoriasProvider>
        <Header/>

        <div className="uk-container">
            <Formulario/>

            <ListaEventos/>
        </div>
      </CategoriasProvider>
    </EventosProvider>
  );
}

export default App;
