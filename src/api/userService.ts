interface UserData {
    name: string;
    email: string;
}

export const registerUser = async (userData: UserData) => {
    const response = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
    });
    return response.json();
};

export const fetchUsers = async () => {
    const response = await fetch("http://localhost:3000/users");
    return response.json();
};

