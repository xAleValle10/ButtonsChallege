import {
  NavBar,
  CustomButton,
  AditionalPreferences,
  ButtonType,
  ChooseSize,
  ChangeColor,
  UseButtonLogic,
  Icons,
} from "./Imports";

export const App = () => {
  const {
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
    handleIconChange,
    Icon,
    iconsR,
    handleIconChangeR,
    IconR,
  } = UseButtonLogic();
  return (
    <div className="mainstyle">
      <div className="navbar">
        <NavBar />
      </div>

      <div className="main">
        <CustomButton
          size={size}
          color={color}
          type={type}
          isChecked={isChecked}
          isDisabled={isDisabled}
          isdisabledShadow={isdisabledShadow}
          icons={icons}
          iconsR={iconsR}
        />
      </div>
      <div className="sidebar">
        <div>
          <AditionalPreferences
            isChecked={isChecked}
            isDisabled={isDisabled}
            isdisabledShadow={isdisabledShadow}
            handleCheckbox={handleCheckbox}
            setIsChecked={setIsChecked}
            setIsDisabled={setIsDisabled}
            setisDisabledShadow={setisDisabledShadow}
          />
          <div>
            <ButtonType type={type} changeType={changeType} />
          </div>
          <div>
            <ChooseSize size={size} changeSize={changeSize} />
          </div>
          <div>
            {type !== "outlineType" && type !== "textType" && (
              <ChangeColor color={color} changeColor={changeColor} />
            )}
          </div>
          <div>
            <Icons
              icons={icons}
              handleIconChange={handleIconChange}
              Icon={Icon}
              iconsR={iconsR}
              handleIconChangeR={handleIconChangeR}
              IconR={IconR}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
