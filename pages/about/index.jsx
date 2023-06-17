import Gallery from '@/components/Gallery';
import Image from 'next/image';

const About = () => {
  return (
    <>
      {/* About */}
      <section className="layout h-full pt-[60px] md:pt-[130px]">
        <div className="mx-5 md:mx-0 flex-1 md:w-full self-start md:self-center">
          <div className="w-full text-center flex flex-col justify-center items-center">
            <span className="mb-[14px] text-[16px] inline-block font-semibold	">
              <Image
                width={50}
                height={50}
                src="/assets/icons/strip.svg"
                alt="strip"
                className="inline mr-2"
              />
              About Us
              <Image
                width={50}
                height={50}
                src="/assets/icons/strip.svg"
                alt="strip"
                className="inline ml-2"
              />
            </span>
            <h2 className="text-[30px] md:text-[39px] mb-[16px] font-playFair leading-tight font-bold  ">
              About One For All Foundation
            </h2>
            <p className="mb-[16px] md:text-[16px] phone:w-full w-[70%]  md:w-[50%] font-light">
              For over 3 years, One For All Foundation has been a physical and
              spiritual sanctuary, empowering those in need of food, shelter and
              hope in South Sumatra.
            </p>
          </div>
        </div>
      </section>

      {/* Vision Mission */}
      <section className="layout h-full flex flex-col md:flex-row justify-start items-start gap-8 md:gap-11 pt-[60px] md:pt-[130px] ">
        <div className="mx-5 flex-1 md:w-full">
          <div className="w-full ">
            <span className="mb-[14px] text-[16px] inline-block font-semibold	">
              Mission
              <Image
                width={50}
                height={50}
                src="/assets/icons/strip.svg"
                alt="strip"
                className="inline ml-2"
              />
            </span>
            <h2 className="text-[18px] md:text-[19px] mb-[16px] font-playFair leading-tight font-bold  ">
              THE WORLD WE WANT TO SEE
            </h2>
            <p className="mb-[16px] md:text-[16px] phone:w-full w-[70%] md:w-full font-light">
              We open our doors every day with a welcoming spirit of Muslims
              compassion, walking alongside the homeless, hungry and hurting of
              Palembang so that they may experience the love of God through acts
              of mercy, dignity and respect. More than just a safe space, warm
              bed and a hot meal, we empower everyone we serve through deep,
              intentional engagement with compassionate programs and
              trauma-informed care—activating their God-given potential for life
              transformation.
            </p>
          </div>
        </div>
        <div className="mx-5 md:mx-0 flex-1 md:w-full ">
          <div className="w-full ">
            <span className="mb-[14px] text-[16px] inline-block font-semibold	">
              Vision
              <Image
                width={50}
                height={50}
                src="/assets/icons/strip.svg"
                alt="strip"
                className="inline ml-2"
              />
            </span>
            <h2 className="text-[18px] md:text-[19px] mb-[16px] font-playFair leading-tight font-bold  ">
              HOW WE ARE TRANSFORMING THE WORLD WE ENVISION
            </h2>
            <p className="mb-[16px] md:text-[16px] phone:w-full w-[70%] md:w-full font-light">
              That the homeless, hungry and hurting in Palembang will achieve
              stability and self-sufficiency through a holistic transformation
              while experiencing the unconditional love of God.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="layout h-full flex flex-col justify-start items-start gap-8 md:gap-11 pt-[60px] md:pt-[130px] ">
        <div
          id="services"
          className="w-full flex flex-col justify-center items-start ">
          <span className="mb-[14px] mx-5 text-[16px] inline-block font-semibold	">
            About
            <Image
              width={50}
              height={50}
              src="/assets/icons/strip.svg"
              alt="strip"
              className="inline ml-2"
            />
          </span>
          <h2 className="text-[30px] md:text-[39px] mb-[38px] mx-5 font-playFair leading-tight font-bold ">
            Our Features
          </h2>
          <div className="md:mx-5 flex flex-row gap-8 w-full justify-center flex-wrap items-start">
            <div className="max-w-[400px] md:max-w-[360px] min-h-[420px]">
              <div className="bg-primary text-white p-[30px] min-h-full">
                <div className="w-[100px] h-[100px] mb-[30px]">
                  <img src="/assets/icons/house.png" alt="" />
                </div>
                <h3 className="font-playFair font-bold text-[20px] mb-[16px] ">
                  Food & Homeless Charity
                </h3>
                <p className="leading-tight font-light mb-[28px]">
                  Lorem ipsum dolor sit amet, consetetur sadipscing sed diam
                  nonumy tempor invidunt ut labore et magna aliquyam erat, sed
                  diam voluptua.....
                </p>
                <ol className="font-medium list-decimal ml-[20px] flex flex-col gap-3 ">
                  <li>Join your hand with us for a better life</li>
                  <li>Let&apos;s do the right thing now</li>
                </ol>
              </div>
            </div>

            <div className="max-w-[400px] md:max-w-[360px] min-h-[420px]">
              <div className="bg-blurPrimary text-black p-[30px] min-h-full">
                <div className="w-[100px] h-[100px] mb-[30px]">
                  <img src="/assets/icons/handmoney.png" alt="" />
                </div>
                <h3 className="font-playFair font-bold text-[20px] mb-[16px] ">
                  Make a donation
                </h3>
                <p className="leading-tight font-light mb-[28px]">
                  Lorem ipsum dolor sit amet, consetetur sadipscing sed diam
                  nonumy tempor invidunt ut labore et magna aliquyam erat, sed
                  diam voluptua.....
                </p>
                <ol className="font-medium list-decimal ml-[20px] flex flex-col gap-3 ">
                  <li>Join your hand with us for a better life</li>
                  <li>Let&apos;s do the right thing now</li>
                  <li>Lorem ipsum dolor sit amet</li>
                </ol>
              </div>
            </div>

            <div className="max-w-[400px] md:max-w-[360px] min-h-[420px]">
              <div className="bg-blurPrimary text-black p-[30px] min-h-full">
                <div className="w-[100px] h-[100px] mb-[30px]">
                  <img src="/assets/icons/handshake.png" alt="" />
                </div>
                <h3 className="font-playFair font-bold text-[20px] mb-[16px] ">
                  Non profit NGO
                </h3>
                <p className="leading-tight font-light mb-[28px]">
                  Lorem ipsum dolor sit amet, consetetur sadipscing sed diam
                  nonumy tempor invidunt ut labore et magna aliquyam erat, sed
                  diam voluptua.....
                </p>
                <ol className="font-medium list-decimal ml-[20px] flex flex-col gap-3 ">
                  <li>Join your hand with us for a better life</li>
                  <li>Let&apos;s do the right thing now</li>
                  <li>Lorem ipsum dolor sit amet</li>
                  <li> children where we are able to fulfill all</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="layout h-full pt-[60px] md:pt-[130px]">
        <div className="md:ml-5 flex flex-wrap justify-center items-start md:gap-x-4 gap-y-10">
          <div className="max-w-[100%] medium:w-[400px] md:w-[265px] h-[320px]">
            <div className="bg-blurPrimary text-black p-[40px] min-h-full flex flex-col items-center text-center">
              <div className="w-[100px] h-[100px] mb-[30px]">
                <img src="/assets/icons/helped.png" alt="" />
              </div>
              <h3 className="font-bold text-[48px] mb-[16px] ">4597+</h3>
              <p className="leading-tight font-semibold mb-[28px]">
                People Rised
              </p>
            </div>
          </div>

          <div className="max-w-[100%] medium:w-[400px] md:w-[265px] h-[320px]">
            <div className="bg-blurPrimary text-black p-[40px] min-h-full flex flex-col items-center text-center">
              <div className="w-[100px] h-[100px] mb-[30px]">
                <img src="/assets/icons/assist.png" alt="" />
              </div>
              <h3 className="font-bold text-[48px] mb-[16px] ">945+</h3>
              <p className="leading-tight font-semibold mb-[28px]">Volunteer</p>
            </div>
          </div>

          <div className="max-w-[100%] medium:w-[400px] md:w-[265px] h-[320px]">
            <div className="bg-blurPrimary text-black p-[40px] min-h-full flex flex-col items-center text-center">
              <div className="w-[100px] h-[100px] mb-[30px]">
                <img src="/assets/icons/bird.png" alt="" />
              </div>
              <h3 className="font-bold text-[48px] mb-[16px] ">100k+</h3>
              <p className="leading-tight font-semibold mb-[28px]">
                Poor People Saved
              </p>
            </div>
          </div>

          <div className="max-w-[100%] medium:w-[400px] md:w-[265px] h-[320px]">
            <div className="bg-blurPrimary text-black p-[40px] min-h-full flex flex-col items-center text-center">
              <div className="w-[100px] h-[100px] mb-[30px]">
                <img src="/assets/icons/globe.png" alt="" />
              </div>
              <h3 className="font-bold text-[48px] mb-[16px] ">100+</h3>
              <p className="leading-tight font-semibold mb-[28px]">
                Country Member
              </p>
            </div>
          </div>
        </div>
      </section>

      <Gallery />
    </>
  );
};

export default About;
