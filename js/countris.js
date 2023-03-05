const loadData =()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => {
        allData = data;
        displayData(data.slice(0, 9));
    })
}
const displayData = countries =>{
    // console.log(countries);
    const countryContainer = document.getElementById('countries-info')
     countryContainer.innerHTML ='';
    countries.slice(0, 9).forEach((country) =>{
        console.log(country);

        const div = document.createElement('div');
        div.innerHTML=`
        <div class="card w-full h-96 bg-base-100 shadow-2xl p-5">
        <figure><img src="${country.flags.png}" alt="Shoes" /></figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">${country.name.common}</h2>
          <p>Population : ${country.population}</p>
          <div class="card-actions justify-end">
            <button onclick="showDetails('${country.cca2}')" class="btn btn-primary">Details</button>
          </div>
        </div>
        </div>
        `
        countryContainer.appendChild(div);
    })
}
// const showDetails = (id) =>{
//     // console.log(id);
//     const url = `https://restcountries.com/v3.1/alpha/${id}`
//     .then(res => res.json())
//     .then(data => console.log(data))
// }

loadData();

const showAllDataTogether= () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => {
        allData = data;
        displayData(data);
    })
}