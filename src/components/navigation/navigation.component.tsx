import logo from "../../images/logo.svg";

const Navigation = () => {
  return (
    <>
      <ul className="flex space-x-8 justify-items-center items-center px-7 absolute top-10 left-5 text-white">
        <li className="text-xl font-extrabold cursor-pointer mr-5">room</li>
        <li className="cursor-pointer">home</li>
        <li className="cursor-pointer">shop</li>
        <li className="cursor-pointer">about</li>
        <li className="cursor-pointer">contact</li>
      </ul>
    </>
  );
};

export default Navigation;
