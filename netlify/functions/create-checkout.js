
const Stripe = require("stripe");
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

exports.handler = async function(event, context) {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "Example Product",
            },
            unit_amount: 2000,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: "https://u4itel.info/success",
      cancel_url: "https://u4itel.info/cancel",
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ id: session.id }),
    };
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
};
async function checkout() {
  const response = await fetch("/.netlify/functions/create-checkout");
  const session = await response.json();

  const stripe = Stripe("pk_test_mk_1T8MmuDTtd3PrTVVaExvIv9f");
  stripe.redirectToCheckout({ sessionId: session.id });
}
Button example:
<button onclick="checkout()">Pay Now</button>

