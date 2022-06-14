import { useState } from "react";
import "./App.css";
import { initialData, actions, ReplaceMeWithCorrectFunction } from "./const";
import ControlPanel from "./ControlPanel";
import DonutShelf from "./DonutShelf";
import {
  addDonutToBox,
  alterSprinklesToDonut,
  alterFillingToDonut,
  removeDonutFromBox,
  alterDonutFlavor,
} from "./utils";

const App = () => {
  const [donutShelfData, setDonutShelfData] = useState(initialData);
  const [selectedAction, setSelectedAction] = useState("addMoreDonut"); //default action is add
  const [selectedType, setSelectedType] = useState("glazed");

  const handleActionClick = (label) => {
    // TODO update the selectedAction state to reflect the new label
  };

  const handleTypeClick = (label) => {
    // TODO update the selectedType state to reflect the new label
  };

  const handleBoxClick = (userId, donutId) => {
    switch (selectedAction) {
      case actions.sprinkles.action:
        // TODO toggle donut sprinkles prop on selected donut using function `alterSprinklesToDonut`
        // and update the `donutShelfData` state
        break;
      case actions.filled.action:
        // TODO toggle donut filled prop on selected donut using function `alterFillingToDonut`
        // and update the `donutShelfData` state
        break;
      case actions.add.action:
        // TODO add donut to selected box using function `addDonutToBox`
        setDonutShelfData(addDonutToBox(donutShelfData, userId, selectedType));
        break;
      case actions.remove.action:
        console.log("click! add functionality to to delete me");
        // TODO delete selected donut using function `removeDonutFromBox`
        // and update the `donutShelfData` state
        break;
      case actions.flavor.action:
        console.log("click! add functionality to update my flavor");
        // TODO update flavor of selected donut using function `alterDonutFlavor`
        // and update the `donutShelfData` state
        break;
      default:
        console.error("An invalid action was passed to handleBoxClick");
    }
  };

  return (
    <div className="app-wrapper">
      <h1>Voodoo Todo:</h1>
      <div className="app-container">
        <ControlPanel
          selectedAction={"ReplaceWithCorrectValue"}
          handleActionClick={ReplaceMeWithCorrectFunction}
          selectedType={"ReplaceWithCorrectValue"}
          handleTypeClick={ReplaceMeWithCorrectFunction}
        />
        <DonutShelf
          donutShelfData={donutShelfData} // ReplaceWithCorrectValue              //replaced {[]} with {donutShelfData}
          handleBoxClick={handleBoxClick}
          isAdd={selectedAction === actions.add.action}
        />
      </div>
    </div>
  );
};

export default App;
