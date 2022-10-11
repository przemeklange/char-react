import React from "react";
import Img from '../img/img.png'
import Attach from '../img/attach.png'

const Input = () => {
  return (
    <div className="input">
      <input placeholder="Type something..." type="text" />
      <div className="send">
        <img src={Img} alt="" />
        <input type="file" name="" id="file" style={{ display: "none" }} />
        <label htmlFor="file">
          <img src={Attach} alt="" />
        </label>
        <button>Send</button>
      </div>
    </div>
  );
};

export default Input;
