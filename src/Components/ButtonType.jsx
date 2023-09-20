import React from "react";

export const ButtonType = ({ type, changeType }) => {
  return (
    <section>
      <label>
        <h4> Choose Your Button Type </h4>
        <input
          type="radio"
          name="buttonType"
          value="default"
          checked={type === "defaultType"}
          onChange={() => changeType("defaultType")}
        />
        Default
      </label>
      <label>
        <input
          type="radio"
          name="buttonType"
          value="outline"
          checked={type === "outlineType"}
          onChange={() => changeType("outlineType")}
        />
        Outline
      </label>
      <label>
        <input
          type="radio"
          name="buttonType"
          value="text"
          checked={type === "textType"}
          onChange={() => changeType("textType")}
        />
        Text
      </label>
    </section>
  );
};
