import { LoginRequest, RegisterRequest } from '@shared/types/auth'
import { PrismaClient } from '../../../packages/db/generated/prisma'
import { generateToken } from './utils'

export const login = async( { email, password, rememberMe }: LoginRequest ) => {
    const prisma = new PrismaClient()

    const user = await prisma.users.findFirst({
        where: { email }
    })

    if (!user) throw new Error(`User does not exist`)

    const passwordValid = password === user.password
    if (!passwordValid) throw new Error(`Wrong password`)

    return generateToken(user.id, user.email, rememberMe)
}

export const register = async( { first_name, second_name, email, phone_number, apartment_id, password }: RegisterRequest ) => {
    const prisma = new PrismaClient()

    const existingEmail = await prisma.users.findFirst({
        where: { email }
    })

    if (existingEmail) throw new Error('User with this email already exists')

    // TODO: check if flat is free and exist and validate apartment id

    try {
        const newUser = await prisma.users.create({
            data: {
                first_name,
                second_name,
                email,
                phone_number,
                apartment_id,
                password,
                role: 'user'
            }
        })
        console.log('User created:', newUser)
        return generateToken(newUser.id, newUser.email, false)
    } catch (error) {
        console.error('Error creating user:', error)
        console.log(typeof apartment_id)
    }
}