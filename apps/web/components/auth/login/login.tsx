'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { LoginRequest } from '@shared/types/auth'

import styles from '../auth.module.css'

export const Login = () => {
    const router = useRouter()
    const [formData, setFormData] = useState<LoginRequest>({
        email: '',
        password: '',
        rememberMe: false,
    })
    const [error, setError] = useState('')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target

        setFormData( prevState => ({
            ...prevState, [name]: type === 'checkbox' ? checked : value,
        }))
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setError('')

        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/login`, {
                method: 'POST',
                credentials: 'include',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify( formData ),
            })

            const data = await res.json()

            if (res.ok) {
                router.push('/admin/dashboard')
            } else {
                setError(data.errors)
                console.error('Login failed:', error);
            }

        } catch (err) {
            setError('Something went wrong');
        }
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <h2>Welcome back</h2>
            <p className={styles.welcomeBackText}>
                Glad to see you again &#128588; <br/>
                Login to your account below
            </p>
            <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
            />
            <input
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                required
            />
            <label>
                <p>Remember me</p>
                <input
                    name="rememberMe"
                    type="checkbox"
                    checked={formData.rememberMe}
                    onChange={handleChange}
                />
            </label>
            <button type="submit">Sign in</button>
            <p>Don't have an account? <Link href='/register'>Sign up now!</Link></p>
        </form>
    )
}