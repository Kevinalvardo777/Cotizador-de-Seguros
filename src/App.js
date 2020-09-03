import React, {useState} from 'react';
import Header from './components/Header'
import styled from '@emotion/styled'
import Formulario from './components/Formulario'
import Resumen from './components/Resumen'
import Resultado from './components/Resultado'

const Contenedor = styled.header`
  max-width: 600px;
  margin: auto;
`;

const ContenedorFormulario = styled.div`
  background-color: #FFF;
  padding: 3rem;
`;

function App() {

  const [resumen, guardarResumen] = useState({
    cotizacion: 0,
    datos: {
      marca: '',
      year: '',
      plan: ''
    }
  });

  //extraer datos

  const {datos, cotizacion} = resumen;

  return (
    <Contenedor>
        <Header titulo= 'Cotizador de seguros'/>
        <ContenedorFormulario >
            <Formulario
              guardarResumen= {guardarResumen}
            />
            <Resumen
              datos = {datos}
            />
            <Resultado 
              cotizacion= {cotizacion}
            />
        </ContenedorFormulario>
    </Contenedor>


    
  );
}

export default App;
