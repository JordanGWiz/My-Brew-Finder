let cityName = localStorage.getItem("cityInput");
let countryName = localStorage.getItem("countryInput");
let brewInput = localStorage.getItem("brewInput");
let resultInfo = document.getElementById("result-info");
const parcer = new DOMParser();

function fetchCityInfo() {
  const apiUrlCity = `https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${cityName}&format=json`;
  const apiUrlCountry = `https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${countryName}&format=json`;
  const apiUrlInfo = `https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${category}&format=json`;

  let cardBody = document.createElement("div");
  cardBody.setAttribute("class", "card");
  let funFacts = document.createElement("div");
  funFacts.setAttribute("class", "container");
  let title = document.createElement("h4");
  title.textContent = "Fun Facts!";
  funFacts.appendChild(title);
  cardBody.appendChild(funFacts);
  resultInfo.appendChild(cardBody);

  fetch(apiUrlInfo)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      let snippet = data.query.search[0].snippet;
      const info = parcer.parseFromString(snippet, "text/html");
      funFacts.appendChild(info.body);
      let learnMore1 = document.createElement("a");
      let linkText1 = document.createTextNode("Learn more...");
      learnMore1.appendChild(linkText1);
      learnMore1.title = "Learn more...";
      learnMore1.href = `https://en.wikipedia.org/wiki/${category}`;
      funFacts.appendChild(learnMore1);
    })
    .catch((err) => {
      console.error(err);
    });

  fetch(apiUrlCountry)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      let snippet = data.query.search[0].snippet;
      const info = parcer.parseFromString(snippet, "text/html");
      funFacts.appendChild(info.body);
      let learnMore2 = document.createElement("a");
      let linkText2 = document.createTextNode("Learn more...");
      learnMore2.appendChild(linkText2);
      learnMore2.title = "Learn more...";
      learnMore2.href = `https://en.wikipedia.org/wiki/${countryName}`;
      funFacts.appendChild(learnMore2);
    })
    .catch((err) => {
      console.error(err);
    });

  fetch(apiUrlCity)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      let snippet = data.query.search[0].snippet;
      const info = parcer.parseFromString(snippet, "text/html");
      funFacts.appendChild(info.body);
      let learnMore3 = document.createElement("a");
      let linkText3 = document.createTextNode("Learn more...");
      learnMore3.appendChild(linkText3);
      learnMore3.title = "Learn more...";
      learnMore3.href = `https://en.wikipedia.org/wiki/${cityName}`;
      funFacts.appendChild(learnMore3);
    })
    .catch((err) => {
      console.error(err);
    });
}

window.addEventListener("load", fetchCityInfo);

let brew = document.getElementById("brew");
brew.textContent = brewInput;
let city = document.getElementById("city");
city.textContent = cityName;
let country = document.getElementById("country");
country.textContent = countryName;
