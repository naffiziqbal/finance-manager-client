/* eslint-disable @typescript-eslint/no-explicit-any */
export const authenticateUser = async (uid: string, token: string) => {
    console.log(uid)
    const response = await fetch(`${import.meta.env.VITE_APP_SERVER}user/${uid}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
        },
    });
    const data = await response.json();
    return data;
}
