type Email = `${string}@${string}.${string}` | ''
type PhoneNumber = `+${string}` | string

export interface LoginRequest {
    email: string
    password: string
    rememberMe: boolean
}

export interface RegisterRequest {
    first_name: string
    second_name: string
    email: Email
    phone_number: PhoneNumber
    apartment_id: number | null
    password: string
}