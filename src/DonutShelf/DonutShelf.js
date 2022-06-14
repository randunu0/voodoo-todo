import DonutBox from "../DonutBox";

// all props will be used eventually
const DonutShelf = ({ donutShelfData, handleBoxClick, isAdd }) => {
  return (
    <>
      {donutShelfData.map((donutBoxData) => {
        return (
          <DonutBox
            key={donutBoxData.userId}
            boxData={donutBoxData}
            handleBoxClick={handleBoxClick}
            isAdd={isAdd}
          /> // render donut boxes
        );
      })}
    </>
  );
};

export default DonutShelf;
