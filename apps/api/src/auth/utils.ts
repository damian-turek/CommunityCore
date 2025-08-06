import jwt from 'jsonwebtoken'

export const generateToken = (userId: number, email: string, rememberMe: boolean) => {
    return jwt.sign({ id: userId, email: email }, process.env.JWT_SECRET!, { expiresIn: rememberMe? '7d' : '1h' })
}

//TODO: hash passwords during login and registration