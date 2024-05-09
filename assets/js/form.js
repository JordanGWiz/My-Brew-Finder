const searchForm = document.getElementById('#search-form');

function searchHandler(event){
    event.preventDefault();
    const brewInput = document.getElementById('#brew-input').value;
    const countryInput = document.getElementById('#country-input').value;
    const cityInput = document.getElementById('city-input').value;

    if (!brewInput || !countryInput || !cityInput){
        alert("Please complete all inputs!");
    }

    localStorage.setItem('brewInput', brewInput);
    localStorage.setItem('countryInput', countryInput);
    localStorage.setItem('cityInput', brewInput);

    window.location.replace("./info.html");
}

searchForm.addEventListener('submit', searchHandler);