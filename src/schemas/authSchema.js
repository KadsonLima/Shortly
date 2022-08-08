import joi from 'joi';


export const signSchema = joi.object({

    email: joi.string().required().email(),

    password: joi.string().required()

});


export const signUpSchema = joi.object({

    name: joi.string().required(),

    email: joi.string().required().email(),

    password: joi.string().required(),

    confirmPassword: joi.ref('password').required()

});


const authorizationSchema = joi.object({

    

});


