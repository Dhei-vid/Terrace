import Button from "../button/pagination.component";
import ShopNowButton from "../button/shopButton.component";
import Hero from "../bottom/hero.component";
import Navigation from "../navigation/navigation.component";

import image2 from "../../images/desktop-image-hero-2.jpg";
import image22 from "../../images/mobile-image-hero-2.jpg";

const Page2 = () => {
  return (
    <>
      <div className="relative">
        <Button prev={`/`} next={`/page3`} />
        <div className="grid grid-cols-1 md:grid-cols-7">
          <div className="col-span-4">
            <Navigation />
            <img
              className="hidden h-100 w-full md:block"
              src={image2}
              alt="home"
              loading="lazy"
            />
            <img
              className="h-100 w-full md:hidden"
              src={image22}
              alt="home"
              loading="lazy"
            />
          </div>
          <div className="col-span-3 px-10 pt-8 md:px-28 justify-items-center">
            <h2 className="text-3xl font-bold pb-6">
              We are available all across the globe
            </h2>
            <p className="subpixel-antialiased text-gray-500 text-xs">
              With stores all over the world, it's easy to find furniture for
              your home or place of business. Locally, we're in most cities
              throughout the country. Find the branch nearest you using our
              store locator. Any questions? Don't hesitate to contact us today.
            </p>
            <ShopNowButton />
          </div>
        </div>
      </div>
      <Hero />
    </>
  );
};

export default Page2;
