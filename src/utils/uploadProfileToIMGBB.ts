/* eslint-disable @typescript-eslint/no-explicit-any */
export const handleImageUpload = async (image: any) => {
 
    const response = await fetch(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_APP_IMGBB_API_KEY}`, {
        method: "POST",
        body: image,
    });
    const data = await response.json();
    return data;
}
