const key = 'ekQ3MbHgQqXnQlu5mnfqUAhDpMD3ULUO';
//Get weather information
const getWeather = async (id) => {
    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${id}?apikey=${key}`;

    //Fetching Data
    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];
};
//Get city information
const getCity = async (city) => {
    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`;

    //Fetching Data
    const response = await fetch(base + query);
    const data = await response.json();

    return (data[0]);
};

// getCity('manchester').then(data => {
// return getWeather(data.Key);
// }).then(data => 
//     console.log(data))
// .catch(err => {
//     console.log(err);
//     console.log('lolo');
// });

