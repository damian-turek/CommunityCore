import Joi from 'joi'

export const loginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(3).required(),
    rememberMe: Joi.boolean(),
})

export const registerSchema = Joi.object({
    first_name: Joi.string().required(),
    second_name: Joi.string().required(),
    email: Joi.string().email().required(),
    phone_number: Joi.string().required(),
    apartment_id: Joi.number().required(),
    password: Joi.string().min(3).required(),
})