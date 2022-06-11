import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { payProdut } from '../frontendServices/PaymentService';
import './PaymentStyle.css'
const PaymentGateway = () => {
    const [paymentSuccess, setPaymentSuccess] = useState(false);
    const [paymentNotSuccess, setPaymentNotSuccess] = useState(false);
    const { state } = useLocation();
    let navigate = useNavigate();
    useEffect(() => {
    }, [])

    const handlePay = async () => {
        const payDetails = {
            productId: state.id
        }
        console.log(payDetails);
        const res = await payProdut(payDetails)
        if (res.status !== 500) {
            setPaymentSuccess(true)
        } else {
            setPaymentNotSuccess(true)
        }
    }

    useEffect(() => {
        const timeId = setTimeout(() => {
            setPaymentSuccess(false);
            setPaymentNotSuccess(false);
        }, 5000)

        return () => {
            clearTimeout(timeId)
        }
    }, [paymentSuccess, paymentNotSuccess])

    useEffect(() => {
        if (paymentSuccess) {
            console.log(paymentSuccess);
            const timeId = setTimeout(() => {
                navigate('/')
            }, 4999)    
            return () => {
                clearTimeout(timeId)
            }
        }
    }, [paymentSuccess])


    return (
        <div>
            <div className="container p-0">
                <div className="card px-4">
                    <p className="h8 py-3">Payment Details</p>
                    <div className="row gx-3">
                        <div className="col-12">
                            <div className="d-flex flex-column">
                                <p className="text mb-1">Person Name</p>
                                <input className="form-control mb-3" type="text" placeholder="Name" />
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="d-flex flex-column">
                                <p className="text mb-1">Card Number</p>
                                <input className="form-control mb-3" type="text" placeholder="1234 5678 435678" />
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="d-flex flex-column">
                                <p className="text mb-1">Expiry</p>
                                <input className="form-control mb-3" type="text" placeholder="MM/YYYY" />
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="d-flex flex-column">
                                <p className="text mb-1">CVV/CVC</p>
                                <input className="form-control mb-3 pt-2 " type="password" placeholder="***" />
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="btn btn-primary mb-3" onClick={() => handlePay()}>
                                <span className="ps-3">Pay ${state.price}</span>
                                <span className="fas fa-arrow-right"></span>
                            </div>
                        </div>
                        {paymentSuccess ? <div className="alert alert-warning alert-dismissible fade show" role="alert">
                            <strong>Success!</strong> You will be redirect in home in 5 second.
                            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div> : null}
                        {paymentNotSuccess ? <div className="alert alert-danger alert-dismissible fade show" role="alert">
                            <strong>Payment Failed!</strong> an error was occured.
                            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div> : null}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PaymentGateway