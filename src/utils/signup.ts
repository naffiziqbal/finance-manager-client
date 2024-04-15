export const signup = async (data: any) => {
    const res = await fetch("https://finance-management-blond.vercel.app/api/v1/user/create-user", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    const result = await res.json();
    return result;
}
