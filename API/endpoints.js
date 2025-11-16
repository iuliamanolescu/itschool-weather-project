const API_KEY='388a6d706edad707bf9979becd3dd254';
//aceste api keyuri nu ar trebui stocate in repo si in format text deoarece nu este secure
//api key urile de preferat trebuie sa fie stocate pe un server, insa fiindca api ul de la openwheather este gratuit momentan este ok sa il lasam asa

//definim endpoint urile catre server: 
//pentru end point ul de vreme curenta trebuie sa inseram dinamic parametrul city - ne definim in functie un parametru
function getCuttentWeatherEndpoint(city) {
    //api ul de la open weather are nevoie de urmatorii query param:
    //city
    //lang - noi o sa trimitem ro
    //units - metric, pentru a primi rezultatele in grade celsius
    return `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ro&units=metric&appid=${API_KEY}`;
}

function getForecastEndpoint(city){
    return `https://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=ro&units=metric&appid=${API_KEY}`;
}