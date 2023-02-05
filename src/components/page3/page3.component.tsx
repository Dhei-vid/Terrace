import ShopNowButton from "../button/shopButton.component";
import Button from "../button/pagination.component";
import Hero from "../bottom/hero.component";
import Navigation from "../navigation/navigation.component";

import image3 from "../../images/desktop-image-hero-3.jpg";

const Page3 = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-7">
        <div className="col-span-4 relative">
          <Navigation />
          <img
            className="h-100 w-full"
            src={image3}
            alt="home"
            loading="lazy"
          />
        </div>
        <div className="col-span-3 px-10 md:px-28 pt-8 justify-items-center md:relative">
          <h2 className="text-3xl subpixel-antialiased font-bold pb-6">
            Manufactured with the best materials
          </h2>
          <p className="text-gray-500 text-xs">
            Our modern furniture store provide a high level of quality. Our
            company has invested in advanced technology to ensure that every
            product is made as perfect and as consistent as possible. With three
            decades of experience in this industry, we understand what customers
            want for their home and office.
          </p>
          <ShopNowButton />
          <Button prev={`/page2`} next={`/page3`} />
        </div>
      </div>
      <Hero />
    </>
  );
};

export default Page3;
