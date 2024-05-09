const resultBody = document.getElementById("result-content");

function apiTest(event){
let API_KEY ="Bearer 2H2SMlwuCiG_ENk1cA4v9BPCZ16BNmEY7esysJNeIrqHdSWYGzwsG0Dx62IdJcXmvSU57_3SJRnUGt7ubLlmLcvHDnvBuEPbbX_3jWTklQBXPL-it0JY6vSAP5c5ZnYx"
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: API_KEY
        }

      };
      
      fetch('https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=NYC&sort_by=best_match&limit=20', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
}

window.addEventListener('load', apiTest);