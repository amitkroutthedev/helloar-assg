import { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Backdrop,
} from "@mui/material";
import Card from "../components/Card";
import { RiDeleteBin5Line } from "react-icons/ri";
function Home() {
  //let items = localStorage.getItem("usersData");
  const [users, setUsers] = useState(() => {
    const saved = localStorage.getItem("usersData");
    const initialValue = JSON.parse(saved);
    return initialValue || [];
  });
  const [open, setOpen] = useState(false);
  useEffect(() => {
    localStorage.setItem("usersData", JSON.stringify(users));
  }, [users]);
  const genUUID = () => {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
      /[xy]/g,
      function (c) {
        var r = (Math.random() * 16) | 0,
          v = c === "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      }
    );
  };
  const handleNewUser = (data) => {
    var newUserData;
    if (users.length !== 0) {
      newUserData = [...users, { id: genUUID(), ...data }];
    } else {
      newUserData = [{ id: genUUID(), ...data }];
    }
    setUsers(newUserData);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  const deleteUserHandler = (id) => {
    var newData = users.filter((user) => user.id !== id);
    setUsers(newData);
  };
  const DisplayData =
    users &&
    users.map((info) => {
      return (
        <TableRow key={info.id}>
          <TableCell sx={{ border: "1px solid #c4b4b496" }}>
            {info.name}
          </TableCell>
          <TableCell sx={{ border: "1px solid #c4b4b496" }}>
            {info.lastSignedIn ? info.lastSignedIn : info.addTime}
          </TableCell>
          <TableCell sx={{ border: "1px solid #c4b4b496" }}>
            {info.role}
          </TableCell>
          <TableCell sx={{ border: "1px solid #c4b4b496" }}>
            <button onClick={() => deleteUserHandler(info.id)}>
              <RiDeleteBin5Line />
            </button>
          </TableCell>
        </TableRow>
      );
    });

  return (
    <div className="flex flex-col space-y-4  p-2 md:w-10/12">
      <div>
        <button
          onClick={handleToggle}
          className="p-2 max-md:w-full max-md:my-2 text-white bg-green-500 rounded-xl"
        >
          ADD USERS
        </button>
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={open}
        >
          <Card handleClose={handleClose} handleNewUser={handleNewUser} />
        </Backdrop>
      </div>
      <div className="w-11/12 mx-auto">
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{
                    fontWeight: "bold",
                    backgroundColor: "#d0cccc",
                    border: "1px solid #c4b4b496",
                  }}
                >
                  User
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: "bold",
                    backgroundColor: "#d0cccc",

                    border: "1px solid #c4b4b496",
                  }}
                >
                  Last Signed In
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: "bold",
                    backgroundColor: "#d0cccc",
                    border: "1px solid #c4b4b496",
                  }}
                >
                  Role
                </TableCell>
                <TableCell
                  sx={{
                    backgroundColor: "#d0cccc",
                    border: "1px solid #c4b4b496",
                  }}
                ></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>{DisplayData}</TableBody>
          </Table>
        </TableContainer>
        {users.length === 0 && (
          <p className="flex justify-center text-green-600 font-bold text-lg pt-40">
            Add Some Users...
          </p>
        )}
      </div>
    </div>
  );
}

export default Home;
