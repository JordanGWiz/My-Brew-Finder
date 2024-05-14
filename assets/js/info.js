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
      
      fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/MphfKkYFEe0BDQ6hZ0A5fA`, options)
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
              console.log(response.json());
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
                  title.textContent = data.name;

                  let title = document.createElement('a');
                  if(data.attributes.menu_url){
                    title.setAttribute('href', data.attributes.menu_url);
                  }
                  else{
                    title.setAttribute('href', data.url);
                  }


                  let address = document.createElement('p');
                  if (data.location.display_address){
                    address.textContent += `${data.location.display_address}\n\n`;
                  }
                  else{
                    address.textContent += `${cityInput}, ${countryInput}\n\n`;
                  }

                  if (data.rating){
                    address.textContent += `Rating : ${data.rating}/5`;
                  }

                  descriptionBody.appendChild(title);
                  descriptionBody.appendChild(address);
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

let cityName = localStorage.getItem('cityInput');
let countryName = localStorage.getItem('countryInput');
let resultInfo = document.getElementById('result-content');
const parcer = new DOMParser();

function fetchCityInfo() {
  const apiUrlCity = `https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${cityName}&format=json`;
  const apiUrlCountry = `https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${countryName}&format=json`;
  const apiUrlInfo = `https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${category}&format=json`;

  let cardBody = document.createElement('div');
  cardBody.setAttribute('class', 'card');
  let funFacts = document.createElement('div');
  funFacts.setAttribute('class', 'container');
  let title = document.createElement('h4');
  title.textContent = 'Fun Facts!'
  funFacts.appendChild(title);
  cardBody.appendChild(funFacts);
  resultInfo.appendChild(cardBody);


  fetch(apiUrlInfo)
  .then(response => { 
    return response.json() })
  .then(data => {
    console.log(data)
    let snippet = data.query.search[0].snippet;
    const info = parcer.parseFromString(snippet, 'text/html');
    funFacts.appendChild(info.body);
    let learnMore1 = document.createElement('a');
      let linkText1 = document.createTextNode('Learn more...');
      learnMore1.appendChild(linkText1);
      learnMore1.title = "Learn more...";
      learnMore1.href = `https://en.wikipedia.org/wiki/${category}` 
      funFacts.appendChild(learnMore1);
    
  })
  .catch(err => { 
    console.error(err) });
  
  fetch(apiUrlCountry)
    .then(response => { 
      return response.json() })
    .then(data => {
      console.log(data)
      let snippet = data.query.search[0].snippet;
      const info = parcer.parseFromString(snippet, 'text/html');
      funFacts.appendChild(info.body);
      let learnMore2 = document.createElement('a');
      let linkText2 = document.createTextNode('Learn more...');
      learnMore2.appendChild(linkText2);
      learnMore2.title = "Learn more...";
      learnMore2.href = `https://en.wikipedia.org/wiki/${countryName}` 
      funFacts.appendChild(learnMore2);
      
    })
    .catch(err => { 
      console.error(err) });
      
    fetch(apiUrlCity)
      .then(response => { 
        return response.json() })
      .then(data => {
        console.log(data)
        let snippet = data.query.search[0].snippet;
        const info = parcer.parseFromString(snippet, 'text/html');
        funFacts.appendChild(info.body);
        let learnMore3 = document.createElement('a');
        let linkText3 = document.createTextNode('Learn more...');
        learnMore3.appendChild(linkText3);
        learnMore3.title = "Learn more...";
        learnMore3.href = `https://en.wikipedia.org/wiki/${cityName}` 
        funFacts.appendChild(learnMore3);
        
      })
      .catch(err => { 
        console.error(err) });
        

}                     

window.addEventListener('load', fetchCityInfo);


