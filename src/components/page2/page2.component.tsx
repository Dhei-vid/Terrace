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
        <div className="col-span-3 px-28 pt-10 justify-items-center relative">
          <h2 className="text-3xl font-bold pb-6">
            We are available all across the globe
          </h2>
          <p className="subpixel-antialiased text-gray-500 text-xs">
            With stores all over the world, it's easy to find furniture for your
            home or place of business. Locally, we're in most cities throughout
            the country. Find the branch nearest you using our store locator.
            Any questions? Don't hesitate to contact us today.
          </p>
          <ShopNowButton />
          <Button prev={`/`} next={`/page3`} />
        </div>
      </div>
      <Hero />
    </>
  );
};

export default Page2;
