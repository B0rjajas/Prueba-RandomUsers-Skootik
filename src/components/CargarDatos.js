import React, { useState, useEffect } from 'react';
import axios from 'axios';

function RandomUser() {
  const [userData, setUserData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Lógica para obtener datos de la API
    axios.get('https://randomuser.me/api/?results=10')
      .then(response => {
        // Establecer los datos de usuario en el estado
        setUserData(response.data.results);
        setIsLoading(false);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="container">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {userData.map((user, index) => (
            <div key={index} className="col mb-4">
              <div className="card" style={{ width: '18rem' }}>
                <img src={user.picture.large} className="card-img-top" alt="User" />
                <div className="card-body">
                  <h5 className="card-title">{user.name.title} {user.name.first} {user.name.last}</h5>
                  <p className="card-text">Email: {user.email}</p>
                  <p className="card-text">Phone: {user.phone}</p>
                  <p className="card-text">Location: {user.location.city}, {user.location.state}, {user.location.country}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default RandomUser;
