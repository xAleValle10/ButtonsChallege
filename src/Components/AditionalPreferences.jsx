export const AditionalPreferences = ({
  isChecked,
  isDisabled,
  isdisabledShadow,
  handleCheckbox,
  setIsChecked,
  setIsDisabled,
  setisDisabledShadow,
}) => {
  return (
    <section>
      <h4> Additional preferences </h4>
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={() => handleCheckbox(isChecked, setIsChecked)}
        />
        Hover & Focus
      </label>
      <label>
        <input
          type="checkbox"
          checked={isDisabled}
          onChange={() => handleCheckbox(isDisabled, setIsDisabled)}
        />
        Disable Button
      </label>
      <label>
        <input
          type="checkbox"
          checked={isdisabledShadow}
          onChange={() => handleCheckbox(isdisabledShadow, setisDisabledShadow)}
        />
        Disable Shadow
      </label>
    </section>
  );
};
