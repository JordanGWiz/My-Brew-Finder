
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

const resultBody = document.getElementById("result-content");

const category = localStorage.getItem('brewInput');
let categoryQuery;

if (category === 'coffee'){
    categoryQuery = 'Coffee & Tea';
}
else{
    categoryQuery = 'Beer, Wine & Spirits'
}

function apiTest(event){
let API_KEY ="Bearer 2H2SMlwuCiG_ENk1cA4v9BPCZ16BNmEY7esysJNeIrqHdSWYGzwsG0Dx62IdJcXmvSU57_3SJRnUGt7ubLlmLcvHDnvBuEPbbX_3jWTklQBXPL-it0JY6vSAP5c5ZnYx"
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: API_KEY
        }

      };
      
      fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=NYC&category=${categoryQuery}&sort_by=best_match&limit=3`, options)
        .then(response => response.json())
        .then(response => {console.log(response)
            console.log(response.businesses[0].image_url);
            for ( let data of response.businesses){
                let imageDate = new Image();
                imageDate.src = data.image_url;
                imageDate.width = 200;
                imageDate.height = 200;
                let cardBody = document.createElement('div');
                cardBody.setAttribute('class', 'card');
                cardBody.appendChild(imageDate);
                let descriptionBody = document.createElement('div');
                descriptionBody.setAttribute('class', 'container');
                let title = document.createElement('h4');
                title.textContent = data.name;
                descriptionBody.appendChild(title);
                cardBody.appendChild(descriptionBody);
                resultBody.append(cardBody);
        }
        })
        .catch(err => console.error(err));
}

window.addEventListener('load', apiTest);

