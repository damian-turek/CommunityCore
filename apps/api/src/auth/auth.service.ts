import { LoginRequest } from '@shared/types/auth'
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