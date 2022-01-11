import React from "react";
import { useState } from "react";
import "./css/post.css";
import { Avatar } from "@material-ui/core";
import {
  ArrowUpwardOutlined,
  ArrowDownwardOutlined,
  RepeatOneOutlined,
  ChatBubbleOutlined,
  ShareOutlined,
  MoreHorizOutlined,
} from "@material-ui/icons";
import { Button } from "@material-ui/core";
import Modal from "react-responsive-modal";
import CloseIcon from "@material-ui/icons/Close";
import "react-responsive-modal/styles.css";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
function Post() {
  const [isModalOpen, setisModalOpen] = useState(false);
  const Close = <CloseIcon />;

  return (
    <div className="post">
      <div className="post__info">
        <Avatar />
        <h4>User Name</h4>
        <small>Timestamp</small>
      </div>
      <div className="post__body">
        <p>This is Test Query</p>
        <button
          className="post__btnAnswer"
          onClick={() => {
            setisModalOpen(true);
          }}
        >
          Answer
        </button>
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
          <div className="modal__question">
            <h1>Question</h1>
            <p>asked by {""} <span>Username</span>  {""}on timestamp </p>
          </div>
          <div className="modal__answer">
            <ReactQuill placeholder="Enter your answer" />
          </div>
          <div className="modal__buttons">
            <Button>Add Answer</Button>
            <Button>Cancel</Button>
          </div>
        </Modal>
      </div>
      <div className="post__footer">
        <div className="post__footerAction">
          <ArrowUpwardOutlined />
          <ArrowDownwardOutlined />
        </div>
        <RepeatOneOutlined />
        <ChatBubbleOutlined />
        <div className="post__footerLeft">
          <ShareOutlined />
          <MoreHorizOutlined />
        </div>
      </div>
      <p
        style={{
          color: "#999",
          fontSize: "12px",
          fontWeight: "bold",
          margin: "10px 5px",
          padding: "0px 10px",
        }}
      >
        1 Answer
      </p>
      <div
        style={{
          margin: "5px 0px 0px 0px",
          padding: "5px 0px 0px 0px",
          borderTop: "1px solid #e6e6e6",
        }}
        className="post__answer"
      >
        <div className="post-answer-container">
          <div
            style={{
              display: "flex",
              width: "33%",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "10px 5px",
              borderTop: "1px solid #e6e6e6",
            }}
            className="post-answered"
          >
            <Avatar />
            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                width: "100%",
              }}
              className="post-info"
            >
              <p
                style={{
                  fontWeight: "bold",
                  fontSize: "14px",
                }}
              >
                Username
              </p>
              <span
                style={{
                  fontSize: "12px",
                  padding: "2px 0px",
                }}
              >
                Timestamp
              </span>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              alignItems: "flex-start",
              padding: "10px 20px 10px 10px",
            }}
            className="post-answer"
          >
            This is test answer
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
