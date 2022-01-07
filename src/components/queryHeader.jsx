import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import FeaturedPlayListOutlinedIcon from "@material-ui/icons/FeaturedPlayListOutlined";
import {
  AssignmentTurnedInOutlined,
  NotificationsOutlined,
  PeopleAltOutlined,
  Search,
} from "@material-ui/icons";
import { Avatar, Button } from "@material-ui/core";

import "./css/queryHeader.css";

function queryHeader() {
  return (
    <div className="qHeader">
      <div className="qHeader-content">
        <div className="qHeader__logo">
          <img
            src="https://previews.123rf.com/images/yehorlisnyi/yehorlisnyi1706/yehorlisnyi170600377/80443890-new-question-mark-symbol-flat-bright-cartoon-bulb-white-and-orange-colors-sign-stylized-vector-light.jpg"
            alt="logo"
          />
        </div>
        <div className="qHeader__icons">
          <div className="qHeader__icon">
            <HomeIcon></HomeIcon>
          </div>
          <div className="qHeader__icon">
            <FeaturedPlayListOutlinedIcon />
          </div>
          <div className="qHeader__icon">
            <AssignmentTurnedInOutlined />
          </div>
          <div className="qHeader__icon">
            <NotificationsOutlined />
          </div>
          <div className="qHeader__icon">
            <PeopleAltOutlined></PeopleAltOutlined>
          </div>
        </div>
        <div className="qHeader__input">
          <Search />
          <input type="text" placeholder="Search Query" />
        </div>
        <div className="qHeader__sub">
        <Button>Add Question</Button>
          <div className="qHeader_Rem">
            <Avatar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default queryHeader;
