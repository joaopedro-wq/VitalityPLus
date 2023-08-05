const fs = require('fs');
const csv = require('csv-parser');

const results = [];

fs.createReadStream('./Taco.csv')
  .pipe(csv())
  .on('data', (data) => results.push(data))
  .on('end', () => {
    // results contém os dados do CSV no formato de array de objetos
    // Você pode fazer o que quiser com os dados, como transformá-los em JSON
    
    const jsonData = JSON.stringify(results);
    
    // Escrever o JSON em um arquivo
    fs.writeFileSync('taco.json', jsonData, 'utf-8');
    
    console.log('Arquivo JSON gerado com sucesso!');
  });
