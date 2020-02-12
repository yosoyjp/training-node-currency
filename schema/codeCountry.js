const joi = require('joi');


exports.codeCountrySchema = joi.object({
    code: joi. string(),
});