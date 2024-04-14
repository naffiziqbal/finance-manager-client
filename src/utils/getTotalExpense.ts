export const getTotalExpense = async (time: unknown, id: string) => {
    const res = await fetch(`${import.meta.env.VITE_APP_SERVER}service/total-expenses/${id}?time=${time}`);
    const data = await res.json();
    return data;
}
