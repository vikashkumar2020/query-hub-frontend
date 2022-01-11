import React from "react";
import { useState } from "react";
import HomeIcon from "@material-ui/icons/Home";
import FeaturedPlayListOutlinedIcon from "@material-ui/icons/FeaturedPlayListOutlined";
import {
  AssignmentTurnedInOutlined,
  ExpandMoreOutlined,
  NotificationsOutlined,
  PeopleAltOutlined,
  Search,
} from "@material-ui/icons";
import { Avatar, Button, Input } from "@material-ui/core";
import Modal from "react-responsive-modal";
import CloseIcon from "@material-ui/icons/Close";
import "./css/queryHeader.css";
import "react-responsive-modal/styles.css";

function QueryHeader() {
  const [isModalOpen, setisModalOpen] = useState(false);
  const [inputUrl, setinputUrl] = useState("");
  const Close = <CloseIcon />;

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
          <Button
            onClick={() => {
              setisModalOpen(true);
            }}
          >
            Add Question
          </Button>
          <Modal
            open={isModalOpen}
            closeIcon={Close}
            center
            closeOnOverlayClick={false}
            onClose={() => {
              setisModalOpen(false);
            }}
            closeOnEsc={true}
          >
            <div className="modal__title">
              <h5>Add Question</h5>
              <h5>Share Link</h5>
            </div>
            <div className="modal__info">
              <Avatar className="avatar" />
              <div className="modal__scope">
                <PeopleAltOutlined />
                <p>Public</p>
                <ExpandMoreOutlined />
              </div>
            </div>
            <div className="modal__Field">
              <Input type="text" placeholder="Start your query" />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <input
                  style={
                    {
                      width: "100%",
                      margin: "10px 0px",
                      border: "1px solid lightgray",
                      padding: "10px",
                      outline: "1px solid lightgray",
                    }
                  } 
                  value={inputUrl}
                  onChange={(e) => {
                    setinputUrl(e.target.value);
                  }}
                  type="text"
                  placeholder="Optional include a image link that gives context"
                />
                {inputUrl.length > 0 ? (
                  <img style={
                    {
                      width: "100%",
                      height: "fit-content",
                    }
                  } src={inputUrl} alt="img" />
                 ) : (
                   <img style={
                    {
                      width: "50%",
                      height: "50%",
                      objectFit: "contain",
                    }
                  } src="https://previews.123rf.com/images/yehorlisnyi/yehorlisnyi1706/yehorlisnyi170600377/80443890-new-question-mark-symbol-flat-bright-cartoon-bulb-white-and-orange-colors-sign-stylized-vector-light.jpg" alt="img" />
                  )}
              </div>
            </div>
            <div className="modal__buttons">
              <Button
                onClick={() => {
                  setisModalOpen(false);
                }}
              >
                Cancel
              </Button>
              <Button type="submit">Add Query</Button>
            </div>
          </Modal>
          <div className="qHeader_Rem">
            <Avatar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default QueryHeader;
