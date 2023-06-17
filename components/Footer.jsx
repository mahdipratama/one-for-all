import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer bg-secondary">
      <div className="layout h-full flex mt-[60px] justify-start items-start gap-8 md:gap-11 py-[30px] md:py-[50px] flex-wrap ">
        <div className="md:flex-1 ml-[-2%] md:ml-[-1%] self-center md:self-start">
          <img
            className="logo"
            width={162}
            height={33}
            src="/assets/icons/logo.png"
            alt="Logo one for all"
          />
        </div>
        <div className="md:flex-auto flex justify-start items-start gap-9 flex-wrap">
          <div className="text-left">
            <h4 className="font-playFair text-white font-bold text-[16px] mb-4">
              Quick Link
            </h4>
            <ul className="text-[#AFAFAF] font-normal text-[16px] flex flex-col gap-1">
              <Link href={'/'}>
                <li>Home</li>
              </Link>
              <Link href={'/about'}>
                <li>About Us</li>
              </Link>
              <Link href={'/faqs'}>
                <li>FAQs</li>
              </Link>
              <Link href={'/about#gallery'}>
                <li>Photo Gallery</li>
              </Link>
            </ul>
          </div>
          <div className="text-left">
            <h4 className="font-playFair text-white font-bold text-[16px] mb-4">
              Get In Touch
            </h4>
            <ul className="text-[#AFAFAF] font-normal flex flex-col gap-1">
              <Link href={'/faqs#contact'}>
                <li>Contact Us</li>
              </Link>
              <Link href={'/about#services'}>
                <li>Our Service</li>
              </Link>
            </ul>
          </div>
          <div className="text-left">
            <h4 className="font-playFair text-white font-bold text-[16px] mb-4">
              Address
            </h4>
            <ul className="text-[#AFAFAF] font-normal">
              <li>
                Jl. Demang Lebar Daun, <br /> Palembang
              </li>
            </ul>
          </div>
        </div>
        <div className="md:flex-1 flex gap-5 justify-center items-start w-full flex-col">
          <h4 className="text-white font-bold font-playFair">Follow Us</h4>
          <div className="flex gap-5 justify-center">
            <div>
              <Link href={'/'}>
                <Image
                  className="social_icons"
                  width={32}
                  height={32}
                  src="/assets/icons/ig.png"
                  alt="Instagram Icon"
                />
              </Link>
            </div>
            <div>
              <Link href={'/'}>
                <Image
                  className="social_icons"
                  width={32}
                  height={32}
                  src="/assets/icons/twitter.png"
                  alt="Twitter Icon"
                />
              </Link>
            </div>
            <div>
              <Link href={'/'}>
                <Image
                  className="social_icons"
                  width={32}
                  height={32}
                  src="/assets/icons/pinterest.png"
                  alt="pinterest Icon"
                />
              </Link>
            </div>
            <div>
              <Link href={'/'}>
                <Image
                  className="social_icons"
                  width={32}
                  height={32}
                  src="/assets/icons/youtube.png"
                  alt="youtube Icon"
                />
              </Link>
            </div>
          </div>
        </div>

        <div className="text-white text-sm font-light w-full inline-flex justify-center border-t-[1px] border-[#AFAFAF] pt-5">
          <p>©{currentYear} OneForAll. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
