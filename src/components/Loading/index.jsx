import React from "react";
import loadingStyles from "./loading.module.css";

export function Loading(props) {
  return (
    <div
      className={
        props.btnLoader ? loadingStyles["btnLoder"] : loadingStyles["spinner"]
      }
      style={{
        minHeight: props.btnLoader ? "200" : "auto",
        ...(props.style || {}),
      }}
    >
      <div className={loadingStyles["bounce1"]}></div>
      <div className={loadingStyles["bounce2"]}></div>
      <div className={loadingStyles["bounce3"]}></div>
    </div>
  );
}
