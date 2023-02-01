import AngleR from "../../images/icon-angle-right.svg";
import AngleL from "../../images/icon-angle-left.svg";

const Button = () => {
  return (
    <div className="bg-red">
      <img className="w-3" src={AngleL} alt="" />
      <img src={AngleR} alt="" />
    </div>
  );
};

export default Button;
