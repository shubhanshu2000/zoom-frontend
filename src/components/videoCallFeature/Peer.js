import React from "react";
import { Peer } from "peerjs";

const PeerJs = () => {
  const peer = new Peer("pick-an-id");
  var conn = peer.connect("another-peers-id");
  // on open will be launch when you successfully connect to PeerServer
  conn.on("open", function () {
    // here you have conn.id
    conn.send("hi!");
  });
  peer.on("connection", function (conn) {
    conn.on("data", function (data) {
      // Will print 'hi!'
      console.log(data);
    });
  });
  return (
    <>
      <div className="relative">
        <div className="absolute top-16">
          <h1>hello</h1>
        </div>
      </div>
    </>
  );
};

export default PeerJs;
