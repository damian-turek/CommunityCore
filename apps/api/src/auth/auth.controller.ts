import { Request, Response } from 'express'
import * as authService from './auth.service'
import { loginSchema } from './auth.validation'

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
