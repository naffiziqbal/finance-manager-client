export const getAllExpenses = async () => {
    const res = await fetch(`${import.meta.env.VITE_APP_SERVER}service/services?type=expenses`);
    const data = await res.json();
    return data;
}
