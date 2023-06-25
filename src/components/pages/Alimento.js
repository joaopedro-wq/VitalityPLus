import React, { useState, useEffect } from 'react';
import '../css/Alimento.css';
import axios from 'axios';
import { useTranslation } from 'react-i18next';

function Alimentos() {
  const { t } = useTranslation();
  const [alimentos, setAlimentos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filtro, setFiltro] = useState('');
  const [categoriaFiltro, setCategoriaFiltro] = useState('');

  useEffect(() => {
    const obterAlimentos = async () => {
      try {
        const response = await axios.get('https://api.nal.usda.gov/fdc/v1/foods/search', {
          params: {
            api_key: 'ZJyGJgT85ZT13ebeaHwrWnDJ6U4IcfhQyIbiI2tf',
            query: filtro,
            pageSize: 100,
            dataType: 'Branded',
            category: categoriaFiltro
          },
        });
        

        setAlimentos(response.data.foods);
    setLoading(false);
  } catch (error) {
    console.error(error);
  }
};

    obterAlimentos();
  }, [filtro]);

  const handleFiltroChange = (e) => {
    setFiltro(e.target.value);
  };
  const handleCategoriaFiltroChange = (e) => {
    setCategoriaFiltro(e.target.value);
  };
  
  return (
    <div className="alimentos-container">
      <h2>Alimentos</h2>
      <div className="filtro-container">
  <label htmlFor="filtro">Filtrar alimentos:</label>
  <input type="text" id="filtro" value={filtro} onChange={handleFiltroChange} />
  <label htmlFor="categoriaFiltro">Categoria:</label>
  <select id="categoriaFiltro" value={categoriaFiltro} onChange={handleCategoriaFiltroChange}>
    <option value="">Todas as categorias</option>
    <option value="Dairy and Egg Products">Produtos lácteos e ovos</option>
    <option value="Fast Foods">Fast foods</option>
  
  </select>
</div>

      
      {loading ? (
        <p>Carregando alimentos...</p>
      ) : (
        <table className="alimentos-table">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Calorias</th>
              <th>Proteínas</th>
              <th>Carboidratos</th>
              <th>Gorduras</th>
            </tr>
          </thead>
          <tbody>
            {alimentos.map((alimento) => (
              <tr key={alimento.fdcId}>
                <td>{alimento.description}</td>
                <td>
                  {alimento.foodNutrients.find((nutriente) => nutriente.nutrientName === 'Energy')?.value || '-'}
                </td>
                <td>
                  {alimento.foodNutrients.find((nutriente) => nutriente.nutrientName === 'Protein')?.value || '-'}
                </td>
                <td>
                  {alimento.foodNutrients.find(
                    (nutriente) => nutriente.nutrientName === 'Carbohydrate, by difference'
                  )?.value || '-'}
                </td>
                <td>
                  {alimento.foodNutrients.find((nutriente) => nutriente.nutrientName === 'Total lipid (fat)')?.value ||
                    '-'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Alimentos;
