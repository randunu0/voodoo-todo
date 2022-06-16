import Donut from "../Donut/Donut";
import "./DonutBox.css";

const DonutBox = ({ boxData, handleBoxClick, isAdd }) => {
  const handleClick = (e) => {
    // this will prevent this event from bubbling to the DonutShelf
    e.stopPropagation();
    //console.log("box clicked");
    handleBoxClick(boxData.userId, "");
  };

  return (
    <div className="donut-column" onClick={handleClick}>
      <h3>{boxData.name}</h3>
      <div className={`donut-container ${isAdd ? "add" : ""}`}>
        {boxData.donuts.map((donutData) => {
          return (
            <Donut
              key={donutData.donutId}
              donutData={donutData}
              handleBoxClick={handleBoxClick}
              isAdd={isAdd}
              userId={boxData.userId}
            />
          );
        })}
      </div>
    </div>
  );
};

export default DonutBox;
