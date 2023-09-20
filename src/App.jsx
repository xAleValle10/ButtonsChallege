import {
  NavBar,
  CustomButton,
  AditionalPreferences,
  ButtonType,
  ChooseSize,
  ChangeColor,
  UseButtonLogic,
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
  } = UseButtonLogic();
  return (
    <main className="mainStyle">
      <NavBar />

      <section1 className="section1">
        <CustomButton
          size={size}
          color={color}
          type={type}
          isChecked={isChecked}
          isDisabled={isDisabled}
          isdisabledShadow={isdisabledShadow}
        />
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
        </div>
      </section1>
    </main>
  );
};
