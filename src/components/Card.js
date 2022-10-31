import { useState } from "react";

function Card({ handleClose, handleNewUser }) {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const submitHandler = () => {
    if (name === "" || role === "") {
      alert("Incomplete Data");
      handleClose();
    } else {
      const timestamp = Date.now();
      const addTime = new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      }).format(timestamp);
      handleNewUser({ name, role, addTime });
      handleClose();
      setName("");
      setRole("");
    }
  };
  return (
    <div className="p-4 w-full max-w-sm bg-gray-500 rounded-lg  shadow-md sm:p-6 md:p-8 ">
      <div className="space-y-6">
        <h5 className="text-xl font-medium text-gray-900 dark:text-white">
          User Information
        </h5>
        <div>
          <label
            htmlFor="userName"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Your Name
          </label>
          <input
            value={name}
            type="text"
            name="userName"
            id="userName"
            placeholder="john"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="flex flex-row items-center">
          <label
            htmlFor="roles"
            className="mr-2 mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Role:
          </label>

          <select
            value={role}
            name="roles"
            id="roles"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            onChange={(e) => setRole(e.target.value)}
          >
            <option>Select Role</option>
            <option value="Admin">Admin</option>
            <option value="Owner">Owner</option>
            <option value="Sales">Sales</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={submitHandler}
        >
          Add Users
        </button>
      </div>
    </div>
  );
}

export default Card;
