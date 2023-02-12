import logo from "../../images/logo.svg";
import hamburger from "../../images/icon-hamburger.svg";
import close from "../../images/icon-close.svg";

const Navigation = () => {
  return (
    <>
      <ul className="flex space-x-28 md:space-x-8 justify-items-center items-center px-7 absolute top-10 left-5 text-white">
        <li className="cursor-pointer items-center md:hidden">
          <img src={hamburger} alt="hamburger icon" />
          <img src={close} alt="close" />
        </li>
        <li className="md:block cursor-pointer mr-5 mt-1 items-center">
          <img src={logo} alt="logo" />
        </li>
        <li className="transition ease-in-out delay-150 md:block cursor-pointer hidden hover:scale-110">
          home
        </li>
        <li className="transition ease-in-out delay-150 md:block cursor-pointer hidden hover:scale-110">
          shop
        </li>
        <li className="transition ease-in-out delay-150 md:block cursor-pointer hidden hover:scale-110">
          about
        </li>
        <li className="transition ease-in-out delay-150 md:block cursor-pointer hidden hover:scale-110">
          contact
        </li>
      </ul>
    </>
  );
};

export default Navigation;
