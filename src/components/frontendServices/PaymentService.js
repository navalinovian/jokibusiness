export async function payProdut(data) {
    try {
        var future = new Date();
        const response = await fetch(`http://localhost:3000/api/pay`, {
            method: 'POST',
            mode: 'cors',
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            body: JSON.stringify({
                userId: data.userId,
                productId: data.productId,
                expiredDate:future.setDate(future.getDate() + 30)
            })
        })
        return await response;
    } catch (error) {
        return error
    }

}

export async function getAllInvoices(data) {
    try{
        const response = await fetch(`http://localhost:3000/api/invoices/${data.user.id}`);
        // console.log(await response.json());
        return await response.json();
    }catch(error) {
        return error
    }
    
}