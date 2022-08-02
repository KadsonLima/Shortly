import joi from 'joi';


const signSchema = joi.object({

    name: joi.string().required(),

    email: joi.string().required().email(),

    password: joi.string().required()

});


const signUpSchema = joi.object({

    name: joi.string().required(),

    email: joi.string().required().email(),

    password: joi.string().required(),

    confirmPassword: joi.ref('password')

});



export default {authSchema, signUpSchema};