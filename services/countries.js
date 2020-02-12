const client = require('graphql-client')({
    url: 'https://countries.trevorblades.com/'
});


exports.getCurrency = (code) => {
    return new Promise((resolve, reject) => {
        client.query(`
            query{
                country(code:"${code}"){
                    currency
                }
            }
        `)
            .then(function (body) {
                resolve(body.data.country.currency);
            })
            .catch(function (err) {
                console.log(err.message);
                reject();
            })
    })
}