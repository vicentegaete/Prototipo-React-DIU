import React from 'react';
import DataTable from './dataTable';
import '/estilos/mostrar.css';

function mostrar() {
    const data = [
        {importancia: 2, nombre: 'Av Grecia 123', descripcion: 'Reparación de luminarias', fecha: '2023-10-18'},
        {importancia: 3, nombre: 'Moneda 748', descripcion: 'Semaforo apagado', fecha: '2023-10-13'},
        {importancia: 2, nombre: 'Esmeralda 23', descripcion: 'Pavimento en mal estado', fecha: '2023-10-19'},
        {importancia: 1, nombre: 'Caupolicán 239', descripcion: 'Retiro de escombros', fecha: '2023-10-05'},
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
