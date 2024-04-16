/* eslint-disable @typescript-eslint/no-explicit-any */
export const updateUser = async (user: any, id: string) => {
    const res = await fetch(`${import.meta.env.VITE_APP_SERVER}user/update/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
    });
    const data = await res.json();
    return data;
}
