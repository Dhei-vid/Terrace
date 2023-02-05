import Arrow from "../../images/icon-arrow.svg";

const ShopNowButton = () => {
  return (
    <button className="flex pb-20 pt-6 gap-4 items-center font-bold transition ease-in-out delay-150 hover:-translate-X-1 hover:scale-x-105 duration-300">
      <div className="uppercase tracking-widest text-sm">shop now</div>
      <div>
        <img src={Arrow} alt="arrow" />
      </div>
    </button>
  );
};

export default ShopNowButton;
