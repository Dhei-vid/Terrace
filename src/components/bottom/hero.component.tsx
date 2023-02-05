import Dark from "../../images/image-about-dark.jpg";
import Light from "../../images/image-about-light.jpg";

const Hero = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-7 h-48">
      <div className="md:col-span-2">
        <img className="w-full" src={Dark} alt="Dark furniture" />
      </div>
      <div className="col-span-3 p-10">
        <h3 className="font-bold uppercase tracking-wider pb-2 ">
          About our furniture
        </h3>
        <p className="text-gray-500 text-xs">
          Our multifunctional collection blends design and function to suit your
          individual taste. Make each room unique, or pick a cohesive theme that
          best express your interest and what inspires you. Find the furniture
          pieces you need, from traditional to contemporary styles or anything
          in between. Product specialist are available to help you create your
          dream space.
        </p>
      </div>
      <div className="col-span-2 mr-0.5">
        <img className="w-full" src={Light} alt="Light Furniture" />
      </div>
    </div>
  );
};

export default Hero;
