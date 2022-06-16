import ButtonControl from "../ButtonControl";
import { actionOptions, flavorOptions, actions } from "../const";
import "./ControlPanel.css";

const ControlPanel = ({
  selectedAction,
  handleActionClick,
  selectedType,
  handleTypeClick,
}) => {
  const disableFlavorOptions =
    selectedAction !== actions.add.action &&
    selectedAction !== actions.flavor.action;

  return (
    <>
      <div className="panel">
        {actionOptions.map((option) => {
          // This return statement will be returned when `actionOptions`
          // are mapped
          return (
            <ButtonControl
              key={option.name}
              selected={selectedAction}
              option={option}
              onClick={handleActionClick}
            />
          );
        })}
      </div>
      <div className="panel">
        {flavorOptions.map((option) => {
          // This return statement will be returned when `flavorOptions`
          // are mapped
          return (
            <ButtonControl
              key={option.name}
              selected={selectedType}
              option={option}
              onClick={handleTypeClick}
              disabled={disableFlavorOptions} //'ReplaceWithCorrectValue'
            />
          );
        })}
      </div>
    </>
  );
};

export default ControlPanel;
