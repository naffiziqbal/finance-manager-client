export const getMonthlyExpensesByCategory = async (id: string) => {
    const res = await fetch(`${import.meta.env.VITE_APP_SERVER}service/category-amount/${id}?type=expenses`);
    const data = await res.json();
    return data;
}
