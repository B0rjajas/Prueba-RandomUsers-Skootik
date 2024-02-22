import React, { useState, useEffect } from 'react';
import axios from 'axios';

function RandomFemaleUsers() {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    const fetchFemaleUsers = async () => {
      try {
        let results = [];
        for (let i = 0; i < 10; i++) {
          const response = await axios.get('https://randomuser.me/api/?gender=female');
          results = results.concat(response.data.results);
        }
        setUserList(results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchFemaleUsers();
  }, []);

  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {userList.length > 0 ? (
          userList.map(user => (
            <div key={user.login.uuid} className="col">
              <div className="card mb-3" style={{ maxWidth: '18rem' }}>
                <div className="card-body">
                  <h3 className="card-title">Filtrar por Mujer</h3>
                  <img src={user.picture.large} className="card-img-top" alt="User" />
                  <h2 className="card-title">{user.name.title} {user.name.first} {user.name.last}</h2>
                  <p className="card-text">Email: {user.email}</p>
                  <p className="card-text">Phone: {user.phone}</p>
                  <p className="card-text">Location: {user.location.city}, {user.location.state}, {user.location.country}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}

export default RandomFemaleUsers;
