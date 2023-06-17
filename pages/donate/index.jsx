import { useEffect, useState } from 'react';
import Button from '@/components/Button';
import Image from 'next/image';

import { loadStripe } from '@stripe/stripe-js';
import { useRouter } from 'next/router';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_API_KEY);

const Donate = () => {
  const [selectedValue, setSelectedValue] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleOptionChange = e => {
    const value = e.target.value;
    setSelectedValue(value);

    // Adjust the range input value
    const rangeInput = document.getElementById('pi_input');
    rangeInput.value = value;
  };

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);
    if (query.get('success')) {
      console.log('Order placed! You will receive an email confirmation.');
    }

    if (query.get('canceled')) {
      console.log(
        'Order canceled -- continue to shop around and checkout when you’re ready.'
      );
    }
  }, []);

  // // Success Payment Page
  // useEffect(() => {
  //   if (typeof window === 'undefined') {
  //     return;
  //   }

  //   if (window?.location.href.includes('success')) {
  //     setIsSuccess(true);
  //   }
  // }, []);

  // Payment Request
  const goToPayment = async e => {
    e.preventDefault();

    try {
      const response = await fetch('/api/checkout_sessions', {
        method: 'POST',
        body: JSON.stringify({
          amount: selectedValue,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error("Couldn't send a request");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const formattedNumber = selectedValue
    ? parseInt(selectedValue).toLocaleString('en-US').replace(/,/g, '.')
    : '0';

  // Success Payment Page
  if (isSuccess) {
    return (
      <section className="layout h-full pt-[60px] md:pt-[130px] pb-[100px] md:pb-[120px]">
        <div className="w-full mx-5 md:mx-8">
          <h2 className="text-[30px] md:text-[39px] mb-[16px] font-playFair leading-tight font-bold  ">
            Thank you for your kindness !
          </h2>
        </div>
      </section>
    );
  }

  return (
    <section className="layout h-full pt-[60px] md:pt-[130px] pb-[100px] md:pb-[120px]">
      <div className="w-full mx-5 md:mx-8">
        <span className="mb-[14px] text-[16px] inline-block font-semibold	">
          Your Help Means So Much
          <Image
            width={50}
            height={50}
            src="/assets/icons/strip.svg"
            alt="strip"
            className="inline ml-2"
          />
        </span>
        <h2 className="text-[30px] md:text-[39px] mb-[16px] font-playFair leading-tight font-bold  ">
          Donate Now
        </h2>
      </div>
      <form
        onSubmit={goToPayment}
        className="form max-w-[600px] mx-5 md:mx-8 pt-[50px] flex flex-col">
        <div className="label_wrapper overflow-hidden flex gap-4 mb-6">
          <input
            className="switch-one"
            id="nom-1"
            type="radio"
            name="sepuluhRb"
            value="10000"
            checked={selectedValue === '10000'}
            onChange={handleOptionChange}
          />
          <label className="" htmlFor="nom-1">
            Rp.10.000
          </label>
          <input
            className="switch-one"
            id="nom-2"
            type="radio"
            name="duaPuluhRb"
            value="20000"
            checked={selectedValue === '20000'}
            onChange={handleOptionChange}
          />
          <label className="" htmlFor="nom-2">
            Rp.20.000
          </label>
        </div>

        <div className="label_wrapper overflow-hidden flex mb-6 gap-4">
          <input
            className="switch-two"
            id="nom-3"
            type="radio"
            name="limaPuluhRb"
            value="50000"
            checked={selectedValue === '50000'}
            onChange={handleOptionChange}
          />
          <label className="" htmlFor="nom-3">
            Rp.50.000
          </label>
          <input
            className="switch-two"
            id="nom-4"
            type="radio"
            name="seratusRb"
            value="100000"
            checked={selectedValue === '100000'}
            onChange={handleOptionChange}
          />
          <label className="" htmlFor="nom-4">
            Rp.100.000
          </label>
        </div>

        <label>Input Money</label>
        <input
          onChange={handleOptionChange}
          type="text"
          name="number"
          required
          value={selectedValue}
          placeholder="Rp."
          className="mb-6"
        />

        <label className="pb-0 mb-[-8px]">Range Money</label>
        <input
          onChange={handleOptionChange}
          type="range"
          id="pi_input"
          min="10000"
          max="100000"
          step="1000"
          className="mb-6 px-0 "
        />
        <p className="mb-16 text-xl">
          Your contributions: <strong>Rp. {formattedNumber}</strong>
        </p>
        <Button type="submit" primary>
          Donate Now
        </Button>
      </form>
    </section>
  );
};

export default Donate;
