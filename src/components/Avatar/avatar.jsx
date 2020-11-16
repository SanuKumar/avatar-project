import React from "react";
import Avatar from "react-avatar-edit";
import { useState } from "react";

function AvatarEdit() {
  const [preview, setPreview] = useState(null);
  function onClose() {
    setPreview(null);
  }
  function onCrop(pv) {
    setPreview(pv);
  }
  function onBeforeFileLoad(elem) {
    if (elem.target.files[0].size > 2000000) {
      alert("File is too big!");
      elem.target.value = "";
    }
  }
  return (
    <div>
      <Avatar
        width={100}
        height={100}
        onCrop={onCrop}
        onClose={onClose}
        onBeforeFileLoad={onBeforeFileLoad}
        src={null}
        labelStyle={{ fontSize: "-0.75em" }}
        label={"Select a File"}
        backgroundColor="red"
        lineWidth="2"
      />
      <br />
      {preview && (
        <>
          <img src={preview} alt="Preview" />
          <a href={preview} download="avatar">
            Download image
          </a>
        </>
      )}
    </div>
  );
}
export default AvatarEdit;
