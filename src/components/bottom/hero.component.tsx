import Dark from "../../images/image-about-dark.jpg";
import Light from "../../images/image-about-light.jpg";

const Hero = () => {
  return (
    <div>
      <div>
        <img src={Dark} alt="Dark furniture" />
      </div>
      <div>
        <h3>About our furniture</h3>
        <p>
          Our multifunctional collection blends design and function to suit your
          individual taste. Make each room unique, or pick a cohesive theme that
          best express your interest and what inspires you. Find the furniture
          pieces you need, from traditional to contemporary styles or anything
          in between. Product specialist are available to help you create your
          dream space.
        </p>
      </div>
      <div>
        <img src={Light} alt="Light Furniture" />
      </div>
    </div>
  );
};

export default Hero;
