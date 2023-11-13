import React from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import '/estilos/homepage.css';


export const HomePage = () => {
  const opciones = [
    { opcion: 'opcion1', label: 'Reparación de luminarias' },
    { opcion: 'opcion2', label: 'Semaforo apagado' },
    { opcion: 'opcion3', label: 'Pavimento en mal estado' },
    { opcion: 'opcion4', label: 'Retiro de escombros' },
    { opcion: 'opcion5', label: 'Poda de arboles' },
    { opcion: 'opcion6', label: 'Otro' },
  ];

  return (
    <div className="page">
      <h1 className="page__title">MuniDenuncia</h1>
      <h2 className="page__subtitle">Página de Inicio</h2>
      <div className="page__content">
        <p className="page__description">Selecciona un reporte:</p>
        <div className="page__buttons">
          {opciones.map((opcionItem) => (
            <Link key={opcionItem.opcion} to={`/respuesta?opcion=${opcionItem.opcion}`} className="page__link">
              <Button variant="contained" color="primary" className="page__button">{opcionItem.label}</Button>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;

