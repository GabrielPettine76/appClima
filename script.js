let url ='https://api.openweathermap.org/data/2.5/weather';
let apyKey = miclave;
let kelvin = 273.15;


document.getElementById('botonBusqueda').addEventListener('click', () =>{
    const ciudad =document.getElementById('ciudadEntrada').value
    if(ciudad){
        fetchDatosDelClima(ciudad);
    }

});

//manejar api con url
function fetchDatosDelClima(ciudad){
    fetch(`${url}?q=${ciudad}&appid=${apyKey}`)
    .then(response => response.json())
    .then(response => mostrarDatosClima(response)) 
}


function mostrarDatosClima(data){
    const divDatosClima = document.getElementById('datosClima');
    divDatosClima.innerHTML='';

    const ciudadNombre = data.name;
    const paisNombre = data.sys.country;
    const temperatura = data.main.temp;
    const humedad = data.main.humidity;
    const descripccion = data.weather[0].description;
    const icono = data.weather[0].icon;

    const ciudadTitulo = document.createElement('h2');
    ciudadTitulo.textContent = `${ciudadNombre}, ${paisNombre}`;

    const temperaturaInfo = document.createElement('p');
    temperaturaInfo.textContent = `La temperatura es: ${Math.floor(temperatura-kelvin)} grados centigrados`;

    const iconoInfo = document.createElement('img');
    iconoInfo.src = `https://openweathermap.org/img/wn/${icono}@2x.png`;

    const humedadInfo = document.createElement('p');
    humedadInfo.textContent = `La humedad es: ${humedad}%`;

    const descripccionInfo = document.createElement('p');
    descripccionInfo.textContent = `La descripcion meteorológica es: ${descripccion}`;

    divDatosClima.appendChild(ciudadTitulo);
    divDatosClima.appendChild(temperaturaInfo);
    divDatosClima.appendChild(humedadInfo);
    divDatosClima.appendChild(iconoInfo);
    divDatosClima.appendChild(descripccionInfo);

}



