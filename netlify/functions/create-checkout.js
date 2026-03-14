import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function handler(event) {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'Sample Product',
            },
            unit_amount: 5000, // $50.00
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.URL}/success.html`,
      cancel_url: `${process.env.URL}/cancel.html`,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ url: session.url }),
    };
  } catch (err) {
    return { statusCode: 500, body: err.toString() };
  }
}
•	process.env.STRIPE_SECRET_KEY → store your secret key in Netlify environment variables.
•	process.env.URL → your site URL (can also use https://your-site.netlify.app).
