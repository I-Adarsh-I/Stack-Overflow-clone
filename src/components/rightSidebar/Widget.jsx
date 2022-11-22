import React from "react";
import comment from "../../resources/message-solid.svg";
import pen from "../../resources/pen.svg";
import Blacklogo from "../../resources/stack-overflow-black.svg";

function Widget() {
  return (
    <div className="widget">
      <h4>The Overflow Blog</h4>
      <div className="right-sidebar-div-1">
        <div className="right-sidebar-div-2">
          <img src={pen} alt="pen" width="13px" />
          <p>
            The creator of Homebrew has a plan to get open source contributors
            paid
          </p>
        </div>
        <div className="right-sidebar-div-2">
          <img src={pen} alt="pen" width="13px" />
          <p>
            The creator of Homebrew has a plan to get open source contributors
            paid
          </p>
        </div>
      </div>
      <h4>Upcomming Events</h4>
      <div className="right-sidebar-div-1">
        <div className="right-sidebar-div-2">
          <img src={comment} alt="pen" width="13px" />
          <p>
            The creator of Homebrew has a plan to get open source contributors
            paid
          </p>
        </div>
        <div className="right-sidebar-div-2">
          <img src={Blacklogo} alt="pen" width="13px" />
          <p>
            The creator of Homebrew has a plan to get open source contributors
            paid
          </p>
        </div>
      </div>
      <h4>Featured On Meta</h4>
      <div className="right-sidebar-div-1">
        <div className="right-sidebar-div-2">
          <p >38</p>
          <p>
            The creator of Homebrew has a plan to get open source contributors
            paid
          </p>
        </div>
        <div className="right-sidebar-div-2">
          <p>11</p>
          <p>
            The creator of Homebrew has a plan to get open source contributors
            paid
          </p>
        </div>
        <div className="right-sidebar-div-2">
          <p>24</p>
          <p>
            The creator of Homebrew has a plan to get open source contributors
            paid
          </p>
        </div>
      </div>
    </div>
  );
}

export default Widget;
