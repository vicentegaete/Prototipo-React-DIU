import React, { useState } from 'react';
import users from '/src/data/users';
import { useNavigate } from 'react-router-dom';
import '/estilos/login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [validationNumber, setValidationNumber] = useState('');
  const [error, setError] = useState('');
  const history = useNavigate();

  const handleLogin = () => {
    const user = users.find((user) => user.username === username);

    if (user) {
      if (user.role === 'superusuario' && user.validationNumber !== validationNumber) {
        setError('Número de validación incorrecto');
      } else if (user.password === password) {
        setError('');

        // Establece el tipo de usuario en una variable de estado local
        const userType = user.role;

        // Redirige al usuario
        if (userType === 'superusuario') {
          // Redirige a la página de superusuario
          history('/mostrar');
        } else {
          // Redirige a la página de usuario común
          history('/home');
        }
      } else {
        setError('Contraseña incorrecta');
      }
    } else {
      setError('Usuario no encontrado');
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <div className="login-container">
        <h1>Iniciar Sesión en MuniDenuncia</h1>
        <input
          type="text"
          placeholder="Usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {username === 'trabajador' && (
          <input
            type="text"
            placeholder="Número de validación"
            value={validationNumber}
            onChange={(e) => setValidationNumber(e.target.value)}
          />
        )}
        <button type="submit">Iniciar sesión</button>
        {error && <p>{error}</p>}
      </div>
    </form>
  );
}

export default Login;
