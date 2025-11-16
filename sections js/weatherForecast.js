//declaram functia pentru afisarea vremii pe urm 5 zile - apelul functiei se va face in alte fisiere
function displayWeatherForecast(city){
    //generam linkul catre openweather api catre care o sa facem call ul
    const forecastEndpoint=getForecastEndpoint(city);

    //inainte sa facem cererea catre server si sa afisam noile informatii selectam tag ul de html pentru afisarea prognozei si stergem orice ar fi inauntru
    let weatherForecastContainer=document.querySelector('.weather-forecast');
    weatherForecastContainer.innerHTML='';

    //facem call ul catre server
    fetch(forecastEndpoint)
        .then(response => response.json())
        .then((data)=>{
            //din datele venite de la server ne intereseaza doar list
            const{list}= data;

            //ne definim un obiect in care sa grupam predictiile venite de la server pe zile
            const daysMap={};

            //iteram prin predictiile venite de la server (list)
            list.forEach((element)=>{
                //extragem data predictiei pentru a putea face gruparea pe zile
                const {dt}=element;
                //folosind utilitarul creeat de noi parsam ziua curenta
                const day = getDayOfTheWeek(dt);
                //facem o verificare si daca deja avem ziua saptamanii in obiect ii adaugam o noua predictie
                if(daysMap[day]){
                    daysMap[day].push(element);
                } else{
                    //altfel daca nu exista ziua respectiva atunci o adaugam in obiect impreuna cu predictia
                    daysMap[day] =[element];
                }
            });

            //parcurgem cu for...in continutul obiectului daysMap - cheile din obiect sunt zilele saptamanii pentru care avem predictii
            for(key in daysMap){
                //afisam ziua curenta pe ecran
                weatherForecastContainer.innerHTML +=`<h3 class=text-primary>${key}</h3>`

                //pentru fiecare zi a saptamanii extragem predictiile asociate si iteram prin ele
                const days=daysMap[key];
                days.forEach((element)=>{
                    //extragem datele de interes:
                    const{dt,main,weather}=element;
                    //incepem sa parsam datele cu ajutorul functiilor utilitare create deja de noi
                    const hour=getHour(dt);
                    //rotunjim valoarea temperaturilor
                    const temperature=Math.round(main.temp);
                    const realfeel=Math.round(main['feels_like']);
                    //pentru a obtine descrierea trebuie sa avem grija ca weather este u array cu un singur element
                    const weatherDescription=weather[0].description;
                    //parsam iconita
                    const weatherIcon=getWeatherIcon(weather[0].icon);
                    
                    //afisam datele pe ecran
                    weatherForecastContainer.innerHTML+=`
                        <div class='weather-forecast-box d-flex v-100 justify-content-between align-items-center border-rounded p-3 mb-3'>
                            <div>${hour}</div>
                            <div><img src='${weatherIcon}' alt=''/></div>
                            <div class='fs-3'><strong>${temperature}°C</strong></div>
                            <div class='real-feel'>Real feel: <strong>${realfeel}</strong></div>
                        </div>
                    `
                });
            }
        });
}