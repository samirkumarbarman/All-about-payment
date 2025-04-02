import { createPaymentIntent } from "../services/paymentServices.js";

export const createPayment = async (req, res) =>{
    try {
        const { payment_method, amount } = req.body;
        const payment = await createPaymentIntent(payment_method, amount);
        res.status(200).json(payment);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};