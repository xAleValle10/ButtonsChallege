import { useState } from 'react'

export const UseButtonLogic = () => {
    const [isChecked, setIsChecked] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false);
    const [isdisabledShadow, setisDisabledShadow] = useState(false);
    const handleCheckbox = (value, setterFunction) => {
    if (value === true) {
      setterFunction(false);
    } else {
      setterFunction(true);
      if (setterFunction === setIsDisabled) {
        setIsChecked(false);
      } else if (setterFunction === setIsChecked) {
        setIsDisabled(false);
      }
    }
  };

  const [size, setSize] = useState("medium");
  const [color, setColor] = useState("defaultColor");
  const [type, setType] = useState("defaultType");
  const [icons, setIcons] = useState([
    { name: "key", visible: false },
    { name: "done", visible: false },
    { name: "close", visible: false },
    { name: "favorite", visible: false },
    { name: "star", visible: false },
  ]);

  const handleIconChange = (iconName) => {
    setIcons((prevIcons) =>
      prevIcons.map((icon) =>
        icon.name === iconName ? { ...icon, visible: !icon.visible } : icon
      )
    );
  };
  const [iconsR, setIconsR] = useState([
    { nameR: "key", visibleR: false },
    { nameR: "done", visibleR: false },
    { nameR: "close", visibleR: false },
    { nameR: "favorite", visibleR: false },
    { nameR: "star", visibleR: false },
  ]);

  const handleIconChangeR = (iconNameR) => {
    setIconsR((prevIconsR) =>
      prevIconsR.map((iconR) =>
        iconR.nameR === iconNameR ? { ...iconR, visibleR: !iconR.visibleR } : iconR
      )
    );
  };
  

  const changeSize = (newSize) => {
    setSize(newSize);
  };

  const changeColor = (newColor) => {
    setColor(newColor);
  };

  const changeType = (newType) => {
    setType(newType);
  };
    return {
        isChecked,
        isDisabled,
        isdisabledShadow,
        handleCheckbox,
        size,
        color,
        type,
        changeSize,
        changeColor,
        changeType,
        setIsChecked,
        setIsDisabled,
        setisDisabledShadow,
        icons,
        setIcons,
        handleIconChange,
        iconsR,
        setIconsR,
        handleIconChangeR
    }
}
