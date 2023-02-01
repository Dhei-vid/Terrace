import Arrow from "../../images/icon-arrow.svg";

const ShopNowButton = () => {
  return (
    <button className="flex pt-6 gap-4 items-center font-bold">
      <div className="uppercase tracking-widest text-sm">shop now</div>
      <div>
        <img src={Arrow} alt="arrow" />
      </div>
    </button>
  );
};

export default ShopNowButton;
