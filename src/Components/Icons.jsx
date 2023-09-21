export const Icons = ({
  icons,
  handleIconChange,
  iconsR,
  handleIconChangeR,
}) => {
  return (
    <section>
      <label>
        <h4> Choose Your Icons (left)</h4>
        {icons.map((icon) => (
          <label key={icon.name}>
            <input
              type="checkbox"
              checked={icon.visible}
              onChange={() => handleIconChange(icon.name)}
            />
            {icon.name}
          </label>
        ))}
      </label>
      <label>
        <h4> Choose Your Icons (Right)</h4>
        {iconsR.map((iconR) => (
          <label key={iconR.nameR}>
            <input
              type="checkbox"
              checked={iconR.visibleR}
              onChange={() => handleIconChangeR(iconR.nameR)}
            />
            {iconR.nameR}
          </label>
        ))}
      </label>
    </section>
  );
};
