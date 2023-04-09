import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { gmAction, gnAction } from "../Redux/Message/messageAction";

const Message = () => {
  let dispatch = useDispatch();
  let message = useSelector((state) => {
    return state;
  });

  return (
    <div>
      <h2 className="container-fluid">Message Component</h2>
      <h3>Message:{message.message}</h3>
      <button className="btn btn-danger" onClick={() => dispatch(gmAction())}>
        GM
      </button>{" "}
      <button className="btn btn-success" onClick={() => dispatch(gnAction())}>
        GN
      </button>
    </div>
  );
};

export default Message;
