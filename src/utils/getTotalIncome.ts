export const getTotalIncome = async (time: unknown) => {
    const res = await fetch(`${import.meta.env.VITE_APP_SERVER}service/total-income?time=${time}`);
    const data = await res.json();
    return data;
}
