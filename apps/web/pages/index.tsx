import { useEffect, useState } from 'react';

type User = { id: number; name: string };

export default function UsersPage() {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        fetch('http://localhost:3001/users')
            .then(r => r.json())
            .then((data: User[]) => setUsers(data))
            .catch(console.error);
    }, []);

    return (
        <main>
            <h1>Users</h1>
            <ul>
                {users.map(u => (
                    <li key={u.id}>{u.name}</li>
                ))}
            </ul>
        </main>
    );
}
