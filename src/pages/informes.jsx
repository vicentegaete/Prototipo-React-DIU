import React from 'react';

const InformesPage = ({ informes }) => {
  return (
    <div>
      <h1>Informes Enviados</h1>
      <ul>
        {informes.map((informe, index) => (
          <li key={index}>
            Descripción: {informe.descripcion}, Ubicación: {informe.ubicacion}, Fecha: {informe.fecha}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InformesPage;
