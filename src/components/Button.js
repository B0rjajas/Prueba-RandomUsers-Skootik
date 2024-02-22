// Button.js
import React from 'react';

function Button({ onClick }) {
  return (
    <button onClick={onClick} type="button" className="btn btn-danger mx-auto d-block">
      Borrar Datos Enviados
    </button>
  );
}

export default Button;
