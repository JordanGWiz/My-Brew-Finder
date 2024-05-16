const searchForm = document.getElementById('search-form');

function searchHandler(event){
    event.preventDefault();
    const brewInput = document.getElementById('brew-input').value;
    const countryInput = document.getElementById('country-input').value;
    const cityInput = document.getElementById('city-input').value;

    if (!brewInput || !countryInput || !cityInput){
        alert("Please complete all inputs!");
        return;
    }
    else{
        localStorage.setItem('brewInput', brewInput);
        localStorage.setItem('countryInput', countryInput);
        localStorage.setItem('cityInput', cityInput);
    
        window.location.assign("./info.html");
    }

}

searchForm.addEventListener('submit', searchHandler);

// Get modal, button to open modal, and <span> that closes the modal
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}