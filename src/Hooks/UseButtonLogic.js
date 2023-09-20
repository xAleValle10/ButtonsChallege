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
    }
}
