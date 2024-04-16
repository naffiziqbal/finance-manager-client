export const deleteService = async (id: string) => {
    const res = await fetch(`${import.meta.env.VITE_APP_SERVER}service/delete/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
    });
    const data = await res.json();
    return data;
}
