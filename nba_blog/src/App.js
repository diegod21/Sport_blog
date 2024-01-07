import React, { useEffect, useState } from 'react';
import './App.css';
import getSeason from './api_externa/get'; // Substitua pelo caminho correto

function App() {
  const [seasonData, setSeasonData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getSeason();
        setSeasonData(data);
      } catch (error) {
        console.error('Erro ao buscar a temporada:', error.message);
      }
    };

    fetchData();
  }, []); // O array vazio como segundo argumento garante que a função é executada apenas uma vez, equivalente ao componentDidMount

  return (
    <div className="App">
      {seasonData ? (
        <div>
          <h1>Temporada Atual: {seasonData?.season}</h1>
          {/* Aqui você pode exibir outras informações da temporada conforme necessário */}
        </div>
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
}

export default App;
