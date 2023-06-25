import axios from 'axios';

const testUSDAFoodAPI = async (query) => {
  const apiKey = 'ZJyGJgT85ZT13ebeaHwrWnDJ6U4IcfhQyIbiI2tf'; // Insira sua chave de API aqui

  try {
    const response = await axios.get('https://api.nal.usda.gov/fdc/v1/foods/search', {
      params: {
        query: query,
        api_key: apiKey,
      },
    });

    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

export default testUSDAFoodAPI;
