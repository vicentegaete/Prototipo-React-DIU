import React from 'react';
import DataTable from './dataTable';
import '/estilos/mostrar.css';

function mostrar() {
    const data = [
        {importancia: 1, nombre: 'Producto A', descripcion: 'Descripción del Producto A', fecha: '2023-10-20'},
        {importancia: 2, nombre: 'Producto B', descripcion: 'Descripción del Producto B', fecha: '2023-10-21'},
        {importancia: 3, nombre: 'Producto C', descripcion: 'Descripción del Producto C', fecha: '2023-10-19'},
        {importancia: 3, nombre: 'Producto D', descripcion: 'Descripción del Producto D', fecha: '2023-10-05'},
        // Agrega más datos aquí...
    ];

  return (
    <div>
      <h1 className="centered-text">Reportes Recibidos</h1>
      <DataTable data={data} />
    </div>
  );
}

export default mostrar;
