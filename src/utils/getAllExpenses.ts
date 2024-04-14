export const getAllExpenses = async (id: string) => {
    const res = await fetch(`${import.meta.env.VITE_APP_SERVER}service/services/${id}?type=expenses`);
    const data = await res.json();
    return data;
}
