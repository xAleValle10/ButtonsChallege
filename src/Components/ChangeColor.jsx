import React from "react";

export const ChangeColor = ({ color, changeColor }) => {
  return (
    <section>
      <label>
        <h4> Choose Your Color </h4>
        <input
          type="radio"
          name="color"
          value="defaultColor"
          checked={color === "defaultColor"}
          onChange={() => changeColor("defaultColor")}
        />
        Default
      </label>
      <label>
        <input
          type="radio"
          name="color"
          value="primaryColor"
          checked={color === "primaryColor"}
          onChange={() => changeColor("primaryColor")}
        />
        Primary
      </label>
      <label>
        <input
          type="radio"
          name="color"
          value="secondaryColor"
          checked={color === "secondaryColor"}
          onChange={() => changeColor("secondaryColor")}
        />
        Secondary
      </label>
      <label>
        <label>
          <input
            type="radio"
            name="color"
            value="successColor"
            checked={color === "successColor"}
            onChange={() => changeColor("successColor")}
          />
          Succes
        </label>
        <label>
          <input
            type="radio"
            name="color"
            value="warningColor"
            checked={color === "warningColor"}
            onChange={() => changeColor("warningColor")}
          />
          Warning
        </label>
        <input
          type="radio"
          name="color"
          value="dangerColor"
          checked={color === "dangerColor"}
          onChange={() => changeColor("dangerColor")}
        />
        Danger
      </label>
    </section>
  );
};
