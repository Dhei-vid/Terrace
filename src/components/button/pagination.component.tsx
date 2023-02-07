import { Link, useNavigate } from "react-router-dom";

import AngleR from "../../images/icon-angle-right.svg";
import AngleL from "../../images/icon-angle-left.svg";

const Button = ({ prev, next }: any) => {
  const navigate = useNavigate();

  const prevPage = () => {
    navigate(`${prev}`);
  };

  const nextPage = () => {
    navigate(`${next}`);
  };

  return (
    <div className="flex cursor-pointer absolute bottom-full right-0 md:bottom-0 md:left-0 z-10">
      <div onClick={() => prevPage()}>
        <img
          className="bg-slate-900 py-5 px-x dark:hover:bg-zinc-400"
          src={AngleL}
          alt="left arrow"
        />
      </div>

      <div onClick={() => nextPage()}>
        <img
          className="bg-slate-900 py-5 px-x dark:hover:bg-zinc-400"
          src={AngleR}
          alt="right arrow"
        />
      </div>
    </div>
  );
};

export default Button;
