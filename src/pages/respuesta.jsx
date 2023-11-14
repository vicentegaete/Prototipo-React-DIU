import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';



export const RespuestaPage = () => {
    const location = useLocation();
    const opcion = new URLSearchParams(location.search).get('opcion');

    const descripcionPorOpcion = {
        opcion1: 'Reparación de luminarias',
        opcion2: 'Semaforo apagado',
        opcion3: 'Pavimento en mal estado',
        opcion4: 'Retiro de escombros',
        opcion5: 'Poda de arboles',
    };

    // Obtén la fecha actual
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = String(currentDate.getMonth() + 1).padStart(2, '0'); // Los meses van de 0 a 11, por lo que añadimos 1
    const currentDay = String(currentDate.getDate()).padStart(2, '0');

    // Formatea la fecha al formato 'YYYY-MM-DD'
    const formattedDate = `${currentYear}-${currentMonth}-${currentDay}`;

    const [formularioData, setFormularioData] = useState({
        descripcion: descripcionPorOpcion[opcion] || opcion,
        ubicacion: '',
        fecha: formattedDate, // Establece la fecha actual como valor predeterminado
    });

    // Establece las fechas mínima y máxima para el año actual
    const minDate = `${currentYear}-01-01`;
    const maxDate = `${currentYear}-12-31`;

    const [reporteEnviado, setReporteEnviado] = useState(false);

    const [informes, setInformes] = useState([]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormularioData({ ...formularioData, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const nuevoInforme = { ...formularioData };

        setInformes([...informes, nuevoInforme]);

        setReporteEnviado(true);
    };

    return (
        <div className="page">
            <h1 className="page__title">MuniDenuncia</h1>
            <h2>Respuesta a la opción: {descripcionPorOpcion[opcion]}</h2> {/* Muestra el nombre de la opción seleccionada */}
            {!reporteEnviado && (
                <form onSubmit={handleSubmit}>
                    {opcion === 'opcion6' ? (
    <div>
        <label htmlFor="descripcion">Descripción:</label>
        <input
            type="text"
            id="descripcion"
            name="descripcion"
            onChange={handleInputChange}
        />
        <label htmlFor="ubicacion">Ubicación:</label>
        <input
            type="text"
            id="ubicacion"
            name="ubicacion"
            value={formularioData.ubicacion}
            onChange={handleInputChange}
        />
    </div>
) : (
<div>
    <label htmlFor="ubicacion">Ubicación:</label>
    <input
        type="text"
        id="ubicacion"
        name="ubicacion"
        value={formularioData.ubicacion}
        onChange={handleInputChange}
    />
    <br />
    <label htmlFor="fecha">Fecha:</label>
    <p id="fecha">{formularioData.fecha}</p> {/* Muestra la fecha como texto en lugar de un campo de entrada */}
</div>
)}

                    <Button type="submit">Enviar</Button>
                </form>
            )}
            {reporteEnviado && (
                <div>
                    <p>Se envió el reporte</p>
                    <Link to="/">
                        <Button>Continuar</Button>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default RespuestaPage;

