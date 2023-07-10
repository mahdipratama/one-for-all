// Components
import About from '@/components/About';
import DonationCall from '@/components/DonationCall';
import GetInvolved from '@/components/GetInvolved';
import Testimonials from '@/components/Testimonials';
import Vision from '@/components/Vision';

import { useState, useEffect } from 'react';

export default function Home() {
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);
    if (query.get('success')) {
      console.log('Donation success.');
      setIsSuccess(true);
    }

    if (query.get('canceled')) {
      console.log('Donation calceled!');
    }
  }, []);

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
    <>
      <About />
      <Vision />
      <GetInvolved />
      <Testimonials />
      <DonationCall />
    </>
  );
}
