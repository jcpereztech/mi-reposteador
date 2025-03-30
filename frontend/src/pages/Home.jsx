// frontend/src/pages/Home.jsx
import React from 'react';

const Home = () => {
  return (
    <div>
      <h1>Ingresar URL de publicación de Instagram</h1>
      <input type="text" placeholder="https://www.instagram.com/p/..." />
      <button>Procesar publicación</button>
    </div>
  );
};

export default Home;
