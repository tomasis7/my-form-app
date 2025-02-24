export const registerUser = async (userData: any) => {
    const response = await fetch("https://jspnplaceholder.typicode.com/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
    });
    return response.json();
};

export const fetchUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    return response.json();
};

