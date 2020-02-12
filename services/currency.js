const axios = require('axios');


exports.getUSD = (codeCurrency) => {
    return new Promise( (resolve, reject) => {
        axios.get('https://api.exchangerate-api.com/v4/latest/'+codeCurrency)
        .then(function (response) {
            // handle success

            resolve(response.data.rates.USD);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .finally(function () {
            // always executed
        });
    });
}