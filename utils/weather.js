//ne declaram alte functii utilitare pe care o sa le folosim pentru a parsa momentam pentru viteza vantului si iconita
function windToKmPerHour(windPerMeters){
    //noi de la api primim viteza vantului in m/s si vrem sa o transformam in km/h
    return(windPerMeters*3600)/1000;
}

function getWeatherIcon(iconCode){
    //noi de la api primim un cod pentru iconita si ne folosim de url ul de la openweather dedicat iconitelor
    return `https://openweathermap.org/img/wn/${iconCode}@2x.png`
}