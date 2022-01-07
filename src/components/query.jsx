import React from "react";
import "./css/query.css";
import QueryHeader from "./queryHeader";
import Feed from "./feed";
import Widget from "./widget";
import Sidebar from "./sidebar";

function query() {
  return (
    <div className="query">
      <QueryHeader />
      <div className="query__contents">
        <div className="query__content">
          <Sidebar />
          <Feed />
          <Widget />
        </div>
      </div>
    </div>
  );
}

export default query;
