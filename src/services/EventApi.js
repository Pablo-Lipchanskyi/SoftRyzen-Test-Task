import axios from "axios";

axios.defaults.baseURL = 'https://64c8efdcb2980cec85c19d84.mockapi.io'

export const fetchEvents = async () => {
    try {
        const response = await axios.get('/events');
        return response.data;
    } catch (error) {
        console.error('Произошла ошибка при обновлении', error);
        throw error;
    }
}

export const updateEvents = async (id, followers) => {
  const strId = id.toString();
  try {
    const response = await axios.put(`/events/${strId}`, { followers });
    return response.data;
  } catch (error) {
    console.error('Произошла ошибка при обновлении', error);
    throw error;
  }
};