//ne definim 2 functii utilitare care o sa ne extraga dintr o data in format utc ziua si ora
function getDayOfTheWeek(dateInUTCFormat){
    //pentru a putea crea o data pornind de la o valoare in UTC este nevoie sa o inmultim cu 1000
    const date=new Date(dateInUTCFormat*1000)
    //extragem ziua saptamanii sub forma de index
    const dayIndex=date.getDay();
    let day;

    //pentru a mapa index ul zilei cu zilele in romana o sa folosim un switch
    switch(dayIndex){
        case 0:
            day='Duminica';
            break;
        case 1:
            day='Luni';
            break;
        case 2:
            day='Marti';
            break;
        case 3:
            day='Miercuri';
            break;
        case 4:
            day='Joi';
            break;
        case 5:
            day='Vineri';
            break;
        case 6:
            day='Sambata';
            break;
        default:
            //aruncam o eroare daca index ul nu este valid
            throw new Error('index ul trebuie sa fie intre 0 si 6')
    }
    return day;
}

function getHour(dateInUTCFormat){
    const date=new Date(dateInUTCFormat*1000);
    //extragem ora 
    let hour=date.getHours();
    
    //daca ora are o valoare mai mica de 10 ii adaugam un 0
    if (hour<10){
        hour=`0${hour}`;
    }

    //extragem minutele si la fel daca valoarea este mai mica de 10 ii adaugam un 0
    let minutes=date.getMinutes();
    if(minutes<10){
        minutes=`0${minutes}`;
    }

    //returnam ora sub formatul dorit
    return `${hour}:${minutes}`;
}