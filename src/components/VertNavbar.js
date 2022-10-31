import { useState } from "react";
import { BiMenu } from "react-icons/bi";
function VertNavbar() {
  const [hambuger, setHambuger] = useState(false);
  function hambugerHandler() {
    setHambuger(!hambuger);
  }
  return (
    <nav className="bg-gray-200 ">
      <div className="md:hidden flex items-center justify-end">
        <button className="" onClick={hambugerHandler}>
          <BiMenu size={30} />
        </button>
      </div>
      <div
        className={
          !hambuger
            ? "hidden md:flex max-md:space-x-4 md:space-y-8 md:flex-col md:h-screen md:w-fit"
            : "flex flex-row flex-wrap h-fit w-screen max-md:space-x-4 md:space-y-8 md:flex-col md:h-screen md:w-fit"
        }
        //className="flex flex-row flex-wrap h-fit w-screen max-md:space-x-4 md:space-y-8 md:flex-col md:h-screen md:w-fit"
      >
        <div className="p-4">
          <p className="text-lg">Products</p>
        </div>
        <div className="p-4">
          <p className="text-lg">Demo Script</p>
        </div>
        <div className="p-4">
          <p className="text-lg">Customers</p>
        </div>
        <div className="p-4">
          <p className="text-lg">Sales Team</p>
        </div>
        <div className="p-4">
          <p className="text-lg">Demos</p>
        </div>
        <div className="bg-green-600 p-4">
          <p className="text-lg text-white">Settings</p>
        </div>
      </div>
    </nav>
  );
}

export default VertNavbar;
