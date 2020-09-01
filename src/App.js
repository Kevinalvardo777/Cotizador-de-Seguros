import React from 'react';
import Header from './components/Header'
import styled from '@emotion/styled'

const Contenedor = styled.header`
  max-width: 600px;
  margin: auto;
`;

const ContenedorFormulario = styled.div`
  background-color: #FFF;
  padding: 3rem;
`;

function App() {
  return (
    <Contenedor>
        <Header titulo= 'Cotizador de seguros'/>
        <ContenedorFormulario ></ContenedorFormulario>
    </Contenedor>


    
  );
}

export default App;
