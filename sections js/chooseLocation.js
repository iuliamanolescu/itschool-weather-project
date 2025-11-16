//selectam butoanele din drop down ul cu orase
const bucharestButton=document.querySelector('.dropdown-item.bucharest');
const timisoaraButton=document.querySelector('.dropdown-item.timisoara');
const oradeaButton=document.querySelector('.dropdown-item.oradea');
const aradButton=document.querySelector('.dropdown-item.arad');
const sibiuButton=document.querySelector('.dropdown-item.sibiu');

//definim o functie care sa ne schimbe orasul curent afisat pe ecran
function updateCurrentCityName(city){
    //selectam tag ul de html unde o sa updatam orasul curent
    const currentCity=document.querySelector('.current-city');
    currentCity.innerHTML=`${city}.`;
}
function updateWeather(cityName){
    //salvam in local storage optiunea aleasa
    localStorage.setItem('city',cityName);
    //afisam vremea curenta
    displayCurrentWeather(cityName);
    //apelam functia care ne schimba orasul curent de pe ecran
    updateCurrentCityName(cityName);
    //reafisam si prognoza pentru urmatoarele 5 zile
    displayWeatherForecast(cityName);
}
//adaugam event listenere pe butoane pentru a schimba datele de pe vreme
bucharestButton.addEventListener('click',function(){
    updateWeather('București');
});

timisoaraButton.addEventListener('click',function(){
    updateWeather('Timișoara');
});

oradeaButton.addEventListener('click',function(){
     updateWeather('Oradea');
});

aradButton.addEventListener('click',function(){
     updateWeather('Arad');
});

sibiuButton.addEventListener('click',function(){
     updateWeather('Sibiu');
});

