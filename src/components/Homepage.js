import React from 'react';
import CargarDatos from "../components/CargarDatos.js";

function HomePage() {
  return (
    <div className=' container'>
      <h1 className='text-center mb-4'>Random Users</h1>
      <CargarDatos />
    </div>
  );
}

export default HomePage;
