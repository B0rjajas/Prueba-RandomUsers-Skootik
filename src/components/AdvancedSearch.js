import React, { useState } from 'react';

function AdvancedSearch({ onSearch }) {
  const [gender, setGender] = useState('');
  const [minAge, setMinAge] = useState('');
  const [maxAge, setMaxAge] = useState('');
  const [nationality, setNationality] = useState('');
  const [showMessage, setShowMessage] = useState(false);

  const handleSearch = () => {
    // Aquí puedes validar los valores de los campos de búsqueda y realizar la búsqueda
    onSearch({ gender, minAge, maxAge, nationality });
    setShowMessage(true); // Mostrar el mensaje cuando se activa la búsqueda
    setTimeout(() => {
      setShowMessage(false); // Ocultar el mensaje después de 3 segundos
    }, 3000);
  };

  return (
    <div className="container card p-2 mt-3">
      <div className="row">
        <div className="col-md-3">
          <label className="form-label">Género:</label>
          <input type="text" className="form-control" value={gender} onChange={(e) => setGender(e.target.value)} />
        </div>
        <div className="col-md-3">
          <label className="form-label">Edad mínima:</label>
          <input type="number" className="form-control" value={minAge} onChange={(e) => setMinAge(e.target.value)} />
        </div>
        <div className="col-md-3">
          <label className="form-label">Edad máxima:</label>
          <input type="number" className="form-control" value={maxAge} onChange={(e) => setMaxAge(e.target.value)} />
        </div>
        <div className="col-md-3">
          <label className="form-label">Nacionalidad:</label>
          <input type="text" className="form-control" value={nationality} onChange={(e) => setNationality(e.target.value)} />
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-md-12">
          <button className="btn btn-primary" onClick={handleSearch}>Buscar</button>
          {showMessage && <p className="mt-2 text-white text-center card bg-success mx-auto">La publicación está más abajo</p>} {/* Mostrar el mensaje cuando showMessage es true */}
        </div>
      </div>
    </div>
  );
}

export default AdvancedSearch;
