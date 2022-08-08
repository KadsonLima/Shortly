import joi from 'joi';


export const signSchema = joi.object({

    email: joi.string().required().email(),

    password: joi.string().required()

});


export const signUpSchema = joi.object({

    name: joi.string().required(),

    email: joi.string().required().email(),

    password: joi.string().required(),

    confirmPassword:Joi.string().required().valid(Joi.ref('password'))


});




