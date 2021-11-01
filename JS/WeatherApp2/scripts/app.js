const cityForm = document.querySelector('form');
const cityFormPara = document.querySelector('form p');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('.time');
const icon = document.querySelector('.icon img');
const background = document.querySelector('body');

const updateUI = (data) => {
    // const cityDets = data.cityDets;
    // const weather = data.weather;

    //Destructure properties (Destructuring)
    const {cityDets, weather} = data;

    //Update details template
    details.innerHTML = `
        <h5 class="my-3">${cityDets.EnglishName}</h5>
        <div class="my-3">${weather.WeatherText}</div>
        <div class="display-4 my-4">
            <span>${weather.Temperature.Metric.Value}</span>
            <span>&deg;C</span>
        </div>
    `;

    //update night / day &icon images
    const iconSrc = `img/icons/${weather.WeatherIcon}.svg`;
    icon.setAttribute('src', iconSrc);

    //ternary operator
    // let timeSrc = weather.IsdayTime? 'img/night.svg' : 'img/day.svg' ;
    console.log(weather);
    if(weather.IsdayTime){
        timeSrc = 'img/day.svg';
    } else{
        timeSrc = 'img/night.svg';
    }
    time.setAttribute('src', timeSrc);

    //remove d-none if present
    if(card.classList.contains('d-none')){
        card.classList.remove('d-none');
        cityFormPara.classList.add('d-none');

    }
};

const updateCity = async (city) =>{

    const cityDets = await getCity(city);
    const weather = await getWeather(cityDets.Key);

    //When property name is same as value
    return {cityDets, weather}
    // return {
    //     city: cityDets,
    //     weather: weather
    // }
};

//Getting City name
cityForm.addEventListener('submit', e =>{
    //preventDefault action
    e.preventDefault();
    //get city value
    const city = cityForm.city.value.trim();
    cityForm.reset();

    updateCity(city)
    .then(data => updateUI(data))
    .catch(err => {
        cityFormPara.classList.remove('d-none');
        card.classList.add('d-none');
    });

    //set localStorage
    localStorage.setItem('city', city);
});

//Automatic most recent choice
if(localStorage.getItem('city')) {
    updateCity(localStorage.getItem('city'))
    .then(data => {
        updateUI(data)})
    .catch(err => {
        cityFormPara.classList.remove('d-none');
        card.classList.add('d-none');
    });
}
