// utils/listingSchema.js
const Joi = require("joi");

module.exports.listingSchema = Joi.object({
    title: Joi.string().required(),
    description: Joi.string().allow("").optional(),
    price: Joi.number().min(0).required(),
    location: Joi.string().required(),
    country: Joi.string().required(),
});
