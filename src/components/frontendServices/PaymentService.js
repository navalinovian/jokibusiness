export async function payProdut(data) {
    try {
        var future = new Date();
        const response = await fetch(`http://localhost:3000/api/pay`, {
            method: 'POST',
            mode: 'cors',
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            body: JSON.stringify({
                userId: "33c46157-a02f-41de-84e4-0ca0514887d1",
                productId: data.productId,
                expiredDate:future.setDate(future.getDate() + 30)
            })
        })
        return await response;
    } catch (error) {
        return error
    }

}