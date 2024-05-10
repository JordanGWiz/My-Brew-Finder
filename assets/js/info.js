const resultBody = document.getElementById("result-content");

let category = localStorage.getItem('brewInput');
let categoryQuery;
let cityInput = localStorage.getItem('cityInput');
let countryInput = localStorage.getItem('countryInput');
let locationQuery = `${cityInput}, ${countryInput}`;


const searchForm = document.getElementById('search-form');


function updateStorageHandler(){
  category = localStorage.getItem('brewInput');
  cityInput = localStorage.getItem('cityInput');
  countryInput = localStorage.getItem('countryInput');
}

function categoryHandler(){
  if (category === 'Coffee'){
    categoryQuery = 'Coffee & Tea';
}
  else{
    categoryQuery = 'Beer, Wine & Spirits';
}
}

function yelpQuery(event){
  let API_KEY ="Bearer 2H2SMlwuCiG_ENk1cA4v9BPCZ16BNmEY7esysJNeIrqHdSWYGzwsG0Dx62IdJcXmvSU57_3SJRnUGt7ubLlmLcvHDnvBuEPbbX_3jWTklQBXPL-it0JY6vSAP5c5ZnYx";
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: API_KEY
        }

      };
      
      fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=${locationQuery}&term=${categoryQuery}&sort_by=rating&limit=3`, options)
        .then(response => {
          if (!response.ok) {
            throw response.json();
          }
          return response.json();
        })
        .then(response => {console.log(response)
            if(!response.businesses.length){
              console.log("No business found!");
              cardBody.textContent="No business found! Try again with a different input!"
            }
            else{
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
                  let title = document.createElement('a');
                  title.textContent = data.name;
                  if(data.attributes.menu_url){
                    title.setAttribute('href', data.attributes.menu_url);
                  }
                  else{
                    title.setAttribute('href', data.url);
                  }
                  
                  descriptionBody.appendChild(title);
                  cardBody.appendChild(descriptionBody);
                  resultBody.appendChild(cardBody);
          }
      }
        })
        .catch(err => console.error(err));
}

function searchHandler(event){
    event.preventDefault();
    resultBody.innerHTML = "";
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
    }
    updateStorageHandler();
    categoryHandler();
    yelpQuery();

}


categoryHandler();
yelpQuery();
searchForm.addEventListener('submit', searchHandler);
