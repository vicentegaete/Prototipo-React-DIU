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

    const [formularioData, setFormularioData] = useState({
        descripcion: descripcionPorOpcion[opcion] || opcion,
        ubicacion: '',
        fecha: '',
    });

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
            <h2>Respuesta a la {opcion}</h2>
            {!reporteEnviado && (
                <form onSubmit={handleSubmit}>
                    {opcion === 'opcion6' ? (
                        <div>
                            <label htmlFor="descripcion">Descripción:</label>
                            <input
                                type="text"
                                id="descripcion"
                                name="descripcion"
                                value={formularioData.descripcion}
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
                        <input
                            type="date"
                            id="fecha"
                            name="fecha"
                            value={formularioData.fecha}
                            onChange={handleInputChange}
                        />
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

export default RespuestaPage
