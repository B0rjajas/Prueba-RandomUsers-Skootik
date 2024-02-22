import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import HomePage from './components/Homepage';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import Formulario from './components/Formulario.js';

function App() {
  const [searchResult, setSearchResult] = useState(null);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Recuperar datos del localStorage al cargar la página
    const storedUsers = localStorage.getItem('users');
    if (storedUsers) {
      setUsers(JSON.parse(storedUsers));
    }
  }, []); // Se ejecuta solo una vez al cargar la página

  useEffect(() => {
    // Guardar datos en localStorage cuando se actualiza 'users'
    localStorage.setItem('users', JSON.stringify(users));
  }, [users]); // Se ejecuta cada vez que 'users' cambia

  const handleSearch = (searchParams) => {
    axios.get('https://randomuser.me/api/', {
      params: searchParams
    })
    .then(response => {
      setSearchResult(response.data.results);
    })
    .catch(error => {
      console.error('Error fetching search results:', error);
    });
  };

  const handleAddUser = (newUser) => {
    setUsers([...users, newUser]);
  };

  return (
    <div className='App'>
      <Header handleSearch={handleSearch} />
      <HomePage />

      <main>
        <Formulario onAddUser={handleAddUser} />
      </main>

      {searchResult && (
        <div className="container center">
          {searchResult.map(user => (
            <div key={user.login.uuid} className="col-md-4 mb-4">
              <div className="card mb-3 mt-4" style={{ maxWidth: '18rem' }}>
                <img src={user.picture.large} className="card-img-top" alt="User" />
                <div className="card-body">
                  <h5 className="card-title">{user.name.first} {user.name.last}</h5>
                  <p className="card-text">Email: {user.email}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="container">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
          {users.map((user, index) => (
            <div key={index} className="col">
              <div className="card h-100">
                <div className="card-body">
                  <p className="card-text">Género: {user.gender}</p>
                  <p className="card-text">Nombre: {user.name}</p>
                  <p className="card-text">Email: {user.email}</p>
                  <p className="card-text">Foto: {user.photo}</p>
                  <p className="card-text">Teléfono: {user.phone}</p>
                  <p className="card-text">Ubicación: {user.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
