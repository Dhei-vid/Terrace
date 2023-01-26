import Button from "../button/button.component";
import Hero from "../bottom/hero.component";

import Arrow from "../../images/icon-arrow.svg";
import image1 from "../../images/desktop-image-hero-1.jpg";

const Home = () => {
  return (
    <>
      <div className="grid grid-cols-7">
        <div className="col-span-4">
          <img className="w-full" src={image1} alt="home" />
        </div>
        <div className="col-span-3 p-20 justify-items-center">
          <h2 className="text-4xl subpixel-antialiased font-bold pb-6">
            Discover innovative ways to decorate
          </h2>
          <p className="subpixel-antialiased text-gray-500 text-sm">
            We provide unmatched quality, comfort, and style for property owners
            across the country. Our experts combine form and function into
            bringing your vision to life. Create a room in your own style with
            our collection and make your property a reflection of you and what
            you love.
          </p>
          <button className="flex pt-6 gap-4 items-center font-bold">
            <div className="uppercase tracking-widest text-sm">shop now</div>
            <div>
              <img src={Arrow} alt="arrow" />
            </div>
          </button>
          <Button />
        </div>
      </div>
      <Hero />
    </>
  );
};

export default Home;
