//ne selectam tag ul de html care contine orasul curent si impreuna cu cheia din local storage o sa setam ce folosim
const currentCityTag=document.querySelector('.current-city');
let currentCityFromLocatStorage=localStorage.getItem('city');

//daca nu avem un oras salvat in localstorage atunci salvam ca default Bucuresti
if(!currentCityFromLocatStorage){
    localStorage.setItem('city','București');
    currentCityFromLocatStorage='București';
}

//actualizam pe ecran numele orasului
currentCityTag.innerHTML=currentCityFromLocatStorage;

//afisam vremea curenta pt Bucuresti
displayCurrentWeather(currentCityFromLocatStorage);

//afisam prognoza pt urm 5 zile
displayWeatherForecast(currentCityFromLocatStorage);

const scrollToTopButton = document.querySelector(".scroll-to-top");
scrollToTopButton.addEventListener("click", function () {

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

document.addEventListener("scroll", function () {
  if (window.scrollY > window.innerHeight/2) {
    scrollToTopButton.style.visibility = "visible";
  } else {
    scrollToTopButton.style.visibility = "hidden";
  }
});