import { useEffect, useState } from 'react';
import { fetchUsers } from '../api/userService';
import { useUserStore } from '../store/userStore';

interface User {
    id: number;
    name: string;
    email: string;
}

const ProfilePage = () => {
    const [users, setUsers] = useState<User[]>([]);
    const { deleteUser, updateUser, fetchUsers: loadUsers } = useUserStore();
    const [editingId, setEditingId] = useState<string | null>(null);
    const [ editedUser, setEditedUser ] = useState({ name: '', email: '' });

    useEffect(() => {
        loadUsers();
        const getUsers = async () => {
            const data = await fetchUsers();
            setUsers(data);
        };
        getUsers();
    }, [loadUsers]);

    const handleEdit = (user: any) => {
        setEditingId(user.id);
        setEditedUser({ name: user.name, email: user.email });
    };

    const handleUpdate = () => {
        if (editingId !==null) {
            updateUser(editingId, editedUser);
            setEditingId(null);
        }
    };



    return (
        <div>
            <h1>Registered Users</h1>
            {users.length === 0 ? (
                <p>No users found.</p>
            ) : (
                <ul>
                    {users.map((user) => (
                        <li key={user.id}>
                            {editingId === user.id ? (
                                <span>
                                    <input
                                        type="text"
                                        value={editedUser.name}
                                        onChange={(e) => setEditedUser({ ...editedUser, name: e.target.value })}
                                    />
                                    <input
                                        type="email"
                                        value={editedUser.email}
                                        onChange={(e) => setEditedUser({ ...editedUser, email: e.target.value })}
                                    />
                                    <button onClick={handleUpdate}>Update</button>
                                    </span>
                            ) : (
                                <span>
                                    <strong>{user.name}</strong> - {user.email}
                                    <button onClick={() => handleEdit(user)}>Edit</button>
                                    <button onClick={() => deleteUser(user.id)}>Delete</button>
                                </span>
                            )}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default ProfilePage;
