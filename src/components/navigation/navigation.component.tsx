import logo from "../../images/logo.svg";
import hamburger from "../../images/icon-hamburger.svg";

const Navigation = () => {
  return (
    <>
      <ul className="flex space-x-28 md:space-x-8 justify-items-center items-center px-7 absolute top-10 left-5 text-white">
        <li className="cursor-pointer items-center md:hidden">
          <img src={hamburger} alt="hamburger icon" />
        </li>
        <li className="md:block cursor-pointer mr-5 mt-1 items-center">
          <img src={logo} alt="logo" />
        </li>
        <li className="md:block cursor-pointer hidden">home</li>
        <li className="md:block cursor-pointer hidden">shop</li>
        <li className="md:block cursor-pointer hidden">about</li>
        <li className="md:block cursor-pointer hidden">contact</li>
      </ul>
    </>
  );
};

export default Navigation;
