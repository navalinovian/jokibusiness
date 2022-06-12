import React, { useContext, useEffect, useState } from 'react'
import AuthContext from '../context/AuthProvider'
import { getAllInvoices } from '../frontendServices/PaymentService'

const Profile = () => {
    const { auth } = useContext(AuthContext)
    const [invoices, setInvoices] = useState([])
    useEffect(() => {
        getAllInvoices(auth).then((res) => {
            setInvoices(res)
        })
    })

    useEffect(() => {
        
    }, [invoices])

    return (
        <div style={{ marginTop: "5%", marginBottom: "5%", padding: "0 20%" }}>
            <h2>Invoices</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">Product Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Expired Date</th>
                        <th scope="col">Purchase Date</th>
                    </tr>
                </thead>
                <tbody>
                    {invoices.map((value) => {
                        const { id, Product, expiredDate, createdAt} = value
                    return<>
                        <tr>
                            <th scope="row">{id}</th>
                            <td>{Product.name}</td>
                            <td>${Product.price}</td>
                            <td>{expiredDate}</td>
                            <td>{createdAt}</td>
                        </tr>
                    </>
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Profile