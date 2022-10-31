import React from "react";

function Navbar() {
  return (
    <nav className="bg-gray-100 flex justify-between py-6">
      <div className="mx-4 md:px-2 flex flex-row items-center">
        <img src="https://picsum.photos/40" alt="error" />
        <p className="md:mr-20 md:text-xl font-bold">My Account</p>
      </div>
      <div className="md:px-2 flex flex-row items-center pr-2">
        <img
          src="https://picsum.photos/40"
          alt="error"
          className="rounded-full"
        />
        <p>Brade Richel</p>
      </div>
    </nav>
  );
}

export default Navbar;
