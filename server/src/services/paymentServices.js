import Stripe from "stripe";

const stripe = new Stripe(`${process.env.SECRET_KEY}`);
console.log(`secret key :${process.env.SECRET_KEY}`);

export const createPaymentIntent = async (paymentMethodId, amount) =>{
    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount: amount,
            currency: 'usd',
            payment_method: paymentMethodId,
            confirmation_method: 'manual',
            confirm: true,
        })
        return paymentIntent;
    } catch (error) {
        throw new Error(error.message)
    }
};