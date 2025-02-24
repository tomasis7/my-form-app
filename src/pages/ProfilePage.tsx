import { useEffect, useState } from 'react';
import { fetchUsers } from '../api/userService';

const ProfilePage = () => {
    interface User {
        id: number;
        name: string;
        email: string;
    }

    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        const getUsers = async () => {
            const data = await fetchUsers();
            setUsers(data);
        };
        getUsers();
    }, []);

    return (
        <div>
            <h1>Registered Users</h1>
            {users.length === 0 ? (
                <p>Loading...</p>
            ) : (
                <ul>
                    {users.map((user) => (
                        <li key={user.id}>
                            <strong>{user.name}</strong> - {user.email}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default ProfilePage;
