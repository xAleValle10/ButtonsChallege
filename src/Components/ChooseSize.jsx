import React from "react";

export const ChooseSize = ({ size, changeSize }) => {
  return (
    <section>
      <h4> Choose Your size </h4>
      <label>
        <input
          type="radio"
          name="size"
          value="small"
          checked={size === "small"}
          onChange={() => changeSize("small")}
        />
        Small
      </label>
      <label>
        <input
          type="radio"
          name="size"
          value="medium"
          checked={size === "medium"}
          onChange={() => changeSize("medium")}
        />
        Medium
      </label>
      <label>
        <input
          type="radio"
          name="size"
          value="large"
          checked={size === "large"}
          onChange={() => changeSize("large")}
        />
        Large
      </label>
    </section>
  );
};
