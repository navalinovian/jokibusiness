export async function payProdut(data) {
    try {
        var future = new Date();
        const response = await fetch(`http://localhost:3000/api/login`, {
            method: 'POST',
            mode: 'cors',
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            body: JSON.stringify({
                username: data.username,
                password: data.password,
            })
        })
        return await response;
    } catch (error) {
        return error
    }

}