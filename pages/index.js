// Components
import About from '@/components/About';
import DonationCall from '@/components/DonationCall';
import GetInvolved from '@/components/GetInvolved';
import Testimonials from '@/components/Testimonials';
import Vision from '@/components/Vision';

export default function Home() {
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
