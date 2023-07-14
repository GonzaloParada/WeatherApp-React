const API_WEATHER = `http://api.weatherapi.com/v1/current.json?key=${
  import.meta.env.VITE_API_KEY
}&q=`;

export const fetchApi = async (city) => {
  const res = await fetch(`${API_WEATHER}${city}`);
  return res;
};
