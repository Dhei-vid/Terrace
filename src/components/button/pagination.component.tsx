import { Link, useNavigate } from "react-router-dom";

import AngleR from "../../images/icon-angle-right.svg";
import AngleL from "../../images/icon-angle-left.svg";

// type Links = {
//   next: string;
//   prev: string;
// };

const Button = ({ prev, next }: any) => {
  const navigate = useNavigate();

  const prevPage = () => {
    navigate(`${prev}`);
  };

  const nextPage = () => {
    navigate(`${next}`);
  };

  return (
    <div className="flex cursor-pointer absolute bottom-0 left-0">
      <div onClick={() => prevPage()}>
        <img
          className="bg-slate-900 py-5 px-x dark:md:hover:bg-zinc-400"
          src={AngleL}
          alt="left arrow"
        />
      </div>

      <div onClick={() => nextPage()}>
        <img
          className="bg-slate-900 py-5 px-x dark:md:hover:bg-zinc-400"
          src={AngleR}
          alt="right arrow"
        />
      </div>
    </div>
  );
};

export default Button;
