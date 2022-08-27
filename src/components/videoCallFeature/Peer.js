import React, { useEffect, useState } from "react";
import io from "socket.io-client";
const PeerJs = () => {
  const socket = io("http://localhost:5000");
  const [txt, setTxt] = useState("");
  // var socketConnection = io();
  useEffect(() => {
    socket.on("connect", () => {
      console.log(socket.connected, socket.id); // true
    });

    socket.on("disconnect", () => {
      console.log(socket.connected); // false
    });
    socket.emit("txt", { name: txt });
  }, [txt]);
  console.log(txt);
  return (
    <>
      <div className="relative">
        <div className="absolute top-16">
          <h1>hello</h1>
          <input
            placeholder="Enter"
            type="text"
            onChange={(e) => setTxt(e.target.value)}
            value={txt}
          />
        </div>
      </div>
    </>
  );
};

export default PeerJs;
