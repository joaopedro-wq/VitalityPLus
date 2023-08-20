import React, { useState } from 'react';
import '../css/Alimento.css';

import alimentosData from '../../services/taco1.json';

function Alimentos() {
 
  const [alimentos] = useState(alimentosData);
  const loading = false; 
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredAlimentos, setFilteredAlimentos] = useState(alimentosData);
  const [ searchGroup, setSearchGroup] = useState('')
  const [selectedGroup, setSelectedGroup] = useState(''); 

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);

    if (searchTerm.trim() === '') {
      setFilteredAlimentos(alimentosData);
      return;
    }

    const keywords = searchTerm.toLowerCase().split(' ');

    const filtered = alimentosData.filter((alimento) =>
      keywords.every((keyword) =>
        alimento['Descrição do Alimento'].toLowerCase().includes(keyword)
      )
    );

    setFilteredAlimentos(filtered);
  };


  const handleGroupSearch = (searchGroup) => {
    setSearchGroup(searchGroup);
  
    const filtered = alimentosData.filter(alimento =>
      alimento['Grupo'].toLowerCase().includes(searchGroup.toLowerCase())
    );
    setFilteredAlimentos(filtered);
  };
  
  

  return (
    <div className="alimentos-container" style={{ marginBottom: '50px' }}>
      <h2>Alimentos</h2>
      <p>Porção por unidade: 100(g)</p>
      <div className="filter-container">
        <div className="search-container">
          <input
            type="text"
            placeholder="Pesquisar alimentos"
            value={searchTerm}
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>
        <div className="group-filter">
          <select
            value={selectedGroup}
            onChange={(e) => {
              setSelectedGroup(e.target.value);
              handleGroupSearch(e.target.value);
            }}
          >
            <option value="">Selecione um grupo</option>
            {Array.from(
              new Set(alimentosData.map((alimento) => alimento['Grupo']))
            ).map((grupo) => (
              <option key={grupo} value={grupo}>
                {grupo}
              </option>
            ))}
          </select>
        </div>
      </div>

      {loading ? (
        <p>Carregando alimentos...</p>
      ) : (
        <table className="alimentos-table">
          <thead>
            <tr>
              <th className='cabecalho'>Nome</th>
              <th className='cabecalho'>Calorias</th>
              <th className='cabecalho'>Proteínas</th>
              <th className='cabecalho'>Carboidratos</th>
              <th className='cabecalho'>Gorduras</th>
              <th className='cabecalho'>Fibra Alimentar </th>
            </tr>
          </thead>
          <tbody>
            {filteredAlimentos.map((alimento) => (
              <tr key={alimento['Número']}>
                
                <td>{alimento['Descrição do Alimento']}</td>
                <td className='alinhar' >{alimento['Energia(kcal)']}</td>
                <td className='alinhar'>{alimento['Proteína(g)']}</td>
                <td className='alinhar'>{alimento['Carboidrato(g)']}</td>
                <td className='alinhar'>{alimento['Lipídeos(g)']}</td>
                <td className='alinhar'>{alimento['Fibra Alimentar(g)']}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Alimentos;
