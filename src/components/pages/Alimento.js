import React, { useState } from 'react';
import '../css/Alimento.css';
import { useTranslation } from 'react-i18next';

import alimentosData from '../../services/taco.json';

function Alimentos() {
  const { t } = useTranslation();
  const [alimentos, setAlimentos] = useState(alimentosData);
  const loading = false; 
  return (
    <div className="alimentos-container" style={{ marginBottom: '50px' }}>
      <h2>Alimentos</h2>
      <p>Unidade: 100(g)</p>
      {/* Seu código de filtro e pesquisa aqui */}
      {loading ? (
        <p>Carregando alimentos...</p>
      ) : (
        <table className="alimentos-table">
          <thead>
            <tr>
             <th>Grupo</th>
              <th>Nome</th>
              <th>Calorias</th>
              <th>Proteínas</th>
              <th>Carboidratos</th>
              <th>Gorduras</th>
              <th>Fibra Alimentar </th>
            </tr>
          </thead>
          <tbody>
            {alimentos.map((alimento) => (
              <tr key={alimento['Número']}>
                <td>{alimento['Grupo']}</td>
                <td>{alimento['Descrição do Alimento']}</td>
                <td>{alimento['Energia(kcal)']}</td>
                <td>{alimento['Proteína(g)']}</td>
                <td>{alimento['Carboidrato(g)']}</td>
                <td>{alimento['Lipídeos(g)']}</td>
                <td>{alimento['Fibra Alimentar(g)']}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Alimentos;
