import React from 'react';
import AdvancedSearch from './AdvancedSearch'; // Importa el componente AdvancedSearch
import Logotipo from './Logotipo.js';
import Menu from './Menu';
function Header({ handleSearch }) { // Recibe handleSearch como prop
  return (
    <header>
      <div className="container  p-3 mt-4 mb-4 card">
        
        <Menu />
        <h1 className="bg-warning text-dark rounded font-italic text-center p-4">Ongi Etorri</h1>
        
        <AdvancedSearch onSearch={handleSearch} /> {/* Pasa handleSearch como prop */}
      </div>
    </header>
  );
}

export default Header;
