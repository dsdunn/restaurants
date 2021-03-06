let key = process.env.REACT_APP_API_KEY;

const fetchData = async (endpoint, method = 'GET') => {
  let response = await fetch(`https://code-challenge.spectrumtoolbox.com/api/${endpoint}`, {
    headers: {
      'Authorization': `Api-Key ${key}`
    }
  });
  return await response.json();
}

export const getRestaurants = () => {
  return fetchData('restaurants');
};