import React, { useState } from 'react';
import '/estilos/mostrar.css';

function DataTable({ data }) {
  const [sortedDataByDate, setSortedDataByDate] = useState(data);
  const [isAscendingByDate, setIsAscendingByDate] = useState(true);

  const sortDataByDate = () => {
    const sorted = [...sortedDataByDate];
    sorted.sort((a, b) => {
      if (isAscendingByDate) {
        return new Date(a.fecha) - new Date(b.fecha);
      } else {
        return new Date(b.fecha) - new Date(a.fecha);
      }
    });
    setSortedDataByDate(sorted);
    setIsAscendingByDate(!isAscendingByDate);
  };

  const sortDataByImp = () => {
    const sorted = [...sortedDataByDate];
  
    if (isAscendingByDate) {
      sorted.sort((a, b) => a.importancia - b.importancia);
    } else {
      sorted.sort((a, b) => b.importancia - a.importancia);
    }
  
    setSortedDataByDate(sorted);
    setIsAscendingByDate(!isAscendingByDate);
  };

  if (sortedDataByDate.length === 0) {
    return <p>No hay datos para mostrar.</p>;
  }

  return (
    <div className="data-table-container">
      <div className="sort-buttons">
        <button onClick={sortDataByDate}>
          Ordenar por Fecha {isAscendingByDate ? 'ascendente' : 'descendente'}
        </button>
        <button onClick={sortDataByImp}>
          Ordenar por Importancia {isAscendingByDate ? 'ascendente' : 'descendente'}
        </button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Importancia</th>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Fecha</th>
          </tr>
        </thead>
        <tbody>
          {sortedDataByDate.map((item) => (
          <tr>
          <td>{item.importancia}</td>
          <td>{item.nombre}</td>
          <td>{item.descripcion}</td>
          <td>{item.fecha}</td>
        </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;
