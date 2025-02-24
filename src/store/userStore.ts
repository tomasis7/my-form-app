import { create } from 'zustand';

interface User {
    id: string;
    name: string;
    email: string;
    password: string;
}

interface UserState {
    users: User[];
    addUser: (user: User) => void;
    updateUser: (id: string, updatedUser: Partial<User>) => void;
    deleteUser: (id: string) => void;
    loadUsers: () => void;
}

export const useUserStore = create<UserState>((set) => ({
    users: JSON.parse(localStorage.getItem("users") || "[]"),

    addUser: (user) =>
        set((state) => {
        const newUsers = [...state.users, user];
        localStorage.setItem("users", JSON.stringify(newUsers));
        return { users: newUsers };
    }),
    updateUser: (id, updatedUser) =>
        set((state) => {
        const newUsers = state.users.map((user) =>
            user.id === id ? { ...user, ...updatedUser } : user
        );
        localStorage.setItem("users", JSON.stringify(newUsers));
        return { users: newUsers };
    }),
    deleteUser: (id) =>
        set((state) => {
        const newUsers = state.users.filter((user) => user.id !== id);
        localStorage.setItem("users", JSON.stringify(newUsers));
        return { users: newUsers };
    }),
    loadUsers: () => {
        const storedUsers = JSON.parse(localStorage.getItem("users") || "[]");
        set({ users: storedUsers });
    }
}));