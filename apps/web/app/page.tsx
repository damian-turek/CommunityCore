'use client'

import { useEffect, useState } from 'react'

import { Header, Hero, Services } from '../components'

import '../styles/global.css';

type User = { 
    id: number
    name: string
}

export default function UsersPage() {
    const [users, setUsers] = useState<User[]>([])

    useEffect(() => {
        fetch('http://localhost:3001/users')
            .then(r => r.json())
            .then((data: User[]) => setUsers(data))
            .catch(console.error)
    }, [])

    return (
        <>
            <Header/>
            <main>
                <Hero/>
                <Services/>
                <h1>Users</h1>
                <ul>
                    {users.map(u => (
                        <li key={u.id}>{u.name}</li>
                    ))}
                </ul>
            </main>
        </>
    )
}
