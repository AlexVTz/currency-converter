const API_KEY = "7f35eb53625c8b18cbff";

export function getCurrencies() {
    return fetch(`https://free.currconv.com/api/v7/currencies?apiKey=${API_KEY}`)
        .then(function (response) {
            return response.json();
        })
        .then(function (myJson) {
            //console.log(myJson);
            return myJson;
        });
}

export function getCurrencyValue(query) {
    return fetch(`https://free.currconv.com/api/v7/convert?apiKey=${API_KEY}&q=${query}&compact=y`)
        .then(function (response) {
            return response.json();
        })
        .then(function (myJson) {
            return myJson;
        });
}

export function getCountriesList() {
    return fetch(`https://free.currconv.com/api/v7/countries?apiKey=${API_KEY}`)
        .then(function (response) {
            return response.json();
        })
        .then(function (myJson) {
            return myJson;
        });
}