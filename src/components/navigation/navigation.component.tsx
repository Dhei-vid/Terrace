import logo from "../../images/logo.svg";

const Navigation = () => {
  return (
    <>
      <ul className="flex space-x-8 justify-items-center items-center px-7">
        <li className="text-xl font-extrabold cursor-pointer">room</li>
        <li className="cursor-pointer">home</li>
        <li className="cursor-pointer">shop</li>
        <li className="cursor-pointer">about</li>
        <li className="cursor-pointer">contact</li>
      </ul>
    </>
  );
};

export default Navigation;
