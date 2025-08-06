import { Request, Response } from 'express'
import * as authService from './auth.service'
import { loginSchema, registerSchema } from './auth.validation'

export const login = async (req: Request, res: Response) => {
    const { error } = loginSchema.validate(req.body)
    if (error) {
        res.status(400).json({ error: error.details[0].message })
        return
    }

    try {
        const { email, password, rememberMe } = req.body
        const user = await authService.login({ email, password, rememberMe })
        res.json(user)
    } catch (err: any) {
        res.status(400).json({ error: err.message })
    }
}

export const register = async (req: Request, res: Response) => {
    if (req.body.apartment_id) {
        req.body.apartment_id = Number(req.body.apartment_id)
    }
    const { error } = registerSchema.validate(req.body)
    if (error) {
        res.status(400).json({ error: error.details[0].message })
        return
    }
    console.log(req.body)
    try {
        const { first_name, second_name, email, phone_number, apartment_id, password } = req.body
        const user = await authService.register({ first_name, second_name, email, phone_number, apartment_id, password })
        res.json(user)
    } catch (err: any) {
        res.status(400).json({ error: err.message })
    }
}
