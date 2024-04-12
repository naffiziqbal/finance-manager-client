export const getAllIncome = async () => {
    const res = await fetch(`${import.meta.env.VITE_APP_SERVER}service/services?type=income`);
    const data = await res.json();
    return data;
}
