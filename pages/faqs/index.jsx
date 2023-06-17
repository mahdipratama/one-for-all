'use client';

import Image from 'next/image';
import FaqsAccordion from '@/components/FaqsAccordion';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

import ContactForm from '@/components/ContactForm';

const faqsData = [
  {
    label: 'Make a different In life of a child',
    content:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.',
  },
  {
    label: "Let's do the right thing now",
    content:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.',
  },
  {
    label: 'Can I donate anonymously?',
    content:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.',
  },
  {
    label: 'Join your hand with us for a better life',
    content:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.',
  },
  {
    label: 'How do I cancel my recurring donation?',
    content:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.',
  },
];

const Faqs = () => {
  const router = useRouter();

  const [submitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    message: '',
  });

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    // e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/message', {
        method: 'POST',
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phoneNumber: formData.phoneNumber,
          message: formData.message,
        }),
        headers: {
          'Content-type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error("Couldn't send the message");
      } else {
        router.push('/faqs');
      }

      const data = await response.json();
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section>
      <div className="bg-blurPrimary">
        <div className="layout h-full pt-[60px] md:pt-[130px] pb-[100px] md:pb-[120px]">
          <div className="w-full mx-5 md:mx-8">
            <span className="mb-[14px] text-[16px] inline-block font-semibold	">
              Have any questions ?
              <Image
                width={50}
                height={50}
                src="/assets/icons/strip.svg"
                alt="strip"
                className="inline ml-2"
              />
            </span>
            <h2 className="text-[30px] md:text-[39px] mb-[16px] font-playFair leading-tight font-bold  ">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="flex flex-col mx-5 md:mx-8 md:flex-row mt-10 justify-between items-center md:items-start gap-8 md:gap-11">
            <div className="w-[300px] h-[310px] border-[14px] border-[#79aedc46]">
              <img
                className="object-top object-cover w-[100%] h-[100%]"
                src="/assets/images/faqs.jpg"
                aria-hidden="true"
              />
            </div>
            <div className=" flex-1 md:w-full max-w-[500px] md:max-w-[700px]">
              {faqsData.map((faq, index) => (
                <FaqsAccordion key={index} {...faq} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="layout h-full pt-[40px] md:pt-[60px]">
        <div className="w-full mx-5 md:mx-8">
          <span className="mb-[14px] text-[16px] inline-block font-semibold	">
            Still Need Help ?
            <Image
              width={50}
              height={50}
              src="/assets/icons/strip.svg"
              alt="strip"
              className="inline ml-2"
            />
          </span>
          <h2 className="text-[30px] md:text-[39px] mb-[16px] font-playFair leading-tight font-bold  ">
            Contact Us
          </h2>

          <ContactForm
            type="Send Message"
            formData={formData}
            onChange={onChange}
            submitting={submitting}
            handleSubmit={handleSubmit}
          />
        </div>
      </div>
    </section>
  );
};

export default Faqs;

// rows="8"
// cols="50"
