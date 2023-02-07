import image1 from "../../images/desktop-image-hero-1.jpg";
import image11 from "../../images/mobile-image-hero-1.jpg";

import Navigation from "../navigation/navigation.component";
import ShopNowButton from "../button/shopButton.component";
import Button from "../button/pagination.component";
import Hero from "../bottom/hero.component";

const Home = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-7 ">
        <div className="md:col-span-4">
          <Navigation />
          <img
            className="hidden h-100 w-full md:block"
            src={image1}
            alt="home"
            loading="lazy"
          />
          <img
            className="h-100 w-full md:hidden"
            src={image11}
            alt="home"
            loading="lazy"
          />
        </div>
        <div className="col-span-3 px-14 md:px-28 pt-8 justify-items-center relative">
          <h2 className="text-3xl font-bold pb-6">
            Discover innovative ways to decorate
          </h2>
          <p className="subpixel-antialiased text-gray-500 text-xs">
            We provide unmatched quality, comfort, and style for property owners
            across the country. Our experts combine form and function into
            bringing your vision to life. Create a room in your own style with
            our collection and make your property a reflection of you and what
            you love.
          </p>
          <ShopNowButton />
          <Button prev={`/`} next={`/page2`} />
        </div>
      </div>
      <Hero />
    </>
  );
};

export default Home;
