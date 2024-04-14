export const getAllIncome = async (id: string) => {
    const res = await fetch(`${import.meta.env.VITE_APP_SERVER}service/services/${id}?type=income`);
    const data = await res.json();
    return data;
}
