import React from "react";

export const CustomButton = ({
  size,
  color,
  type,
  isChecked,
  isDisabled,
  isdisabledShadow,
  icons,
  iconsR,
}) => {
  const Icon = ({ name, visible }) => {
    return visible ? (
      <span className="material-symbols-outlined">{name}</span>
    ) : null;
  };
  const IconR = ({ nameR, visibleR }) => {
    return visibleR ? (
      <span className="material-symbols-outlined">{nameR}</span>
    ) : null;
  };
  return (
    <container className="container1">
      <div>
        <div>
          <h4>&lt;Button/&gt;</h4>
        </div>
        <div>
          <button
            className={`defaultButton-${size} defaultButton-${color} defaultButton-${type} ${
              isChecked ? "hoverFocus" : ""
            } ${isDisabled ? "disabledButton" : ""} ${
              isdisabledShadow ? "disabledShadow" : ""
            }`}
          >
            {icons.map((icon) => (
              <Icon key={icon.name} name={icon.name} visible={icon.visible} />
            ))}
            Default
            {iconsR.map((iconR) => (
              <IconR
                key={iconR.nameR}
                nameR={iconR.nameR}
                visibleR={iconR.visibleR}
              />
            ))}
          </button>
        </div>
      </div>
    </container>
  );
};
