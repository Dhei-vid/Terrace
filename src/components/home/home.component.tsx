import image1 from "../../images/desktop-image-hero-1.jpg";
import Navigation from "../navigation/navigation.component";

import ShopNowButton from "../button/shopButton.component";
import Button from "../button/pagination.component";
import Hero from "../bottom/hero.component";

const Home = () => {
  return (
    <>
      <div className="grid grid-cols-7 table-row">
        <div className="col-span-4 relative">
          <Navigation />
          <img
            className="h-100 w-full"
            src={image1}
            alt="home"
            loading="lazy"
          />
        </div>
        <div className="col-span-3 px-28 pt-8 justify-items-center relative">
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
