import { Donation } from '@/models/Donation';
import { connectToDB } from '@/lib/mongoose';

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// await connectToDB();

export const POST = async (req, res) => {
  // const donation = await Donation.create({
  //   amount,
  // });

  if (req.method === 'POST') {
    try {
      const { amount } = await request.json();

      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create({
        line_items: [
          {
            // Provide the exact Pridce ID
            price_data: {
              currency: 'idr',
              product_data: {
                name: 'customDonate',
              },
              unit_amount: amount * 100,
            },
            quantity: 1,
          },
        ],
        mode: 'payment',
        success_url: `${req.headers.origin}/?success=true`,
        cancel_url: `${req.headers.origin}/?canceled=true`,
      });
      res.redirect(303, session.url);
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
};
