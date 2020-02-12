const express = require('express');
const router = express.Router();

const validator = require('../middleware/validations');
const { codeCountrySchema } = require('../schema/codeCountry')
const { getCurrency } = require('../services/countries');
const { getUSD } = require('../services/currency');

router.get('/:moneda', (req, res) => {
	getCurrency(req.params.moneda)
		.then((codeCurrency) => getResult(codeCurrency, res))
		.catch(() => {
			res.json({ error: "Error obteniendo el codigo de moneda del pais" })
		})

});

router.post('/', validator(codeCountrySchema, 'body'), (req, res) => {
	getCurrency(req.body.code)
		.then((codeCurrency) => getResult(codeCurrency, res))
		.catch(() => {
			res.json({ error: "Error obteniendo el codigo de moneda del pais" })
		})
});


function getResult(codeCurrency, res) {
	getUSD(codeCurrency)
		.then((mountValue) => {
			res.json({ currency: codeCurrency, mountUsd: mountValue });
		})
		.catch(() => {
			res.json({ error: "Error obteniendo el valor en dolares de la moneda" })
		});
}

module.exports = router;
