import { useState } from "react";
import "./App.css";
import { initialData, actions } from "./const";
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
    setSelectedAction(label);
    //console.log(label);
  };

  const handleTypeClick = (label) => {
    // TODO update the selectedType state to reflect the new label
    setSelectedType(label);
    //console.log(label);
  };

  const handleBoxClick = (userId, donutId) => {
    switch (selectedAction) {
      case actions.sprinkles.action:
        // TODO toggle donut sprinkles prop on selected donut using function `alterSprinklesToDonut`
        // and update the `donutShelfData` state
        //console.log("sprinkle");
        setDonutShelfData(
          alterSprinklesToDonut(donutShelfData, userId, donutId)
        );
        break;
      case actions.filled.action:
        // TODO toggle donut filled prop on selected donut using function `alterFillingToDonut`
        // and update the `donutShelfData` state
        //console.log("fill");
        setDonutShelfData(alterFillingToDonut(donutShelfData, userId, donutId));
        break;
      case actions.add.action:
        // TODO add donut to selected box using function `addDonutToBox`
        //console.log("add");
        //console.log(donutId);
        if (donutId === "") {
          setDonutShelfData(
            addDonutToBox(donutShelfData, userId, selectedType)
          );
        }
        break;
      case actions.remove.action:
        //console.log("delete");
        // TODO delete selected donut using function `removeDonutFromBox`
        // and update the `donutShelfData` state
        setDonutShelfData(removeDonutFromBox(donutShelfData, userId, donutId));
        break;
      case actions.flavor.action:
        //console.log("update");
        // TODO update flavor of selected donut using function `alterDonutFlavor`
        // and update the `donutShelfData` state
        setDonutShelfData(
          alterDonutFlavor(donutShelfData, userId, donutId, selectedType)
        );
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
          selectedAction={selectedAction}
          handleActionClick={handleActionClick}
          selectedType={selectedType}
          handleTypeClick={handleTypeClick}
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
