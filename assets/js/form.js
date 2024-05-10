
document.getElementById('country-input').onchange = function() {
  document.getElementById('city-input').disabled = false;
  document.getElementById('city-input').innerHTML = "";
  let opt0 = document.createElement('option');
  let opt1 = document.createElement('option');
  let opt2 = document.createElement('option');
  let opt3 = document.createElement('option');
  if (this.value == 'united-states') {
    opt0.textContent = 'Select a City...';
    opt1.textContent = 'Los Angeles';
    opt2.textContent = 'New York';
    opt3.textContent = 'Austin';
    document.getElementById('city-input').appendChild(opt0);
    document.getElementById('city-input').appendChild(opt1);
    document.getElementById('city-input').appendChild(opt2);
    document.getElementById('city-input').appendChild(opt3);
  } else if (this.value == 'germany') {
    opt0.textContent = 'Select a City...';
    opt1.textContent = 'Berlin';
    opt2.textContent = 'Munich';
    opt3.textContent = 'Frankfurt';
    document.getElementById('city-input').appendChild(opt0);
    document.getElementById('city-input').appendChild(opt1);
    document.getElementById('city-input').appendChild(opt2);
    document.getElementById('city-input').appendChild(opt3);
  } else if (this.value == 'ireland') {
    opt0.textContent = 'Select a City...';
    opt1.textContent = 'Dublin';
    opt2.textContent = 'Belfast';
    opt3.textContent = 'Cork';
    document.getElementById('city-input').appendChild(opt0);
    document.getElementById('city-input').appendChild(opt1);
    document.getElementById('city-input').appendChild(opt2);
    document.getElementById('city-input').appendChild(opt3);
  }
};

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
    
        window.location.replace("./info.html");
    }

}

searchForm.addEventListener('submit', searchHandler);

