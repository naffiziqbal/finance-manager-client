/* eslint-disable @typescript-eslint/no-explicit-any */
export const addRecord = async (data: any) => {
const res = await fetch(`${import.meta.env.VITE_APP_SERVER}service/create-service`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    const response = await res.json();
    return response;
}
