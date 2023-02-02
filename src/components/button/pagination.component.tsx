import AngleR from "../../images/icon-angle-right.svg";
import AngleL from "../../images/icon-angle-left.svg";

const Button = () => {
  return (
    <div className="flex cursor-pointer absolute bottom-0 left-0">
      <img className="bg-slate-900 py-5 px-10" src={AngleL} alt="left arrow" />
      <img className="bg-slate-900 py-5 px-10" src={AngleR} alt="right arrow" />
    </div>
  );
};

export default Button;
