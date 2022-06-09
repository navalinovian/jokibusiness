export async function getAllProducts() {
    try{
        const response = await fetch('http://localhost:3000/api/product');
        // console.log(await response.json());
        return await response.json();
    }catch(error) {
        return [];
    }
    
}