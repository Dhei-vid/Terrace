import Button from "../button/pagination.component";
import ShopNowButton from "../button/shopButton.component";
import Hero from "../bottom/hero.component";
import image2 from "../../images/desktop-image-hero-2.jpg";

const Page2 = () => {
  return (
    <>
      <div className="grid grid-cols-7 table-row">
        <div className="col-span-4">
          <img className="h-100 w-full" src={image2} alt="home" />
        </div>
        <div className="col-span-3 px-24 pt-8 justify-items-center">
          <h2 className="text-3xl subpixel-antialiased font-bold pb-6">
            Discover innovative ways to decorate
          </h2>
          <p className="subpixel-antialiased text-gray-500 text-sm">
            We provide unmatched quality, comfort, and style for property owners
            across the country. Our experts combine form and function into
            bringing your vision to life. Create a room in your own style with
            our collection and make your property a reflection of you and what
            you love.
          </p>
          <ShopNowButton />
          <Button />
        </div>
      </div>
      <Hero />
    </>
  );
};

export default Page2;
