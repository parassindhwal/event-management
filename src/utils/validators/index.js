const Joi = require('joi');

const registerSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string()
            .email({ tlds: { allow: false }})
            .required(),
    password: Joi.string().required()
})

const loginSchema = Joi.object({
    email: Joi.string()
            .email({ tlds: { allow: false }})
            .required(),
    password: Joi.string().required()
});

const eventDetailSchema = Joi.object({
    eventName: Joi.string().required(),
    date: Joi.string().required(),
    startTime : Joi.string().required(),
    description: Joi.string().required(),
});

const validateEventDetails = (req, res, next) => {
    const result = eventDetailSchema.validate(
        req.body,
        { abortEarly: false }
    );

    if(result.error) {
        return res.status(400).json({ 
            message: "Invalid request data",
            error: result.error.details.map((err) => err.message)
        });
    }

    next();
}
const validateRegistration = (req, res, next) => {
    const result = registerSchema.validate(
        req.body,
        { abortEarly: false }
    );

    if(result.error) {
        return res.status(400).json({ 
            message: "Invalid request data",
            error: result.error.details.map((err) => err.message)
        });
    }

    next();
}


const validateLogin = (req, res, next) => {
    const result = loginSchema.validate(
        req.body,
        { abortEarly: false }
    )

    if(result.error) {
        return res.status(404).json({
            message: "Invalid request data",
            error: result.error.details.map(err => err.message)
        })
    }

    next();
}

module.exports = {
    validateRegistration: validateRegistration,
    validateLogin: validateLogin,
    validateEventDetails: validateEventDetails
}