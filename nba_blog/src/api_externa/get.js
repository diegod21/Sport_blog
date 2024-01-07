import axios from 'axios';

async function getSeason() {
    
const options = {
    method: 'GET',
    url: 'https://nba-schedule.p.rapidapi.com/schedule',
    params: {date: '23-10-2023'},
    headers: {
      'X-RapidAPI-Key': '972c7549d8msh7c441675995bb13p16fd41jsn9bd8259b1dc5',
      'X-RapidAPI-Host': 'nba-schedule.p.rapidapi.com'
    }
  };
  
  try {
      const response = await axios.request(options);
      console.log(response.data);
  } catch (error) {
      console.error(error);
  }
}

export default async function () {
    try {
        return await getSeason();
    } catch (error) {
        // Manipular o erro ou logar conforme necessário
        console.error('Erro na função de exportação:', error.message);
        return null; // ou outro valor padrão
    }
}
